package main

import (
	"encoding/json"
	"fmt"
	"github.com/gorilla/mux"
	"log"
	"math/rand"
	"net/http"
	"time"
)

var machine = MachineState{
	RobotArmPositions: map[string]string{"left_arm": "HOME", "middle_arm": "HOME", "right_arm": "HOME"},
	Processes:         map[uint32]Process{},
}

//bash polling: 	while true; do curl localhost:8080/machine_state; sleep .5; done
//add process: curl localhost:8080/process --data '{"name":"test","num_states":100}'

func main() {
	go randomArmMovements()
	r := mux.NewRouter()
	r.HandleFunc("/machine_state", getMachineState).Methods("GET")
	r.HandleFunc("/process", createProcess).Methods("POST")
	r.HandleFunc("/kill", killProcess).Methods("POST")
	r.HandleFunc("/reset", reset).Methods("POST")

	// Start server
	fmt.Printf("webserver is running at 0.0.0.0:8080...")
	log.Fatal(http.ListenAndServe(":8080", r))
}

func getMachineState(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	machine.Encode(w)
}

func reset(w http.ResponseWriter, r *http.Request) {
	machine = MachineState{
		RobotArmPositions: map[string]string{"left_arm": "HOME", "middle_arm": "HOME", "right_arm": "HOME"},
		Processes:         map[uint32]Process{},
	}
	w.WriteHeader(http.StatusOK)
}

func killProcess(w http.ResponseWriter, r *http.Request) {
	var pidMap map[string]uint32
	err := json.NewDecoder(r.Body).Decode(&pidMap)
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		fmt.Println(err)
	} else {
		if val, ok := pidMap["pid"]; ok {
			if machine.KillProcess(val) {
				w.WriteHeader(http.StatusOK)
			}
		}
		w.WriteHeader(http.StatusBadRequest)
	}
}
func createProcess(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	var processRequest ProcessRequest

	err := json.NewDecoder(r.Body).Decode(&processRequest)
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		fmt.Println(err)
	} else {
		go handleProcess(processRequest)
		w.WriteHeader(http.StatusAccepted)
	}
}


func handleProcess(processRequest ProcessRequest) {
	pid := machine.AddProcess(processRequest)
	time.Sleep(time.Millisecond * time.Duration(rand.Intn(2500)))
	for i := uint16(0); i < processRequest.NumStates; i++ {
		verb := processVerbs[rand.Intn(len(processVerbs))]
		resource := processResources[rand.Intn(len(processResources))]
		action := fmt.Sprintf("%s %s", verb, resource)
		process := machine.GetProcess(pid)
		if process.State == "TERMINATED" {
			return
		}
		process.State = "RUNNING"
		process.NumCurrentState = i + 1
		process.CurrentAction = action
		machine.UpdateProcess(pid, process)
		time.Sleep(time.Millisecond * time.Duration(rand.Intn(5000)))
	}
	process := machine.GetProcess(pid)
	process.CurrentAction = ""
	process.State = "FINISHED"
	machine.UpdateProcess(pid, process)
}

func randomArmMovements() {
	for {
		time.Sleep(time.Second + time.Millisecond*time.Duration(rand.Intn(3000)))
		armId := arms[rand.Intn(len(arms))]
		position := positions[rand.Intn(len(positions))]
		machine.SetArmPosition(armId, position)
	}
}

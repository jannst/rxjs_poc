package main

import (
	"encoding/json"
	"io"
	"sync"
)

var processResources = []string{"eggs", "rice", "potatoes", "water", "tomatos", "pasta", "oil", "oranges"}
var processVerbs = []string{"cleaning", "cooking", "cutting", "frying", "washing", "adding", "removing"}

var positions = []string{"HOME", "UPPER_LEFT", "UPPER_RIGHT", "LOWER_RIGHT", "UPPER_RIGHT", "TOP", "BOTTOM"}
var arms = []string{"left_arm", "middle_arm", "right_arm"}

type MachineState struct {
	mu                sync.Mutex
	processCounter    uint32
	RobotArmPositions map[string]string  `json:"arm_positions"`
	Processes         map[uint32]Process `json:"processes"`
}

type Process struct {
	Name            string `json:"name"`
	State           string `json:"state"`
	CurrentAction   string `json:"current_action"`
	NumCurrentState uint16 `json:"num_current_state"`
	NumStates       uint16 `json:"num_states"`
}

type ProcessRequest struct {
	Name      string `json:"name"`
	NumStates uint16 `json:"num_states"`
}

func (c *MachineState) AddProcess(processRequest ProcessRequest) uint32 {
	c.mu.Lock()
	defer c.mu.Unlock()
	c.processCounter++
	process := Process{
		Name:      processRequest.Name,
		State:     "INITIALIZING",
		NumStates: processRequest.NumStates,
	}
	c.Processes[c.processCounter] = process
	return c.processCounter
}

func (c *MachineState) UpdateProcess(id uint32, process Process) {
	c.mu.Lock()
	defer c.mu.Unlock()
	c.Processes[id] = process
}

func (c *MachineState) GetProcess(id uint32) Process {
	c.mu.Lock()
	defer c.mu.Unlock()
	return c.Processes[id]
}

func (c *MachineState) KillProcess(id uint32) bool {
	c.mu.Lock()
	defer c.mu.Unlock()
	if val, ok := c.Processes[id]; ok {
		val.State = "TERMINATED"
		c.Processes[id] = val
		return true
	} else {
		return false
	}
}

func (c *MachineState) ContainsProcess(id uint32) bool {
	c.mu.Lock()
	defer c.mu.Unlock()
	_, ok := c.Processes[id]
	return ok
}

func (c *MachineState) SetArmPosition(armId string, position string) {
	c.mu.Lock()
	defer c.mu.Unlock()
	c.RobotArmPositions[armId] = position
}

func (c *MachineState) Encode(writer io.Writer) {
	c.mu.Lock()
	defer c.mu.Unlock()
	json.NewEncoder(writer).Encode(c)
}

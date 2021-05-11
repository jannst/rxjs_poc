const breakpoints: any = ['10em', '40em', '52em', '64em', '80em']

// aliases
breakpoints.xsm = breakpoints[0]
breakpoints.sm = breakpoints[1]
breakpoints.md = breakpoints[2]
breakpoints.lg = breakpoints[3]
breakpoints.xl = breakpoints[4]

export const theme = {
    colors: {
        black: '#000e1a',
        white: '#fff',
        brand: '#8ae000',
        primary: '#007575',
    },
    space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
    breakpoints: breakpoints
}
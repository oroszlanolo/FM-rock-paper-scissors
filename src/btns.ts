export interface Btn {
    name: string,
    bonus: boolean
}

export const btns : Btn[] = [
    {
        name: "scissors",
        bonus: false
    },
    {
        name: "paper",
        bonus: false
    },
    {
        name: "rock",
        bonus: false
    },
    {
        name: "lizard",
        bonus: true
    },
    {
        name: "spock",
        bonus: true
    },
]
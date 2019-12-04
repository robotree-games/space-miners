const createPlayer = (id: any, token: string) => ({
    id,
    token,
    treasure: [],
    currentPosition: 0,
    movementDirection: 'forward',
    isSafe: false
})

const setup = () => ({
    cells: Array(12).fill(null),
    air: 25,
    players: [
        createPlayer(0, 'X'),
        createPlayer(1, 'Y')
    ]
})

export default setup;
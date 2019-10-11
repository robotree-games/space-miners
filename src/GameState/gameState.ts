const createPlayer = (id: any, token: string) => ({
    id,
    token,
    currentPosition: 0
})

const setup = () => ({
    cells: Array(12).fill(null),
    players: [
        createPlayer(0, 'X'),
        createPlayer(1, 'Y')
    ]
})

export default setup;
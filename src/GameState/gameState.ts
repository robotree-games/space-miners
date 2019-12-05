class GameState {

    public createPlayer:any = (id: any, token: string) => ({
        id,
        token,
        treasure: [],
        currentPosition: 0,
        movementDirection: 'forward',
        isSafe: false
    })

// currently set on board.
// TODO: set GameState from GameSettings component

   public setup:any = () => ({
        cells: Array(12).fill(null),
        air: 25,
        players: [
            this.createPlayer(0, 'X'),
            this.createPlayer(1, 'Y')
        ]
    })
}
export default GameState;
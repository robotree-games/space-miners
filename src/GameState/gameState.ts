import React from 'react';

interface IProps {}
interface IState {
    playerNumber: number
}

class GameState extends React.Component<IProps, IState>  {
    constructor(props:any) {
        super(props)
    }

    public createPlayer:any = (id: any, token: string) => ({
        id,
        token,
        treasure: [],
        currentPosition: 0,
        movementDirection: 'forward',
        isSafe: false
    })
    
    // public createPlayers = () => {
    //     let i;
    //     let playerList = [];
    //     for(i = 0; i < this.state.playerNumber; i++) {
    //         console.log('player ', i)
    //         playerList.push(this.createPlayer(i, 'Player ' + i))
    //     }
    //     return playerList;
    // }

   


// currently set on board.
// TODO: set GameState from GameSettings component - get this.state.playerCount and create players for each

   public setup:any = () => ({
        cells: Array(12).fill(null),
        air: 25,
        players: [
            this.createPlayer(0, 'x'),
            this.createPlayer(1, 'y`')
        ]
    })
}
export default GameState;
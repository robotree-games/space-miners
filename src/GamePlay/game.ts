import { Game, IPlayer, IGameCtx } from 'boardgame.io/core';
import { AI, IAIMoveObj } from 'boardgame.io/ai';
import setup from '../GameState/gameState';



function rollDie(G: any, ctx: any, number: number) {
    let die = ctx.random.Die(number);
    G.rollValue = die;
}

function movePlayer(G: any, ctx: any, roll: number) {
    G.players[ctx.currentPlayer].currentPosition = G.players[ctx.currentPlayer].currentPosition + roll;
    G.cells[G.players[ctx.currentPlayer].currentPosition] = G.players[ctx.currentPlayer].token;
}

const TicTacToe = ({
    name: "space-miners",
    setup,
    phases: {
        roll: {
            moves: {rollDie},
            start: true,
            next: 'movement',
        },
        movement: {
            moves: {movePlayer},
            next: 'roll',
        },
    },

  });
export default TicTacToe;

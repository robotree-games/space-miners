import { Game, IPlayer, IGameCtx } from 'boardgame.io/core';
import { AI, IAIMoveObj } from 'boardgame.io/ai';
import setup from '../GameState/gameState';



function rollDie(G: any, ctx: any, number: number) {
    let die = ctx.random.Die(number);
    G.rollValue = die;
}

function movePlayer(G: any, ctx: any, roll: number, from: number) {
    G.players[ctx.currentPlayer].currentPosition = G.players[ctx.currentPlayer].currentPosition + roll;
    G.cells[G.players[ctx.currentPlayer].currentPosition] = G.players[ctx.currentPlayer].token;
}

function pickUpTreasure(G: any, ctx: any) {
    G.players[ctx.currentPlayer].treasure.push(G.players[ctx.currentPlayer].currentPosition)
}

const SpaceMiners = ({
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
            next: 'treasure',
        },
        treasure: {
            moves: {pickUpTreasure},
            next: 'roll'
        },
    },

  });
export default SpaceMiners;

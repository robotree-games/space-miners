import { Game, IPlayer, IGameCtx } from 'boardgame.io/core';
import { AI, IAIMoveObj } from 'boardgame.io/ai';
import setup from '../GameState/gameState';
import { once } from 'cluster';
import { Z_MEM_ERROR } from 'zlib';


// GAMEPLAY: 
//  - Roll Phase: Player rolls die, if holding treasure, subtract amount of treasure from roll
//  - Movement Phase: Player moves according to roll value, can opt to turn backward but can only 
//    change directions once, subtract treasure value from air value
//  - Treasure Phase: Player can pick up current treasure tile, drop a piece of treasure, or do 
//    nothing and end their turn (important to have this phase after movement phase so player can't 
//    drop treasure before losing air)

// END CONDITION: The Air supply reaches zero. Count treasure of all players who made it back to the ship (currentposition < 0)

function checkGame(G: any, ctx: any) {
    if (G.players.every.isSafe = true) {
        endGame(G, ctx)
    }
    if (G.air === 0) {
        endGame(G, ctx)
    }
}

function endGame(G: any, ctx: any) {
    // check array for all safe players and order by treasure values. most treasure wins

    let winningPlayer = 'sean'
    alert(winningPlayer + ' is the winner!')
}

function rollDie(G: any, ctx: any, number: number) {
    let die = ctx.random.Die(number);
    G.rollValue = die;
}

function movePlayer(G: any, ctx: any, roll: number, from: number) {
    //check for treasure to effect roll/shared air supply

    if(G.players[ctx.currentPlayer].treasure.length > 0 ) {
        roll = roll - G.players[ctx.currentPlayer].treasure.length;
        G.air = G.air - G.players[ctx.currentPlayer].treasure.length;
    }
    // check if moving forward or backward
    if(G.players[ctx.currentPlayer].movementDirection === 'backward') {
        roll = roll * -1;
    }

    G.players[ctx.currentPlayer].currentPosition = G.players[ctx.currentPlayer].currentPosition + roll;
    G.cells[G.players[ctx.currentPlayer].currentPosition] = G.players[ctx.currentPlayer].token;
    if(G.players[ctx.currentPlayer].currentPosition < 1 && G.players[ctx.currentPlayer].movementDirection === 'backward') {
        G.players[ctx.currentPlayer].isSafe = true;
    } else {
        G.players[ctx.currentPlayer].isSafe = false;
    }
    checkGame(G, ctx);
}

function pickUpTreasure(G: any, ctx: any) {
    G.players[ctx.currentPlayer].treasure.push(G.players[ctx.currentPlayer].currentPosition)
}
function dropTreasure(G: any, ctx: any) {
    //TODO: player needs to select which item to drop
    G.players[ctx.currentPlayer].treasure.pop();
}

// turn player back NOTE: is only meant to be done once and is not reversible 
function turnBack(G: any, ctx: any) {
    if(G.players[ctx.currentPlayer].movementDirection == 'forward'){
       let position = 'backward'
       G.players[ctx.currentPlayer].movementDirection = position
    }
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
            moves: {movePlayer, turnBack},
            next: 'treasure',
        },
        treasure: {
            moves: {pickUpTreasure, dropTreasure},
            next: 'roll'
        },
    },

  });
export default SpaceMiners;

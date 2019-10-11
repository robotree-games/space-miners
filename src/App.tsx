import React from 'react';
import { render } from 'react-dom';
import { Client } from 'boardgame.io/react';
import { AI } from 'boardgame.io/ai';
import SpaceMiners from './GamePlay/game';
import GameBoard from './UI/Board'
import { Game, IPlayer, IGameCtx } from 'boardgame.io/core';

//game and board
const App = Client({
  game: SpaceMiners,
  board: GameBoard,
  //debug panel
  //debug: false
});

export default App

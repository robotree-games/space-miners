import React, {Component} from 'react';
import { render } from 'react-dom';
import { Client } from 'boardgame.io/react';
import { AI } from 'boardgame.io/ai';
import SpaceMiners from './GamePlay/game';
import GameBoard from './UI/Board';
import ParticleBackround from './UI/Particles/Particles';
import { Game, IPlayer, IGameCtx } from 'boardgame.io/core';
import MainMenu from './UI/MainMenu/MainMenu';
import { any } from 'prop-types';
import ParticleBackground from './UI/Particles/Particles';


const GameClient:any = Client({
  game: SpaceMiners,
  board: GameBoard,
  //debug panel
  //debug: false
});

class App extends Component {
  
  state = {
    isMainMenuVisible: true
    //TODO: 
    // add number of player
    // add local or online boolean
    ///add settings menu
  }

  goToMainMenu = () => {
    this.setState({
      isMainMenuVisible: true
    })
  }
  startGame = () => {
    this.setState({
      isMainMenuVisible: false
    })
  }
  render() {
    const {isMainMenuVisible} = this.state;
    return (
      <div className="space-miners">
        {isMainMenuVisible ? (
          //@ts-ignore
          <MainMenu
            startGame={this.startGame}
          />
        ) : (
          <GameClient />
        )}
        <ParticleBackground/>
      </div>
    )
  }
}

export default App

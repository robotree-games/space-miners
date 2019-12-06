import React, {Component} from 'react';
import './GameSettings.css';
import { any } from 'prop-types';


interface IProps {
    startGame: any;
    updatePlayerCount: any;
};
interface IState {
    playerNumber: number;
    bots: number;
}

// todo:
// conditional rendering for online vs local settings

class GameSettings extends React.Component<IProps,IState> {
    constructor(props: IProps){
        super(props)
        this.state = {
            playerNumber: 0,
            bots: 0
        }
    }

    // functions to set player/bot state...
    // don't look at me, i learned react from a coding bootcamp ¯\_(ツ)_/¯

    incrementPlayers = () => {
        let playerCount;
        if (this.state.playerNumber + this.state.bots < 6) {
            playerCount = this.state.playerNumber + 1;
            this.setState({
                playerNumber: playerCount
            })
        } 
    }
    decrementPlayers = () => {
        let playerCount;
        if(this.state.playerNumber + this.state.bots > 2 && this.state.playerNumber > 0) {
            playerCount = this.state.playerNumber - 1;
            this.setState({
                playerNumber: playerCount
            })
        } 

    }
    incrementBots = () => {
        let botCount;
        if(this.state.playerNumber + this.state.bots < 6) {
            botCount = this.state.bots + 1
            this.setState({
                bots: botCount
            })
        }
    }
    decrementBots = () => {
        let botCount;
        if(this.state.playerNumber + this.state.bots > 0 && this.state.bots > 0) {
            botCount = this.state.bots - 1
            this.setState({
                bots: botCount
            })
        } 
    }
    render() {     
        return (
            <div className="game-settings">
                <div></div>
                <div className="settings-container">
                <h1>Game Setup</h1>
                    <div className="btn">
                        <div className="label">Number of Human Players</div>
                        <div className="up" onClick={this.incrementPlayers}>&gt;</div>
                            <div className="numberValue">{this.state.playerNumber}</div>
                        <div className="down" onClick={this.decrementPlayers}>&lt;</div>
                    </div>
                    <div className="btn">
                        <div className="label">Number of Bots</div>
                            <div className="up" onClick={this.incrementBots}>&gt;</div>
                                <div className="numberValue">{this.state.bots}</div>
                            <div className="down" onClick={this.decrementBots}>&lt;</div>
                        </div>
                    <div className="btn" onClick={this.props.startGame}>Start Game</div>
                </div>
                <div></div>
            </div>
        )
    }
}

export default GameSettings;
import React, {Component} from 'react';
import GameSettings from '../GameSettings/GameSettings';
import './MainMenu.css';
import { Game } from 'boardgame.io/core';

interface IProps {
    startGame: any;
    playerNumber: any;
}
interface IState {
    isSettingsMenuVisibile: boolean;
}
class MainMenu extends Component<IProps, IState> {
    constructor(props: any){
        super(props);
        this.state = {
            isSettingsMenuVisibile: false
        }
    } 

    openSettings = () => {
        this.setState({
            isSettingsMenuVisibile: true
        })
    }
    render() {
        const {isSettingsMenuVisibile} = this.state;
        return (
            <div>
                {isSettingsMenuVisibile ? (
                    //@ts-ignore
                    <GameSettings startGame={this.props.startGame} />
                ): (
                    <div className="main-menu">
                    <div></div>
                    <div className="buttons-container">
                        <h1>Space Miners</h1>
                        <div className="buttons">
                            <div className="btn" onClick={this.openSettings}>Start Local Game</div>
                            <div className="btn" onClick={this.props.startGame}>Create Online Game</div>
                            <div className="btn" onClick={this.props.startGame}>Settings</div>
                            {/* only for mobile devices */}
                            <div className="btn" onClick={this.props.startGame}>Exit</div>
                        </div>
                
                    </div>
                    <div></div>
                </div>
                )}
            </div>
        );
    }
}

export default MainMenu;
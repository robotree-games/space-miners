import React, {Component} from 'react';
import './MainMenu.css';

interface IProps {
    startGame: any;
}
class MainMenu extends Component<IProps> {
    
    render() {
        return (
            <div className="main-menu">
                <div></div>
                <div className="buttons-container">
                    <h1>Space Miners</h1>
                    <div className="buttons">
                        <div className="btn" onClick={this.props.startGame}>Start Local Game</div>
                        <div className="btn" onClick={this.props.startGame}>Create Online Game</div>
                        <div className="btn" onClick={this.props.startGame}>Settings</div>
                        {/* only for mobile devices */}
                        <div className="btn" onClick={this.props.startGame}>Exit</div>
                    </div>
             
                </div>
                <div></div>
            </div>
        );
    }
}

export default MainMenu;
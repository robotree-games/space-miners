import React from 'react';
import PropTypes from 'prop-types';
import { Game, IPlayer, IGameCtx } from 'boardgame.io/core';
import { AI, IAIMoveObj } from 'boardgame.io/ai';

type GameState = {
    cells: Array<IPlayer | null>,
    rollValue: number,
    players: any
};

interface IProps {
    moves: any;
    events: any;
    isActive: boolean;
    G: GameState;
    ctx: IGameCtx;
  }

class Board extends React.Component<IProps> {
    roll(number: number) {
       this.props.moves.rollDie(number)
       this.props.events.endPhase()
    }
    move(roll: number) {
        this.props.moves.movePlayer(roll)
        this.props.events.endPhase()
        this.props.events.endTurn()
    }

    render() {
     let air = 25;
      const cellStyle: React.CSSProperties = {
        border: '1px solid #555',
        width: '50px',
        height: '50px',
        lineHeight: '50px',
        textAlign: 'center',
      };

      let tbody: JSX.Element[] = [];
      for (let i = 0; i < 12; i++) {
        let cells: JSX.Element[] = [];
        for (let j = 0; j < 1; j++) {
          const id = 1 * i + j;
          cells.push(
            <td style={cellStyle} key={id}>
              {this.props.G.cells[id]}
            </td>
          );
        }
        tbody.push(<tr key={i}>{cells}</tr>);
      }

      return (
        <div>
          <div className="ship">
            <h1>Air: {air}/25</h1>
            <h1>Roll Value: {this.props.G.rollValue}</h1>
            <button onClick={() => this.roll(6)}>roll dice</button>
            <button onClick={() => this.move(this.props.G.rollValue)}>Move Forward</button>
          </div>
          <table id="board">
            <tbody>{tbody}</tbody>
          </table>
        </div>
      );
    }
  }
  
export default Board;
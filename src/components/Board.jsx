import React from 'react';
import createBoard from "../utils/utils.js"; 
import Cell from './Cell.jsx';

class Board extends React.Component {
  constructor(props) {
    super(props);

    const cells = createBoard(this.props.boardSize, this.props.numberOfMines);
    console.log(cells);
    

    this.state = {
      cells: cells,
      gameStatus: "playing", 
    };
  }

  handleClick = (index) => {
    const { cells, gameStatus } = this.state; 
    if (cells[index].visible || gameStatus !== 'playing') return; 
    
    const updatedCells = [...cells]; 

    updatedCells[index] = { 
      ...updatedCells[index], 
      visible: true
    };

    let newGameStatus = "playing";
    if (updatedCells[index].hasMine) {
      newGameStatus = "gameOver";
    }
    else {
      newGameStatus = "gameWon";
      
      for (const cell of updatedCells) {
        if (!cell.visible && !cell.hasMine) {
          newGameStatus = "playing";
          break;
        }
      }
    }

    this.setState({ 
      cells: updatedCells,
      gameStatus: newGameStatus
    });
  };

  render() {
    const { gameStatus } = this.state; 

    return (
      <div className="wrapper">
        <h3>Minesweeper</h3> 
        <div className='cellboard'>
          {this.state.cells.map((cell, index) => (
            <Cell key={index} cell={cell} onClick={() => this.handleClick(index)} />
          ))}
        </div> 

        <div className='winLoseInfo'>
          {gameStatus === "gameOver" && <p>Game Over!</p>}
          {gameStatus === "gameWon" && <p>Game Won!</p>}
        </div>

      </div>
    )
  }
}

export default Board;

  
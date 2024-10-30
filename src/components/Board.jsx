import React from 'react';
import createBoard from "../utils/utils.js"; 
import Cell from './Cell.jsx';

const boardSize = 25;
const numberOfMines = 7;

class Board extends React.Component {
  constructor(props) {
    super(props);

    const cells = createBoard(boardSize, numberOfMines);

    this.state = {
      cells: cells,
    };
  }

  handleClick = (index) => {
    const { cells } = this.state;
    if (cells[index].visible) return;
  
    const updatedCells = [...cells];
    updatedCells[index] = { ...updatedCells[index], visible: true };
    this.setState({ cells: updatedCells });
  };

  render() {
    
    return (
      <div className="wrapper">
        <h3>Minröjning</h3> 

        <div className='cellboard'>
          {this.state.cells.map((cell, index) => (
            <Cell key={index} cell={cell} onClick={() => this.handleClick(index)} />
          ))}
        </div> 

        <div className='winLooseInfo'>

        </div>

      </div>
    )
  }
}

export default Board;

  
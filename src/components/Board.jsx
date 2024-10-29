import React from 'react';
import createBoard from "../utils/utils.js"; 
import Cell from './Cell.jsx';

class Board extends React.Component {

  constructor(props) {
    super(props);

    const boardSize = 25;
    const numberOfMines = 7;
    const cells = createBoard(boardSize, numberOfMines);

    this.state = {
      cells: cells,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(index) {
    const updatedCells = [...this.state.cells];
    updatedCells[index].content = updatedCells[index].hasMine ? '💣' : updatedCells[index].numberOfNeighbouringMines;
    this.setState({
      cells: updatedCells
    });
  }


  render() {
    
    return (
      <div className="wrapper">
        <h3>Minröjning</h3> 

        <div className='cellboard'>
          {this.state.cells.map((cell, index) => (
            <Cell key={index} cell={cell.content || '?'} onClick={() => this.handleClick(index)} /> 
          ))}
        </div> 
        <div className='winLooseInfo'>
          Game over!/Game won!
        </div>

      </div>
    )
  }
}

export default Board;


  
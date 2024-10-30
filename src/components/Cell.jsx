import React from 'react';

function Cell(props) {
  const { hasMine, numberOfNeighbouringMines, visible } = props.cell;

  return (
    <div className="cell" onClick={props.onClick}>
      {visible ? (hasMine ? '💣' : numberOfNeighbouringMines) : "?"}
    </div>
  );
}

export default Cell;
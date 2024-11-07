import React from 'react';

function Cell({cell, onClick}) {
  const { hasMine, numberOfNeighbouringMines, visible } = cell;

  return (
    <div className="cell" onClick={onClick}>
      {visible ? (hasMine ? '💣' : numberOfNeighbouringMines) : "?"}
    </div>
  );
}

export default Cell;
import './Minesweeper.css';
import Board from "./components/Board";

function Minesweeper() {
  return (
    <div className="Minesweeper">
      <Board boardSize={25} numberOfMines={7} />
    </div>
  );
}

export default Minesweeper;


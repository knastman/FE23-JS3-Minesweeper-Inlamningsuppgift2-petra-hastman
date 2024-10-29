import './Minesweeper.css';
import Board from "./components/Board";

function Minesweeper() {
  return (
    <div className="Minesweeper">
      <h2>Minröjning</h2>
      <Board />
    </div>
  );
}

export default Minesweeper;


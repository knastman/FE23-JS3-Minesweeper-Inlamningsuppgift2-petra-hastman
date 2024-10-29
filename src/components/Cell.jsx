import '../Minesweeper.css';

export default function Cell(props){

  return (
    <div className="cell" onClick={props.onClick}>
      {props.cell}
    </div>
  
  );
}
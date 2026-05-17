import { useState } from "react";
import Square from "./Square.jsx";
import { calculateWinner } from "../utils/calculateWinner.js";

function Board() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(i) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    const nextSquares = squares.slice();

    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }

    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  const winner = calculateWinner(squares);

  let status;
  let statusColor;

  if (winner) {
    status = "Winner: " + winner;
    statusColor = "text-emerald-400 font-medium scale-110";
  } else if (squares.includes(null)) {
    status = "Next player: " + (xIsNext ? "X" : "O");
    statusColor = "text-zinc-400 font-light";
  } else {
    status = "Draw!";
    statusColor = "text-amber-400 font-medium scale-110";
  }

  function resetBoard() {
    const resetSquares = Array(9).fill(null);
    setSquares(resetSquares);
    setXIsNext(true);
  }

  return (
    <div className="flex flex-col items-center">
      <div
        className={`text-xl text-center mb-8 tracking-widest transition-all duration-300 ${statusColor}`}
      >
        {status}
      </div>

      <div className="flex flex-col gap-1">
        <div className="flex gap-1">
          <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
          <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
          <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
        </div>

        <div className="flex gap-1">
          <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
          <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
          <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
        </div>

        <div className="flex gap-1">
          <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
          <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
          <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
        </div>
      </div>
      <button
        className="mt-10 w-full max-w-[296px] px-6 py-4 bg-zinc-900 text-zinc-500 text-sm font-medium uppercase tracking-widest hover:bg-zinc-800 hover:text-zinc-200 transition-colors duration-200 outline-none focus:bg-zinc-800"
        onClick={() => resetBoard()}
      >
        Reset
      </button>
    </div>
  );
}

export default Board;

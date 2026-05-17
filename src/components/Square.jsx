function Square({ value, onSquareClick }) {
  return (
    <button
      className="w-24 h-24 bg-zinc-900 text-4xl font-light text-zinc-100 hover:bg-zinc-800 transition-colors duration-200 flex items-center justify-center outline-none focus:bg-zinc-800"
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}

export default Square;

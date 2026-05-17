import Board from "./components/Board.jsx";
function App() {
  return (
    <div className="min-h-screen bg-zinc-950 flex flex-col items-center justify-center font-sans">
      <div className="p-8 flex flex-col items-center">
        <h1 className="text-4xl font-extralight tracking-widest text-center text-zinc-200 uppercase mb-12">
          Tic Tac Toe
        </h1>
        <Board />
      </div>
    </div>
  );
}

export default App;

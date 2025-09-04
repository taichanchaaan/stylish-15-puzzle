import React, { useState, useEffect } from 'react';
import Board from './components/Board';
import { shuffle, moveTile, isSolved } from './logic/game';

const App: React.FC = () => {
  const [tiles, setTiles] = useState<number[]>([]);
  const [solved, setSolved] = useState(false);

  useEffect(() => {
    setTiles(shuffle(Array.from({ length: 16 }, (_, i) => i)));
  }, []);

  const handleTileClick = (index: number) => {
    if (solved) return;
    const newTiles = moveTile(tiles, index);
    setTiles(newTiles);
    if (isSolved(newTiles)) {
      setSolved(true);
    }
  };

  const handleNewGame = () => {
    setSolved(false);
    setTiles(shuffle(Array.from({ length: 16 }, (_, i) => i)));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">15 Puzzle</h1>
      <Board tiles={tiles} onTileClick={handleTileClick} />
      {solved && (
        <div className="mt-4 text-2xl font-bold text-green-500">You Win!</div>
      )}
      <button
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
        onClick={handleNewGame}
      >
        New Game
      </button>
    </div>
  );
};

export default App;

import React from 'react';
import Tile from './Tile';

interface BoardProps {
  tiles: number[];
  onTileClick: (index: number) => void;
}

const Board: React.FC<BoardProps> = ({ tiles, onTileClick }) => {
  return (
    <div className="grid grid-cols-4 gap-2 p-4 bg-gray-200 rounded-lg">
      {tiles.map((value, index) => (
        <Tile key={index} value={value} onClick={() => onTileClick(index)} />
      ))}
    </div>
  );
};

export default Board;

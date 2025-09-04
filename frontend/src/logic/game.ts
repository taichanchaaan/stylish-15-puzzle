export const shuffle = (tiles: number[]): number[] => {
  const shuffledTiles = [...tiles];
  for (let i = shuffledTiles.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledTiles[i], shuffledTiles[j]] = [shuffledTiles[j], shuffledTiles[i]];
  }
  return shuffledTiles;
};

export const moveTile = (tiles: number[], tileIndex: number): number[] => {
  const emptyIndex = tiles.indexOf(0);
  const validMoves = [
    emptyIndex - 1,
    emptyIndex + 1,
    emptyIndex - 4,
    emptyIndex + 4,
  ];

  if (validMoves.includes(tileIndex)) {
    const newTiles = [...tiles];
    [newTiles[emptyIndex], newTiles[tileIndex]] = [
      newTiles[tileIndex],
      newTiles[emptyIndex],
    ];
    return newTiles;
  }

  return tiles;
};

export const isSolved = (tiles: number[]): boolean => {
  for (let i = 0; i < tiles.length - 1; i++) {
    if (tiles[i] !== i + 1) {
      return false;
    }
  }
  return tiles[tiles.length - 1] === 0;
};

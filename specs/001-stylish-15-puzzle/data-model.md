# Data Model for Stylish 15-Puzzle

This document outlines the data structures used in the 15-puzzle game.

## GameBoard

*   **Description**: Represents the state of the 15-puzzle, including the position of each tile and the empty space.
*   **Fields**:
    *   `tiles`: An array of `Tile` objects, representing the current order of the tiles on the board.
    *   `emptyIndex`: The index of the empty space in the `tiles` array.
*   **State Transitions**:
    *   `shuffle()`: Randomizes the `tiles` array to a new solvable state.
    *   `moveTile(tileIndex)`: Moves a tile to the empty space if it is adjacent.
    *   `isSolved()`: Checks if the `tiles` are in the correct order.

## Tile

*   **Description**: Represents a single numbered tile on the board.
*   **Fields**:
    *   `id`: A unique identifier for the tile (e.g., the number on the tile).
    *   `value`: The number displayed on the tile (1-15).
    *   `position`: The current position of the tile on the board (index in the `tiles` array).

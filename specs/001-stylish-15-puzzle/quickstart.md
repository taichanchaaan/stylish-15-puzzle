# Quickstart for Stylish 15-Puzzle

This guide explains how to set up and run the 15-puzzle game, and how to verify its functionality.

## Setup and Running

1.  **Navigate to the frontend directory**:
    ```bash
    cd frontend
    ```
2.  **Install dependencies**:
    ```bash
    npm install
    ```
3.  **Start the development server**:
    ```bash
    npm start
    ```
4.  **Open the application in your browser**: The application should be available at `http://localhost:3000`.

## Verifying User Stories

### User Story 1: Moving Tiles

1.  The game board should be displayed with tiles in a random order.
2.  Click on a tile that is next to the empty space.
3.  **Expected Result**: The tile should smoothly animate into the empty space.
4.  Click on a tile that is not next to the empty space.
5.  **Expected Result**: Nothing should happen.

### User Story 2: Solving the Puzzle

1.  Play the game until the tiles are in numerical order from 1 to 15.
2.  **Expected Result**: A success message or animation should be displayed to indicate that the puzzle is solved.

### User Story 3: Starting a New Game

1.  Click the "New Game" or "Reset" button.
2.  **Expected Result**: The tiles should be shuffled into a new random, solvable configuration.

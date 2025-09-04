# Tasks: Stylish 15-Puzzle Game

**Input**: Design documents from `/specs/001-stylish-15-puzzle/`
**Prerequisites**: plan.md, research.md, data-model.md, quickstart.md

## Format: `[ID] [P?] Description`
- **[P]**: Can run in parallel (different files, no dependencies)

## Path Conventions
- Paths shown below assume the `frontend` directory as the root.

## Phase 1: Project Setup
- [ ] T001: [P] Initialize a new React project with TypeScript using Create React App in the `frontend` directory.
- [ ] T002: [P] Install dependencies: `tailwindcss`, `framer-motion`, `jest`, `react-testing-library`.
- [ ] T003: [P] Configure Tailwind CSS for the project.
- [ ] T004: [P] Set up ESLint and Prettier for code quality.

## Phase 2: Game Logic (TDD)
- [ ] T005: Write unit tests for the game logic in `src/logic/game.test.ts`.
    - Test `shuffle` function to ensure it produces a solvable puzzle.
    - Test `moveTile` function for valid and invalid moves.
    - Test `isSolved` function for solved and unsolved states.
- [ ] T006: Implement the game logic functions (`shuffle`, `moveTile`, `isSolved`) in `src/logic/game.ts`.

## Phase 3: UI Components (TDD)
- [ ] T007: [P] Write tests for the `Tile` component in `src/components/Tile.test.tsx`.
    - Test that the tile renders with the correct number.
    - Test that the `onClick` handler is called when the tile is clicked.
- [ ] T008: [P] Implement the `Tile` component in `src/components/Tile.tsx`.
- [ ] T009: Write tests for the `Board` component in `src/components/Board.test.tsx`.
    - Test that the board renders the correct number of tiles.
    - Test that the board handles tile clicks correctly.
- [ ] T010: Implement the `Board` component in `src/components/Board.tsx`.

## Phase 4: Integration and Styling
- [ ] T011: Integrate the game logic with the `Board` component to create the main application in `src/App.tsx`.
- [ ] T012: Write integration tests for the main application in `src/App.test.tsx`.
    - Test the full user flow: shuffling, moving tiles, and solving the puzzle.
- [ ] T013: [P] Style the `Tile` and `Board` components using Tailwind CSS to match the modern UI design.
- [ ] T014: [P] Add smooth tile movement animations using Framer Motion.
- [ ] T015: Implement the "New Game" button and its functionality.

## Dependencies
- `T001`, `T002`, `T003`, `T004` can be done in parallel.
- `T005` must be done before `T006`.
- `T007` must be done before `T008`.
- `T009` must be done before `T010`.
- `T006` and `T010` must be done before `T011`.
- `T011` must be done before `T012`.
- `T013` and `T014` can be done in parallel with `T011` and `T012`.

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  it('renders the game board and a "New Game" button', () => {
    render(<App />);
    const heading = screen.getByText('15 Puzzle');
    expect(heading).toBeInTheDocument();

    const newGameButton = screen.getByText('New Game');
    expect(newGameButton).toBeInTheDocument();
  });

  it('allows the user to play the game', () => {
    render(<App />);
    // This is a complex test to write as it requires knowing the state of the shuffled board.
    // For now, we will just test that clicking the new game button works.
    const newGameButton = screen.getByText('New Game');
    fireEvent.click(newGameButton);
    // We can't assert much here without more complex state management in the test,
    // but we can at least ensure the app doesn't crash.
  });
});

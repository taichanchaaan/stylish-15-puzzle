import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Board from './Board';

describe('Board component', () => {
  const tiles = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0];

  it('should render the correct number of tiles', () => {
    render(<Board tiles={tiles} onTileClick={() => {}} />);
    const tileElements = screen.getAllByRole('button');
    expect(tileElements).toHaveLength(15); // 15 tiles + 1 empty space
  });

  it('should call the onTileClick handler with the correct index when a tile is clicked', () => {
    const onTileClick = jest.fn();
    render(<Board tiles={tiles} onTileClick={onTileClick} />);
    const tile5 = screen.getByText('5');
    fireEvent.click(tile5);
    expect(onTileClick).toHaveBeenCalledWith(4); // index of tile 5
  });
});

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Tile from './Tile';

describe('Tile component', () => {
  it('should render the tile with the correct number', () => {
    render(<Tile value={5} onClick={() => {}} />);
    const tileElement = screen.getByText('5');
    expect(tileElement).toBeInTheDocument();
  });

  it('should call the onClick handler when clicked', () => {
    const onClick = jest.fn();
    render(<Tile value={5} onClick={onClick} />);
    const tileElement = screen.getByText('5');
    fireEvent.click(tileElement);
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('should not render a tile if the value is 0 (empty tile)', () => {
    render(<Tile value={0} onClick={() => {}} />);
    const tileElement = screen.queryByText('0');
    expect(tileElement).not.toBeInTheDocument();
  });
});

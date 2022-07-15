import { getByText, render, screen } from '@testing-library/react';
import Home from '../pages'

describe('Home', () => {
  it('renders a Stop', () => {
    render(<Home />);

    expect(screen.getByText('Stopwatch')).toBeInTheDocument();
  })
})

import React from 'react';
import { render, screen } from '@testing-library/react';
import AppContainer from '../AppContainer';

test('renders App Container', () => {
  render(<AppContainer />);
  const linkElement = screen.getByText(/Click Here/i) as HTMLElement;
  expect(linkElement).toBeInTheDocument();

  expect(linkElement).toHaveAttribute("href", "/busroute");

});

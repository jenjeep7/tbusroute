import React from 'react';
import { render} from '@testing-library/react';
import NextStop from '../NextStop';

const mockOnClick = jest.fn();

test('renders App Container', () => {
  render(<NextStop />);
  
});

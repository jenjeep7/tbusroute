import React from 'react';
import { render} from '@testing-library/react';
import BusRoute from '../BusRoute';

test('renders App Container', () => {
    renderComponent(); 
  });
  
  
  const renderComponent = (props: any = {}) => {
      return render(<BusRoute {...props} />);
    };

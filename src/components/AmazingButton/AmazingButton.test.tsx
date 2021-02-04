import React from 'react';
import { render, screen } from '@testing-library/react';
import { AmazingButton } from './';

it('renders button with text passed as prop', () => {
  render(<AmazingButton text="make test pass" />);
  expect(screen.getByText('make test pass')).toBeInTheDocument();
});

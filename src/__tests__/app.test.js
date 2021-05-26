import React from 'react';
import App from '../app.js';
import Results from '../results.js';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';

xit('should render a list of star wars characters', async () => {
  const people = {
    "name": "Luke Skywalker"
  }

  render(<Results people={people} />);

  const items = screen.getAllByRole('listItem');

  console.log(items);
  expect(items).toHaveLength(2);
});
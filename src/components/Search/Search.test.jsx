import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Search from './Search';

describe('Search component', () => {
  afterEach(() => cleanup());
  it('renders search component', () => {
    const { asFragment } = render(<Search 
      searchTerm="bitcoin"
      onChange={() => {}}
      onSubmit={() => {}}
    />);
    expect(asFragment()).toMatchSnapshot();
  });
});

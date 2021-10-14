import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Article from './Article';

describe('Article component', () => {
  afterEach(() => cleanup());
  
  it('renders a single article', () => {
    const { asFragment } = render(<Article 
      urltoImage="http://placeholder.com/villager"
      title="Best article ever"
      description="This is beyond a great article so insightful"
      author="test testerson"
      url="www.test.test.com"  
    />);
    expect(asFragment()).toMatchSnapshot();
  });
});


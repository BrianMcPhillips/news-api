import React from 'react';
import { render, cleanup } from '@testing-library/react';
import ArticleList from './ArticleList';

describe('ArticleList component', () => {
  afterEach(() => cleanup());

  it('renders an article list', () => {
    const { asFragment } = render(<ArticleList 
      articles={[
        {
          urlToImage: 'http://placeholder.com/villager',
          title: 'Best article ever',
          description: 'This is beyond a great article so insightful',
          author: 'test testerson',
          url: 'www.test.com'
        },
        {
          urlToImage: 'http://placeholder.com/villager',
          title: 'Second best article ever',
          description: 'This is a another great article so insightful',
          author: 'test testerson the third',
          url: 'www.test2.com'
        }
      ]}
    />);
    expect(asFragment()).toMatchSnapshot();
  });
});

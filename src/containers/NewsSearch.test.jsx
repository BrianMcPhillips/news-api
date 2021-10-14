import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import NewsSearch from './NewsSearch';
import { getArticles } from '../services/news-api';

jest.mock('../services/news-api.js');

describe('NewsSearch component', () => {
  it('displays a list of articles', async() => {
    getArticles.mockResolvedValue([
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
    ]);
    render(<NewsSearch />);
    const submitButton = screen.getByTestId('search-button');
    await fireEvent.click(submitButton);
    const articleList = await screen.findByTestId('allArticles');
    expect(articleList).not.toBeEmptyDOMElement();
  });
});

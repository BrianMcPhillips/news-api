import React from 'react';
import PropTypes from 'prop-types';
import Article from '../Article/Article';

const ArticleList = ({ articles }) => {
  const articleElements = articles.map(article => (
    <li key={article.url}>
      <Article {...article}/>
    </li>
  ));
  return (
    <ul>
      {articleElements}
    </ul>
  );
};

ArticleList.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.shape({
    urlToImage: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  })).isRequired
};

export default ArticleList;

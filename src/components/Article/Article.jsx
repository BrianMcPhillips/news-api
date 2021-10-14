import React from 'react';
import PropTypes from 'prop-types';

const Article = ({ 
  urlToImage,
  title,
  description,
  author,
  url
}) => (
  <div>
    <img src={urlToImage} alt={title} />
    <h2>{title}</h2>
    <h4>{description}</h4>
    <p>{author}</p>
    <a href={url}>View Article</a>
  </div>
);

Article.propTypes = {
  urlToImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default Article;

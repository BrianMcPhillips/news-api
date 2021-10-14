import React, { Component } from 'react';
import ArticleList from '../components/ArticleList/ArticleList';


export default class NewsSearch extends Component {
  state = {
    articles: []
  }
  
  componentDidMount = async() => {
    const input = 'bitcoin';
    fetch(`https://newsapi.org/v2/everything?q=${input}&apiKey=${process.env.REACT_APP_NEWS}`)
      .then(res => res.json())
      .then(json => json.articles.map(article => ({
        urlToImage: article.urlToImage,
        title: article.title,
        description: article.description,
        author: article.author,
        url: article.url
      })))
      .then(articleList => this.setState({ articles: articleList }));
  }
  render() {
    const { articles } = this.state;
    return (
      <div>
        <ArticleList articles={articles} />
      </div>
    );
  }
}

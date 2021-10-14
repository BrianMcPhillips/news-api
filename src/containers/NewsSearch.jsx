import React, { Component } from 'react';
import ArticleList from '../components/ArticleList/ArticleList';
import { getArticles } from '../services/news-api';


export default class NewsSearch extends Component {
  state = {
    articles: []
  }
  
  componentDidMount = async() => {
    const input = 'bitcoin';
    getArticles(input)
      .then(articleList => this.setState({ articles: articleList }));
  }

  render() {
    const { articles } = this.state;
    return (
      <div data-testid="allArticles">
        <ArticleList articles={articles} />
      </div>
    );
  }
}

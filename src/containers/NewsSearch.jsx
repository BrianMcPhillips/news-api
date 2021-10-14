import React, { Component } from 'react';
import ArticleList from '../components/ArticleList/ArticleList';
import Search from '../components/Search/Search';
import { getArticles } from '../services/news-api';



export default class NewsSearch extends Component {
  state = {
    articles: [],
    searchTerm: ''
  }
  
  componentDidMount = async() => {
    const input = 'bitcoin';
    getArticles(input)
      .then(articleList => this.setState({ articles: articleList }));
  }

  handleChange = ({ target }) => {
    this.setState({ searchTerm: target.value });
  } 

  handleSubmit = e => {
    e.preventDefault();
    getArticles(this.state.searchTerm)
      .then(articleList => this.setState({ articles: articleList }));
    
  }

  render() {
    const { articles, searchTerm } = this.state;
    return (
      <div data-testid="allArticles">
        <Search 
          searchTerm={searchTerm}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        /> 
        <ArticleList articles={articles} />
      </div>
    );
  }
}

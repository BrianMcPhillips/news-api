import React, { Component } from 'react';
import ArticleList from '../components/ArticleList/ArticleList';
import Search from '../components/Search/Search';
import Loading from '../components/Loading/Loading';
import { getArticles } from '../services/news-api';



export default class NewsSearch extends Component {
  state = {
    articles: [],
    searchTerm: '',
    loading: true
  }
  
  componentDidMount = async() => {
    const input = 'bitcoin';
    getArticles(input)
      .then(articles => this.setState({ articles, loading: false }));
  }

  handleChange = ({ target }) => {
    this.setState({ searchTerm: target.value });
  } 

  handleSubmit = e => {
    e.preventDefault();
    getArticles(this.state.searchTerm)
      .then(articles => this.setState({ articles, loading: false }));
    
  }

  render() {
    const { articles, searchTerm, loading } = this.state;
    if(loading) return <Loading />;
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

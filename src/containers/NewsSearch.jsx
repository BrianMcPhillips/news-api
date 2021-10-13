import React, { Component } from 'react';

export default class NewsSearch extends Component {
  
  componentDidMount = () => {
    const input = 'bitcoin';
    fetch(`https://newsapi.org/v2/everything?q=${input}&apiKey=${process.env.REACT_APP_NEWS}`)
      .then(res => res.json())
      .then(json => console.log(json));
  }
  render() {
    return (
      <div>
        Hello World
      </div>
    );
  }
}

export const getArticles = (input) => {
  return  fetch(`https://newsapi.org/v2/everything?q=${input}&apiKey=${process.env.REACT_APP_NEWS}`)
    .then(res => res.json())
    .then(json => json.articles.map(article => ({
      urlToImage: article.urlToImage,
      title: article.title,
      description: article.description,
      author: article.author,
      url: article.url
    })));
};

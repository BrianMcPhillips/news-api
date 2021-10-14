import React from 'react';
import PropTypes from 'prop-types';

const Search = ({ searchTerm, onChange, onSubmit }) => (
  <div>
    <form onSubmit={onSubmit}>
      <label htmlFor="input">Search News Articles</label>
      <input 
        id="input"
        type="text"
        name="input"
        value={searchTerm} 
        onChange={onChange} 
      />
      <button>Find Articles</button>
    </form>
  </div>
);

Search.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default Search;

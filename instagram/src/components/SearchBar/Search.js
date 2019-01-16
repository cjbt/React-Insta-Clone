import React from 'react';
import PropTypes from 'prop-types';

const Search = props => {
  return (
    <form onSubmit={e => props.searchFilter(e)}>
      <input
        className='search'
        type='text'
        name='searchInput'
        value={props.searchInput}
        placeholder={'Search'}
        onChange={props.commentValueChange}
        id={'search'}
      />
    </form>
  );
};

Search.propTypes = {
  searchInput: PropTypes.string,
  searchInputChange: PropTypes.func
};

export default Search;

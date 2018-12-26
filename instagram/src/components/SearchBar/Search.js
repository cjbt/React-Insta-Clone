import React from 'react';
import PropTypes from 'prop-types';

const Search = props => {
  return (
    <form>
      <input
        className='search'
        type='text'
        value={props.searchInput}
        placeholder={`Search`}
        onChange={e => props.searchInputChange(e)}
      />
    </form>
  );
};

Search.propTypes = {};

export default Search;

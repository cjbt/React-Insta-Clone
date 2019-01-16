import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Form = styled.form`
  @media (max-width: 650px) {
    display: none;
  }
  padding-right: 0;
`;

const SearchInput = styled.input`
  text-align: center;
  width: 215px;
  height: 28px;
  border-radius: 3px;
  border: 1px solid #dbdbdb;
  background: #fafafa;
  font-size: 1.4rem;
  margin-right: 50px;
  margin-bottom: 15px;

  ::placeholder {
    color: #999999;
  }
`;

const Search = props => {
  return (
    <Form onSubmit={e => props.searchFilter(e)}>
      <SearchInput
        type='text'
        name='searchInput'
        value={props.searchInput}
        placeholder={'Search'}
        onChange={props.commentValueChange}
        id={'search'}
      />
    </Form>
  );
};

Search.propTypes = {
  searchInput: PropTypes.string,
  searchInputChange: PropTypes.func
};

export default Search;

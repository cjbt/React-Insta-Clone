import React from 'react';
import PropTypes from 'prop-types';
// import './_SearchBar.scss';
import Logo from './Logo';
import Search from './Search';
import IconTabs from './IconTabs';
import styled, { keyframes, css } from 'styled-components';

const topconscroll = keyframes`
   0% {
      padding-top: 16px;
      padding-bottom: 0px;
    }

    100% {
      padding-top: 25px;
      padding-bottom: 11px;
    }
  `;

const topcon = keyframes`
0% {
    padding-top: 25px;
    padding-bottom: 11px;
  }

  100% {
    padding-top: 16px;
    padding-bottom: 0px;
  }
`;

const topconanimate = () =>
  css`
    ${topcon} 0.5s forwards;
  `;

const topconscrollanimate = () =>
  css`
    ${topconscroll} 0.5s forwards;
  `;
const TopContainer = styled.div`
  border-bottom: 1px solid #e6e6e6;
  background: white;
  z-index: 10;
  position: fixed;
  width: 100%;
  top: 0;
  right: 0;
  animation: ${props => (props.isTop ? topconscrollanimate : topconanimate)};
`;

//${props =>
//props.isTop ? `${topconscroll} 0.5s forwards` : `${topcon} 0.5s forwards`}

const SearchBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  max-width: 970px;
  margin: 0 auto;
  height: 35px;
  width: 100%;

  @media (max-width: 999px) {
    width: 100%;
  }

  @media (max-width: 740px) {
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;
  }

  @media (max-width: 620px) {
    width: 100%;
  }

  @media (max-width: 350px) {
    width: 100%;
  }
`;

const SearchBar = props => {
  return (
    <TopContainer isTop={props.isTop}>
      <SearchBarContainer>
        <Logo isTop={props.isTop} />
        <Search
          searchInput={props.searchInput}
          commentValueChange={props.commentValueChange}
          searchFilter={props.searchFilter}
        />
        <IconTabs
          isModalClicked={props.isModalClicked}
          modalClick={props.modalClick}
        />
      </SearchBarContainer>
    </TopContainer>
  );
};

SearchBar.propTypes = {
  searchInput: PropTypes.string,
  searchInputChange: PropTypes.func,
  isTop: PropTypes.bool,
  isModalClicked: PropTypes.bool,
  modalClick: PropTypes.func
};

export default SearchBar;

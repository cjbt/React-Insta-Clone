import React from 'react';
// import './_Footer.scss';
import UserProfile from './UserProfile';
import Stories from './Stories';
import Suggestions from './Suggestions';
import BottomLinks from './BottomLinks';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const FooterStyle = styled.div`
  margin: 0 auto;
  max-width: 935px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  z-index: ${props => (props.isTop ? -1 : 2)};
  padding-left: 27px;

  position: ${props => (props.isTop ? 'static' : 'fixed')};
  margin-top: ${props => (!props.isTop ? '-60px' : 0)};

  @media (max-width: 999px) {
    display: none;
  }
`;

// footer-fixed {
//   width: 100%;
//   position: fixed;
//   z-index: -1;
//   margin-top: -60px;
// }

const Footer = props => {
  return (
    <FooterStyle isTop={props.isTop}>
      <div>
        <UserProfile
          username={props.username}
          firstName={props.firstName}
          lastName={props.lastName}
          profile={props.profile}
        />
        <Stories logout={props.logout} />
        <Suggestions />
        <BottomLinks />
      </div>
    </FooterStyle>
  );
};

Footer.propTypes = {
  isTop: PropTypes.bool,
  username: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  logout: PropTypes.func
};

export default Footer;

import React from 'react';
import compass from './compass-regular.svg';
import heart from './heart-regular.svg';
import user from './user-regular.svg';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 135px;
  justify-content: space-between;
  padding-bottom: 11px;
`;
const Logo = styled.div`
  width: 25px;
  cursor: ${props => (props.profile ? 'pointer' : 'none')};
  opacity: ${props => (props.greyed ? 0.3 : 1)};
`;

const IconTabs = props => {
  return (
    <IconContainer>
      <Logo greyed>
        <img src={compass} alt='' />
      </Logo>
      <Logo greyed>
        <img src={heart} alt='' />
      </Logo>
      <Logo profile onClick={props.modalClick}>
        <img src={user} alt='' />
      </Logo>
    </IconContainer>
  );
};

IconTabs.propTYpes = {
  isModalClicked: PropTypes.bool,
  modalClick: PropTypes.func
};

export default IconTabs;

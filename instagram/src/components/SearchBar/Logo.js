import React from 'react';
import instaLogo from './instagram.svg';
import instatext from './instatext.png';
import PropTypes from 'prop-types';
import styled, { keyframes, css } from 'styled-components';

const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: -14px;
`;

const InstaLogo = styled.img`
  width: 24px;
  margin-right: 15px;
`;

const instaname = keyframes`
0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const animation = () =>
  css`
    ${instaname} 0.3s forwards;
  `;

const LogoName = styled.div`
  border-left: 0.02px solid #262626;
  height: 27px;

  animation: ${props => (!props.isTop ? animation : null)};
`;

const InstaText = styled.img`
  width: 133px;
  margin-left: 14px;
`;

const Logo = props => {
  return (
    <LogoContainer>
      <div className='logos'>
        <InstaLogo src={instaLogo} alt='' />
      </div>
      <LogoName isTop={props.isTop}>
        <InstaText src={instatext} alt='' />
      </LogoName>
    </LogoContainer>
  );
};

Logo.propTypes = {
  isTop: PropTypes.bool
};

export default Logo;

import React from 'react';
import PropTypes from 'prop-types';
import instaLogo from './instagram.svg';
import instatext from './instatext.png';

const Logo = props => {
  return (
    <div className='logo-container'>
      <div className='logos'>
        <img className='insta-logo' src={instaLogo} alt='' />
      </div>
      <div className='logo-name'>
        <img className='insta-text' src={instatext} alt='' />
      </div>
    </div>
  );
};

Logo.propTypes = {};

export default Logo;

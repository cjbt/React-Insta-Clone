import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const UserContent = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 15px;
  padding-top: 15px;
  padding-bottom: 15px;
  align-items: center;
  border-bottom: 1px solid #efefef;
`;

const Thumbnail = styled.img`
  border-radius: 50%;
  max-width: 30px;
  width: 100%;
  height: auto;
  max-height: 30px;
  cursor: pointer;
`;

const Username = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  padding-left: 12px;
  cursor: pointer;
`;

const User = props => {
  return (
    <UserContent>
      <Thumbnail src={props.thumbnail} alt='' />
      <Username>{props.username}</Username>
    </UserContent>
  );
};

User.propTypes = {
  thumbnail: PropTypes.string,
  username: PropTypes.string
};

export default User;

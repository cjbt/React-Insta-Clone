import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CommendDiv = styled.div`
  display: flex;
  flex-direction: row;
`;
const CommentContainer = styled.div`
  font-size: 1.35rem;
  padding-top: 8px;
  padding-left: 15px;
  line-height: 1.8rem;
`;
const UserComment = styled.span`
  font-weight: bold;
  cursor: pointer;
`;

const Comment = props => {
  return (
    <CommendDiv>
      <CommentContainer>
        <UserComment>{props.usercomment} </UserComment>
        <span>{props.text}</span>
      </CommentContainer>
    </CommendDiv>
  );
};

Comment.propTypes = {
  username: PropTypes.string,
  text: PropTypes.string
};

export default Comment;

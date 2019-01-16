import React from 'react';
import PropTypes from 'prop-types';
// import './_CommentSection.scss';
import Comment from './Comment';
import ellipsis from './ellipsis.svg';
import styled from 'styled-components';

const TimeStamp = styled.div`
  color: #999999;
  padding-left: 15px;
  font-size: 1.1rem;
  padding-top: 3px;

  padding-bottom: 8px;
`;
const AddComment = styled.div`
  padding-top: 0;
  border-top: 1px solid #efefef;
  margin-left: 15px;
  margin-right: 14px;
  display: flex;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const CommentInput = styled.input`
  border: 0;
  outline: 0;
  width: 100%;
  max-width: 560px;
  height: 55px;
  font-size: 1.4rem;
`;
const Elipsis = styled.img`
  cursor: pointer;
  width: 15px;
  padding: 15px 0;
`;

const CommentSection = props => {
  return (
    <React.Fragment>
      <div>
        {props.comments.map(comment => (
          <Comment
            usercomment={comment.username}
            text={comment.text}
            key={comment.text}
          />
        ))}
      </div>
      <TimeStamp>{props.timestamp}</TimeStamp>
      <AddComment>
        <form onSubmit={props.addNewComment}>
          <CommentInput
            type='text'
            value={props.text}
            placeholder='Add a comment...'
            onChange={props.commentValueChange}
            name='text'
          />
        </form>
        <div>
          <Elipsis src={ellipsis} alt='' />
        </div>
      </AddComment>
    </React.Fragment>
  );
};

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string,
      text: PropTypes.string
    })
  ),
  timestamp: PropTypes.string,
  addNewComment: PropTypes.func,
  text: PropTypes.string
};

export default CommentSection;

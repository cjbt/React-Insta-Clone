import React from 'react';
import PropTypes from 'prop-types';
import './_CommentSection.scss';
import Comment from './Comment';
import ellipsis from './ellipsis.svg';

const CommentSection = props => {
  return (
    <React.Fragment>
      <div>
        {props.comments.map(comment => (
          <Comment usercomment={comment.username} text={comment.text} />
        ))}
      </div>
      <div className='timestamp'>{props.timestamp}</div>
      <div className='add-comment'>
        <form action=''>
          <input
            className='comment-input'
            type='text'
            placeholder='Add a comment...'
          />
        </form>
        <div>
          <img className='ellipsis' src={ellipsis} alt='' />
        </div>
      </div>
    </React.Fragment>
  );
};

CommentSection.propTypes = {};

export default CommentSection;

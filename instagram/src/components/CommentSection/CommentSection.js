import React from 'react';
import PropTypes from 'prop-types';
import './_CommentSection.scss';
import Comment from './Comment';

const CommentSection = props => {
  return (
    <div>
      {props.comments.map(comment => (
        <Comment />
      ))}
    </div>
  );
};

CommentSection.propTypes = {};

export default CommentSection;

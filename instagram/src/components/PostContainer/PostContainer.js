import React from 'react';
import PropTypes from 'prop-types';
import './_PostContainer.scss';
import CommentSection from '../CommentSection/CommentSection';
import User from './User';
import MiddleContentImg from './MiddleContentImg';
import BottomContentTime from './BottomContentTime';

const PostContainer = props => {
  return (
    <div className='post-container'>
      <User thumbnail={props.thumbnail} username={props.username} />
      <MiddleContentImg img={props.img} likes={props.likes} />
      <CommentSection comments={props.comments} />
      <BottomContentTime timestamp={props.timestamp} />
    </div>
  );
};

PostContainer.propTypes = {};

export default PostContainer;

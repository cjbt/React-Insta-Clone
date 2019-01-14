import React from 'react';
import PropTypes from 'prop-types';
import './_PostContainer.scss';
import CommentSection from '../CommentSection/CommentSection';
import User from './User';
import MiddleContentImg from './MiddleContentImg';

const PostContainer = props => {
  return (
    <div className={props.isTop ? 'width614 post-container' : 'post-container'}>
      <User thumbnail={props.thumbnail} username={props.username} />
      <MiddleContentImg
        img={props.img}
        likes={props.likes}
        isLiked={props.isLiked}
        heartClick={props.heartClick}
        index={props.index}
        likedCounter={props.likedCounter}
        heartDoubleClick={props.heartDoubleClick}
      />
      <CommentSection
        comments={props.comments}
        timestamp={props.timestamp}
        commentValueChange={props.commentValueChange}
        addNewComment={props.addNewComment}
        text={props.text}
      />
    </div>
  );
};

PostContainer.propTypes = {
  username: PropTypes.string,
  thumbnail: PropTypes.string,
  img: PropTypes.string,
  likes: PropTypes.number,
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string,
      text: PropTypes.string
    })
  ),
  timestamp: PropTypes.string,
  commentValueChange: PropTypes.func,
  addNewComment: PropTypes.func,
  isLiked: PropTypes.array,
  heartClick: PropTypes.func,
  likedCounter: PropTypes.array,
  likedCounterChange: PropTypes.func,
  isTop: PropTypes.bool,
  heartDoubleClick: PropTypes.func
};

export default PostContainer;

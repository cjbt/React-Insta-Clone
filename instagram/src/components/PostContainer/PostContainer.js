import React from 'react';
import PropTypes from 'prop-types';
import CommentSection from '../CommentSection/CommentSection';
import User from './User';
import MiddleContentImg from './MiddleContentImg';
import styled from 'styled-components';

const PostContainerStyle = styled.div`
  max-width: 614px;
  border: 1px solid #e6e6e6;
  border-radius: 3px;
  background: white;
  margin-bottom: 60px;
  width: ${props => (props.isTop ? '614px' : '100%')};

  @media (max-width: 999px) {
    margin: 0 auto;
    width: 100%;
    margin-bottom: 69px;
    margin-top: -54px;
  }

  @media (max-width: 740px) {
    margin-bottom: 74px;
    width: 100%;
  }

  @media (max-width: 640px) {
    margin-bottom: -2px;
    border: none;
    margin-top: 2px;
    width: 100%;
  }

  @media (max-width: 620px) {
    width: 100%;
  }

  @media (max-width: 350px) {
    width: 100%;
  }
`;

const PostContainer = props => {
  return (
    <PostContainerStyle isTop={props.isTop}>
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
    </PostContainerStyle>
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

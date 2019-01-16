import React from 'react';
import PropTypes from 'prop-types';
import commentIcon from './comment-regular.svg';
import heartIcon from './heart-regular.svg';
import bookmark from './bookmark-regular.svg';
import redheart from './heart-red.svg';
import styled from 'styled-components';

const PostIcons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 6px;
  padding-right: 15px;
  padding-left: 15px;
`;

const IconLeft = styled.div`
  width: 65px;
  display: flex;
  justify-content: space-between;
`;
const Heart = styled.img`
  width: 25px;
  cursor: pointer;
`;
const Comment = styled.img`
  width: 25px;
  cursor: pointer;
`;
const Bookmark = styled.img`
  width: 20px;
  cursor: pointer;
`;
const Likes = styled.div`
  padding-top: 5px;
  padding-left: 15px;
  font-size: 1.55rem;
  font-weight: 600;
`;

const MiddleContentImg = props => {
  return (
    <div>
      <img
        onDoubleClick={props.heartDoubleClick}
        src={props.img}
        alt=''
        name={props.index}
      />
      <PostIcons className='post-icons'>
        <IconLeft className='icon-left'>
          <Heart
            src={props.isLiked[props.index] ? redheart : heartIcon}
            alt=''
            onClick={props.heartClick}
            name={props.index}
          />
          <Comment src={commentIcon} alt='' />
        </IconLeft>

        <div className='icon-right'>
          <Bookmark src={bookmark} alt='' />
        </div>
      </PostIcons>
      <Likes>{props.likedCounter[props.index]} likes</Likes>
    </div>
  );
};

MiddleContentImg.propTypes = {
  img: PropTypes.string,
  isLiked: PropTypes.array,
  heartClick: PropTypes.func,
  likedCounter: PropTypes.array
};

export default MiddleContentImg;

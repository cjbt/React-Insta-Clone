import React from 'react';
import PropTypes from 'prop-types';
import commentIcon from './comment-regular.svg';
import heartIcon from './heart-regular.svg';
import bookmark from './bookmark-regular.svg';
import redheart from './heart-red.svg';

const MiddleContentImg = props => {
  return (
    <div className='middle-content'>
      <img
        onDoubleClick={props.heartDoubleClick}
        src={props.img}
        alt=''
        name={props.index}
      />
      <div className='post-icons'>
        <div className='icon-left'>
          <img
            className='heart'
            src={props.isLiked[props.index] ? redheart : heartIcon}
            alt=''
            onClick={props.heartClick}
            name={props.index}
          />
          <img className='comment' src={commentIcon} alt='' />
        </div>

        <div className='icon-right'>
          <img className='bookmark' src={bookmark} alt='' />
        </div>
      </div>
      <div className='likes'>{props.likedCounter[props.index]} likes</div>
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

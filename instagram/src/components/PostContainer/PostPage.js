import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import PostContainer from './PostContainer';
import Footer from '../Footer/Footer';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

const PostPageStyle = styled.div`
  margin: 0 auto;
  top: 0;
  max-width: 935px;
`;

const App = styled.div`
  margin: 0 auto;
  position: absolute;
  top: 0;

  @media (max-width: 999px) {
    position: relative;
  }

  @media (max-width: 620px) {
    width: 100%;
  }

  @media (max-width: 350px) {
    width: 100%;
  }
`;

const BottomContent = styled.div`
  padding-top: 134px;
  margin: 0 auto;
  max-width: 935px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  z-index: 1;

  @media (max-width: 999px) {
    display: flex;
    justify-content: center;
    width: 100%;
  }

  @media (max-width: 740px) {
    width: 100%;
  }

  @media (max-width: 640px) {
    margin-bottom: 112px;
    border: none;
    margin-top: -112px;
    width: 100%;
  }

  @media (max-width: 620px) {
    width: 100%;
  }

  @media (max-width: 350px) {
    width: 100%;
  }
`;

const modal = keyframes`

    0% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(1);
    }
  
`;

const Modal = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${modal} 0.1s forwards;

  @media (max-width: 740px) {
    height: 150vh;
  }
`;

const ModalMenuContainer = styled.div`
  width: 400px;
  background: white;
  border-radius: 15px;
  @media (max-width: 740px) {
    margin-top: -490px;
    width: 250px;
  }
`;

const ModalMenu = styled.div`
  text-align: center;
`;

const ModalOption = styled.button`
  padding: 8px;

  border-top-right-radius: ${props => (props.logoutp ? '15px' : 0)};
  border-top-left-radius: ${props => (props.logoutp ? '15px' : 0)};
  border-bottom: none;
  padding-left: ${props => (props.logoutp ? '164.2px' : 0)};
  padding-right: ${props => (props.logoutp ? '164.2px' : 0)};
  cursor: pointer;

  :active {
    background: lightgray;
  }

  @media (max-width: 740px) {
    padding: 8px 89px;
  }

  :hover {
    color: red;
  }

  :active {
    border-top-right-radius: ${props => (props.logoutp ? '15px' : 0)};
    border-top-left-radius: ${props => (props.logoutp ? '15px' : 0)};
    border-bottom-right-radius: ${props => (props.logoutp ? 0 : '15px')};
    border-bottom-left-radius: ${props => (props.logoutp ? 0 : '15px')};
  }

  p {
    width: 70px;
  }
`;

const PostPage = props => {
  return (
    <React.Fragment>
      {props.isModalClicked ? (
        <Modal>
          <ModalMenuContainer>
            <ModalMenu>
              <form onSubmit={props.logout}>
                <ModalOption
                  logoutp
                  onClick={props.logout}
                >
                  <p>Log Out</p>
                </ModalOption>
              </form>

              <ModalOption
                onClick={props.modalNoneClick}
              >
                Cancel
              </ModalOption>
            </ModalMenu>
          </ModalMenuContainer>
        </Modal>
      ) : null}
      <PostPageStyle>
        <App>
          <SearchBar
            searchInput={props.searchInput}
            searchInputChange={props.searchInputChange}
            isTop={props.isTop}
            isModalClicked={props.isModalClicked}
            modalClick={props.modalClick}
          />
          <BottomContent>
            <div className='postouter'>
              {!props.dataList
                ? ''
                : props.dataList.map((post, i) => (
                    <PostContainer
                      thumbnail={post.thumbnailUrl}
                      username={post.username}
                      img={post.imageUrl}
                      likes={post.likes}
                      timestamp={post.timestamp}
                      key={i}
                      index={i}
                      comments={props.comments[i]}
                      commentValueChange={props.commentValueChange}
                      text={props.text}
                      addNewComment={e => props.addNewComment(e, i)}
                      isLiked={props.isLiked}
                      heartClick={props.heartClick}
                      likedCounter={props.likedCounter}
                      isTop={props.isTop}
                      heartDoubleClick={props.heartDoubleClick}
                    />
                  ))}
            </div>

            <Footer
              logout={props.logout}
              isTop={props.isTop}
              username={props.username}
              firstName={props.firstName}
              lastName={props.lastName}
              profile={props.profile}
            />
          </BottomContent>
        </App>
      </PostPageStyle>
    </React.Fragment>
  );
};

PostPage.propTypes = {
  searchInput: PropTypes.string,
  searchInputChange: PropTypes.func,
  isTop: PropTypes.bool,
  dataList: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string,
      thumbnailUrl: PropTypes.string,
      likes: PropTypes.number,
      timestamp: PropTypes.string,
      comments: PropTypes.arrayOf(
        PropTypes.shape({
          username: PropTypes.string,
          text: PropTypes.string
        })
      )
    })
  ),
  comments: PropTypes.array,
  commentValueChange: PropTypes.func,
  text: PropTypes.string,
  addNewComment: PropTypes.func,
  isLiked: PropTypes.array,
  heartClick: PropTypes.func,
  likedCounter: PropTypes.array,
  username: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  profile: PropTypes.string,
  logout: PropTypes.func,
  isModalClicked: PropTypes.bool,
  modalClick: PropTypes.func,
  modalNoneClick: PropTypes.func,
  heartDoubleClick: PropTypes.func
};

export default PostPage;

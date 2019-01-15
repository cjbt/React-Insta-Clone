import React, { Component } from 'react';
// import './components/style/App.scss';
import dummyData from './dummy-data';
import Authenticate from './components/Authentication/Authenticate';
import PostPage from './components/PostContainer/PostPage';
import insta from './instagram.svg';
import styled, { createGlobalStyle, keyframes } from 'styled-components';

const GlobalStyle = createGlobalStyle`
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}

* {
  box-sizing: border-box;
}

img {
  width: 100%;
  height: auto;
}

html {
  font-size: 62.5%;
}

html,
body {
  margin: 0;
  padding: 0;
  font-family: 'Roboto', Arial, sans-serif;
}

p {
  line-height: 24px;
  font-size: 1.6rem;
}

h1 {
  font-size: 3rem;
  font-weight: 800;
}
`;

const Loading = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-content: center;
`;

const instarotate = keyframes`
0% {
    transform: rotate(0deg);
  }
  30% {
    transform: rotate(360deg);
  }

  35% {
    transform: rotate(355deg);
  }
  100% {
    transform: rotate(0deg);
  }
  `;

const LoadingInsta = styled.img`
  width: 80px;
  opacity: 0.2;
  animation: ${instarotate} 3s infinite;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataList: [],
      searchInput: '',
      username: localStorage.getItem('username'),
      text: '',
      isTop: true,
      comments: [],
      firstName: localStorage.getItem('fullname'),
      profile: localStorage.getItem('display'),
      isLiked: [],
      likedCounter: [],
      isModalClicked: false
    };
  }

  componentDidMount() {
    console.log(window.localStorage);
    const commentArr = dummyData.map(data => data.comments);
    const isLiked = dummyData.map(data => false);
    const likedCounter = dummyData.map(data => data.likes);

    this.timerHandle = setTimeout(() => {
      this.setState({
        dataList: dummyData,
        comments: commentArr,
        isLiked: isLiked,
        likedCounter: likedCounter
      });
    }, 3000);

    document.addEventListener('scroll', this.scrollChange);
  }

  componentWillUnmount() {
    // clearTimeout(this.time);
    if (this.timerHandle) {
      clearTimeout(this.timerHandle);
      this.timerHandle = 0;
    }
  }

  scrollChange = () => {
    const isTop = window.scrollY < 55;
    if (isTop !== this.state.isTop) {
      this.setState({
        isTop
      });
    }
  };

  searchInputChange = e => {
    const newData = dummyData.map(item =>
      item.username.split('').filter(item => item.username === e.target.value)
    );

    this.setState({
      dataList: newData,
      searchInput: e.target.value
    });
  };

  commentValueChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  addNewComment = (e, i) => {
    e.preventDefault();
    const newArr = this.state.comments;
    newArr[i].push({ username: this.state.username, text: this.state.text });

    this.setState({
      comments: newArr,
      text: ''
    });
  }; // commentSubmit()

  heartDoubleClick = e => {
    const indexClicked = parseInt(e.target.name);
    const isLiked = this.state.isLiked.map((like, i) => {
      if (i === indexClicked) {
        return like ? false : true;
      } else {
        return like;
      }
    });
    this.setState({
      isLiked: isLiked
    });

    this.likedCounterChange(indexClicked);
  };

  heartClick = e => {
    const indexClicked = parseInt(e.target.name);
    const isLiked = this.state.isLiked.map((like, i) => {
      if (i === indexClicked) {
        return like ? false : true;
      } else {
        return like;
      }
    });
    this.setState({
      isLiked: isLiked
    });

    this.likedCounterChange(indexClicked);
  };

  likedCounterChange = indexClicked => {
    const likedCounter = this.state.likedCounter.map((item, i) => {
      if (i === indexClicked) {
        return this.state.isLiked[indexClicked] ? (item -= 1) : (item += 1);
      } else {
        return item;
      }
    });
    this.setState({
      likedCounter: likedCounter
    });
  };

  modalClick = () => {
    this.setState({
      isModalClicked: true
    });
  };

  modalNoneClick = () => {
    this.setState({
      isModalClicked: false
    });
  };

  render() {
    return (
      <React.Fragment>
        {this.state.dataList.length === 0 ? (
          <Loading>
            <LoadingInsta src={insta} alt='' />
          </Loading>
        ) : (
          <GlobalStyle>
            <PostPage
              searchInput={this.state.searchInput}
              searchInputChange={this.searchInputChange}
              isTop={this.state.isTop}
              dataList={this.state.dataList}
              comments={this.state.comments}
              commentValueChange={this.commentValueChange}
              text={this.state.text}
              addNewComment={this.addNewComment}
              isLiked={this.state.isLiked}
              heartClick={this.heartClick}
              likedCounter={this.state.likedCounter}
              username={this.state.username}
              firstName={this.state.firstName}
              lastName={this.state.lastName}
              profile={this.state.profile}
              logout={this.props.logout}
              isModalClicked={this.state.isModalClicked}
              modalClick={this.modalClick}
              modalNoneClick={this.modalNoneClick}
              heartDoubleClick={this.heartDoubleClick}
            />
          </GlobalStyle>
        )}
      </React.Fragment>
    );
  }
}

export default Authenticate(App);

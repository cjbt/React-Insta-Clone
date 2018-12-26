import React, { Component } from 'react';
import './components/style/App.scss';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import Footer from './components/Footer/Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataList: dummyData,
      searchInput: '',
      commentValue: '',
      username: 'cjletsGETIT',
      text: '',
      data: []
    };
  }

  componentDidMount() {
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const targetUrl = 'http://71.65.239.221:5000/addComment';
    fetch(proxyUrl + targetUrl)
      .then(res => res.json())
      .then(data => this.setState({ data }));
  }

  searchInputChange = e => {
    this.setState({
      searchInput: e.target.value
    });
  };

  commentValueChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
    //console.log(this.state.commentValue);
  };

  commentSubmit = e => {
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const targetUrl = 'http://71.65.239.221:5000/addComment';
    e.preventDefault();

    fetch(proxyUrl + targetUrl, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    })
      .then(res => res.json())
      .then(data =>
        this.setState({
          username: data.username,
          text: data.text
        })
      );
    console.log(this.state.data, this.state.commentValue);
  };

  render() {
    return (
      <div className='App'>
        <SearchBar
          searchInput={this.state.searchInput}
          searchInputChange={this.searchInputChange}
        />
        <div className='bottom-content'>
          <div className='postouter'>
            {this.state.dataList.map(post => (
              <PostContainer
                thumbnail={post.thumbnailUrl}
                username={post.username}
                img={post.imageUrl}
                likes={post.likes}
                timestamp={post.timestamp}
                key={post.timestamp}
                comments={post.comments}
                commentValue={this.state.commentValue}
                commentValueChange={this.commentValueChange}
                commentSubmit={this.commentSubmit}
                text={this.state.text}
              />
            ))}
          </div>

          <Footer />
        </div>
      </div>
    );
  }
}

export default App;

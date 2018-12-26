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
      searchInput: ''
    };
  }

  searchInputChange = e => {
    this.setState({
      searchInput: e.target.value
    });
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

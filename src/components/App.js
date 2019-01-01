import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import YouTubeApi from './../apis/YouTubeApi';

class App extends React.Component {
  onTermSubmit = async term => {
    const res = await YouTubeApi.get('/search', {
      params: {
        q: term
      }
    });

    console.log(res.data.items);
  };

  render() {
    return (
      <div>
        <SearchBar onTermSubmit={this.onTermSubmit} />
        <VideoDetail />
        <VideoList />
      </div>
    );
  }
}

export default App;

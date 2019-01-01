import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import YouTubeApi from './../apis/YouTubeApi';

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null
  };

  componentDidMount() {
    this.onTermSubmit({ term: 'dog' });
  }

  onTermSubmit = async term => {
    const res = await YouTubeApi.get('/search', {
      params: {
        q: term
      }
    });

    this.setState({
      videos: res.data.items,
      selectedVideo: res.data.items[0]
    });
  };

  render() {
    return (
      <div>
        <SearchBar onTermSubmit={this.onTermSubmit} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

export default App;

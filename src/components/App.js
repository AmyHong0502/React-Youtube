import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {
  onTermSubmit = term => {
    console.log('APP' + term);
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

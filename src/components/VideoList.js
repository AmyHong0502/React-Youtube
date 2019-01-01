import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos }) => {
  const list = videos.map(video => {
    return (
      <VideoItem
        id={video.id.videoId}
        title={video.snippet.title}
        description={video.snippet.description}
        channelTitle={video.snippet.channelTitle}
        thumbnail={video.snippet.thumbnails.medium}
      />
    );
  });

  return list;
};

export default VideoList;

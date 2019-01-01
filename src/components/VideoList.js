import React from 'react';
import VideoItem from './VideoItem';

const VideoList = () => {
  return (
    <div>
      VideoList
      <VideoItem title='Title1' description='desc1' />
      <VideoItem title='Title2' description='desc2' />
      <VideoItem title='Title3' description='desc3' />
    </div>
  );
};

export default VideoList;

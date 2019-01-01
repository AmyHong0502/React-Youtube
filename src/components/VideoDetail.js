import React from 'react';

const VideoDetail = ({ video }) => {
  if (video) {
    return <div>VidelDetail: {video.snippet.title}</div>;
  }
  return <div />;
};

export default VideoDetail;

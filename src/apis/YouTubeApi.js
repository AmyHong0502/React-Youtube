import axios from 'axios';

import credentials from './credentials.json';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: credentials.YOUTUBE_API_KEY
  }
});

import axios from 'axios';
const KEY = 'AIzaSyAV64JEcCGazmENR8fG7zB_Y8NjDShQnZk';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 10,
        key: KEY
    }
})
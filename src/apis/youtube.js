import axios from 'axios';
const KEY = 'AIzaSyCQKzbya4fcZFdu6aNL1j06ESsPVqDDkDs';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 10,
        key: KEY
    }
})
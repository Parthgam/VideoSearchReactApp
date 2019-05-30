import axios from 'axios';
const KEY = 'AIzaSyCDpiXl3vcvXnk5RwcdJYa1cfmY6NLmovc';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 10,
        key: KEY
    }
})

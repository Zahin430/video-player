import axios from 'axios';

const KEY = 'AIzaSyDkyugB3BY5t8AJl692rMSSBkNxdEEbuf8';

// Accessing the youtube api with a GET request
export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/search',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY,
        
    }
});
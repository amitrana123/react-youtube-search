import axios from 'axios';

const KEY = 'AIzaSyCG1v9vQ7hixBCWI9kMILQjyduMRd1ilPU';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});


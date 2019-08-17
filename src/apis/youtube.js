import axios from 'axios';

const KEY = 'AIzaSyARaDRpqwtwyBt4t0slF5hl9FpdpLlY11c'

export default axios.create({
    baseUrl: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 25,
        key: KEY
    }

});
import axios from "axios";

const KEY = 'AIzaSyADEq2luXOlKf82Y9ZTR4Yy-7x_oZ6Tln4';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        type: 'video',
        key: KEY
    }
})
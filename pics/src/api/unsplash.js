import axios from "axios";

export default axios.create({
    baseURL: 'https://api.unsplash.com/search/photos',
    headers: {
        Authorization: 'Client-ID uA3Mfr8hlckiJljL1C1HtYTDW62-LQOg2DCgccfrPGI'
    } 
});
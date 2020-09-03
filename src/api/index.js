import axios from 'axios';

const instance = axios.create({
    baseURL: process.env.VUE_APP_LOCAL_URL
});

export default instance; 
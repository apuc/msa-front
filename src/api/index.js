import axios from 'axios';

// const instance = axios.create({
//     baseURL: process.env.VUE_APP_LOCAL_URL
// });
const BASE_URL= process.env.VUE_APP_LOCAL_URL
// export default instance;
const API = {
    slider:()=>axios.get(`${BASE_URL}/wp-json/wp/v2/msa_slider/`)
}
export default {
    install(Vue) {
        console.log(process.env.VUE_APP_LOCAL_URL)
        Object.defineProperty(Vue.prototype, '$API', { value: API })
    }
}
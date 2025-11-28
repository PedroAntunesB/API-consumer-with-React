import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.rodrigoribeiro.net'
});

export default api;
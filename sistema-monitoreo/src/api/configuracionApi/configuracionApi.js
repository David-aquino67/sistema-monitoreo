import axios from 'axios';
const clienteApi = axios.create({
    baseURL: 'http://127.0.0.1:8000/api', // http://localhost:3001
    headers: {
        'Content-Type': 'application/json'
    }
});

export default clienteApi;
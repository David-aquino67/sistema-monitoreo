import axios from 'axios';
const clienteApi = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_DIR, // http://localhost:3001
    headers: {
        'Content-Type': 'application/json'
    }
});

export default clienteApi;
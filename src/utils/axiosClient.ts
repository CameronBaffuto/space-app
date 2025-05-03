import axios from 'axios';

const axiosClient = axios.create({
    headers: { 'Content-Type': 'application/json', Credentials: 'include' },
    withCredentials: true,
});

export default axiosClient
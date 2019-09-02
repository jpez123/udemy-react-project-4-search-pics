//Import libraries
import axios from 'axios';

//Custom method
export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 4d5170b517491537d3c0ac9dfd3e301a359fb21ab05f46fdde597039b9f76600'
    }
});
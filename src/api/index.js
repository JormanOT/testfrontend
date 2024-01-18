import axios from 'axios';

axios.defaults.baseURL = import.meta.env.VITE_API_URL

export const FetchData = async (params)=>{
    try {
        const response = await axios.request(params)
        return response.data
    } catch (error) {
        return {error : error.message}
    }
}

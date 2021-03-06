import axios from "axios";

const API_URL = '/blogs'


// Get blogs
const getBlogs = async() => {
    const response = await axios.get(API_URL)

    return response.data
}

const blogService = {
    getBlogs
}

export default blogService;
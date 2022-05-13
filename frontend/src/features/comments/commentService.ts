import axios from "axios"

const API_URL = '/comments'

const getComments = async (id: number) => {
    const response = await axios.get(`${API_URL}/${id}`)

    return response.data
}

const postComment = async (body: any) => {
    const response = await axios.post(`${API_URL}/${body._id}`, body.data)

    return response.data
}

const commentService = {
    getComments,
    postComment
}

export default commentService
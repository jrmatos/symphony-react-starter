import axios from 'axios'

const BASE_URL = 'https://jsonplaceholder.typicode.com'

// posts
const GET_POSTS_URL = `${BASE_URL}/posts`

export const fetchPosts = async () => {
  try {
    const response = await axios(GET_POSTS_URL)
    return response.data
  } catch (e) {
    throw e
  }
}

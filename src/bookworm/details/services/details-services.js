import axios from "axios";

const SEARCH_URL = 'https://www.googleapis.com/books/v1/volumes/'

export const findBookByID = async (identifier) => {
    if (identifier.length === 0) {
        return []
    }

    const response = await axios.get(`${SEARCH_URL}${identifier}`)

    return response.data
}
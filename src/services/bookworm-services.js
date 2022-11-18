import axios from "axios";

const SEARCH_URL = 'https://www.googleapis.com/books/v1/volumes?q='

export const findBookBySearchTerm = async (term) => {
    const response = await axios.get(`${SEARCH_URL}${term}`)

    return response.data.items
}
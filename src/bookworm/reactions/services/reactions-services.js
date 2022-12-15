import axios from "axios";
import reactions from "../reactions";
const BOOK_API = 'http://localhost:4000/book'


const api = axios.create({withCredentials: true})

export const findBookReactions = async (bookID) => {
    const response = await api.get(`${BOOK_API}/${bookID}`)
    return response.data
}

export const reactToBook = async (update) => {
    console.log(update.reaction)
    const response = await api.put(`${BOOK_API}/${update.bookID}/react/${update.reaction}`)
    return response.data
}

export const undoReactToBook = async (update) => {
    const response = await api.put(`${BOOK_API}/${update.bookID}/undoReact/${update.reaction}`)
    return response.data
}
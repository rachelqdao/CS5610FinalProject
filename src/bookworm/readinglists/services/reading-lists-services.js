import axios from "axios";
const READING_LIST_API = 'http://localhost:4000/reading-lists'


const api = axios.create({withCredentials: true})

export const createReadingList = async (readingList) => {
    const response = await api.post(READING_LIST_API, readingList)
    return response.data
}

export const findReadingListsByUserID = async (userID) => {
    const response = await api.get(`${READING_LIST_API}/${userID}`)
    return response.data
}

export const deleteReadingList = async (listID) => {
    const response = await api.delete(`${READING_LIST_API}/${listID}`)
    return response.data
}

export const addBookToReadingList = async (update) => {
    const response = await api.put(`${READING_LIST_API}/${update.listID}/${update.bookID}/add`)
    return response.data
}

export const deleteBookFromReadingList = async (update) => {
    const response = await api.put(`${READING_LIST_API}/${update.listID}/${update.bookID}/delete`)
    return response.data
}


import axios from "axios";
const READING_LIST_API = 'http://localhost:4000/reading-lists'


const api = axios.create({withCredentials: true})

export const createReadingList = async (readingList) => {
    const response = await api.post(READING_LIST_API, readingList)

    console.log(response.data)
    return response.data
}

export const findReadingListsByUserID = async (userID) => {
    const response = await api.get(`${READING_LIST_API}/${userID}`)
    console.log(response)
    return response.data
}


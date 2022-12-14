import {createSlice} from "@reduxjs/toolkit";
import {
    addBookToReadingListThunk,
    createReadingListThunk, deleteBookFromReadingListThunk, deleteReadingListThunk,
    findReadingListsByUserIDThunk
} from "./services/reading-lists-thunks";

const readingListsReducer = createSlice({
    name: 'readingLists',
    initialState: {
        readingLists: []
    },
    extraReducers: {
        [createReadingListThunk.fulfilled]: (state, action) => {
            state.readingLists.push(action.payload)
        },
        [findReadingListsByUserIDThunk.fulfilled]: (state, action) => {
            state.readingLists = action.payload
        },
        [deleteReadingListThunk.fulfilled]: (state, action) => {
            state.readingLists = state.readingLists.filter(readingList => readingList._id !== action.payload._id)
        },
        [addBookToReadingListThunk.fulfilled]: (state, action) => {
            const index = state.readingLists.findIndex((readingList) => readingList._id === action.payload.listID)
            state.readingLists[index].books = action.payload.bookList

        },
        [deleteBookFromReadingListThunk.fulfilled]: (state, action) => {
            const index = state.readingLists.findIndex((readingList) => readingList._id === action.payload.listID)
            state.readingLists[index].books = state.readingLists[index].books.filter((book) => book.id !== action.payload.bookInfo.id)

        }
    }
})

export default readingListsReducer.reducer
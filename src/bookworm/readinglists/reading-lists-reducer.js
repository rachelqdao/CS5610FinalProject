import {createSlice} from "@reduxjs/toolkit";
import {
    addBookToReadingListThunk,
    createReadingListThunk, deleteReadingListThunk,
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

        },
        [addBookToReadingListThunk.fulfilled]: (state, action) => {

        }
    }
})

export default readingListsReducer.reducer
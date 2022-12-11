import {createSlice} from "@reduxjs/toolkit";
import {createReadingListThunk} from "./services/reading-lists-thunks";

const readingListsReducer = createSlice({
    name: 'readingLists',
    initialState: {
        readingLists: []
    },
    extraReducers: {
        [createReadingListThunk.fulfilled]: (state, action) => {
            state.readingLists.push(action.payload)
        }
    }
})

export default readingListsReducer.reducer
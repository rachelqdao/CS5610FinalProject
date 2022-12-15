import {createSlice} from "@reduxjs/toolkit";
import {createBookClubThunk, findBookClubByOwnerIDThunk} from "./book-clubs-thunks";

const bookClubsReducer = createSlice({
    name: "bookClubs",
    initialState: {
        bookClubs: []
    },
    extraReducers: {
        [createBookClubThunk.fulfilled]: (state, action) => {
            state.bookClubs.push(action.payload)
        },
        [findBookClubByOwnerIDThunk.fulfilled]: (state, action) => {
            state.bookClubs = action.payload
        },
    }
})

export default bookClubsReducer.reducer;
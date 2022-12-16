import {createSlice} from "@reduxjs/toolkit";
import {
    addMemberToBookClubThunk,
    createBookClubThunk,
    findAllBookClubsThunk,
    findBookClubByOwnerIDThunk,
    findMembersByBCIDThunk
} from "./services/book-clubs-thunks";

const bookClubsReducer = createSlice({
    name: "bookClubs",
    initialState: {
        bookClubs: [],
        currentBookClub: null
    },
    extraReducers: {
        [createBookClubThunk.fulfilled]: (state, action) => {
            state.bookClubs = state.bookClubs.push(action.payload)
        },
        [findBookClubByOwnerIDThunk.fulfilled]: (state, action) => {
            state.bookClubs = action.payload
        },
        [findAllBookClubsThunk.fulfilled]: (state, action) => {
            state.loading = false;
            state.bookClubs = action.payload;
        },
        [findMembersByBCIDThunk.fulfilled]: (state, action) => {
            state.currentBookClub = action.payload
        },
        [addMemberToBookClubThunk.fulfilled]: (state, action) => {
            const index = state.bookClubs.findIndex((bc) => bc._id === action.payload.bcID)
            const newMember = {
                _id: action.payload.mid,
                username: action.payload.username
            }
            state.bookClubs[index] = state.bookClubs[index].members.push(newMember);
        },

    }
})

export default bookClubsReducer.reducer;
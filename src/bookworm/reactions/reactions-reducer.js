import {createSlice} from "@reduxjs/toolkit";
import {findBookReactionsThunk, reactToBookThunk, undoReactToBookThunk} from "./services/reactions-thunks";


const bookReactionsReducer = createSlice({
    name: 'bookReactions',
    initialState: {
        reactions: {
            nice: [],
            loved: [],
            well_written: [],
            confusing: [],
            informative: [],
            hated: [],
        }
    },
    extraReducers: {
        [findBookReactionsThunk.fulfilled]: (state, action) => {
            // only does something if it finds the book in database w/ reactions, otherwise clear reactions
            if (action.payload) {
                state.reactions.nice = action.payload.nice
                state.reactions.loved = action.payload.loved
                state.reactions.well_written = action.payload.well_written
                state.reactions.confusing = action.payload.confusing
                state.reactions.informative = action.payload.informative
                state.reactions.hated = action.payload.hated
            } else {
                state.reactions.nice = []
                state.reactions.loved = []
                state.reactions.well_written = []
                state.reactions.confusing = []
                state.reactions.informative = []
                state.reactions.hated = []
            }
        },
        [reactToBookThunk.fulfilled]: (state, action) => {
            state.reactions[action.payload.reaction].push(action.payload.userID)

        },
        [undoReactToBookThunk.fulfilled]: (state, action) => {
            state.reactions[action.payload.reaction] = state.reactions[action.payload.reaction].filter(userID => userID !== action.payload.userID)
        }

    }
})

export default bookReactionsReducer.reducer
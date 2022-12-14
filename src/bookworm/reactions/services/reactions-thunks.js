import {createAsyncThunk} from "@reduxjs/toolkit";
import {findBookReactions, reactToBook, undoReactToBook} from "./reactions-services";

export const findBookReactionsThunk = createAsyncThunk(
    'findBook',
    async (bookID) => findBookReactions(bookID)
)

export const reactToBookThunk = createAsyncThunk(
    'reactToBook',
    async (update) => reactToBook(update)
)

export const undoReactToBookThunk = createAsyncThunk(
    'undoReactToBook',
    async (update) => undoReactToBook(update)
)
import {createAsyncThunk} from "@reduxjs/toolkit";
import {
    addBookToReadingList,
    createReadingList,
    deleteReadingList,
    findReadingListsByUserID
} from "./reading-lists-services";

export const createReadingListThunk = createAsyncThunk(
    'createReadingList',
    async (readingList) => createReadingList(readingList)
)

export const findReadingListsByUserIDThunk = createAsyncThunk(
    'findReadingListsByUserID',
    async (userID) => findReadingListsByUserID(userID)
)

export const addBookToReadingListThunk = createAsyncThunk(
    'addBookToReadingListThunk',
    async (update) => addBookToReadingList(update)
)

export const deleteReadingListThunk = createAsyncThunk(
    'deleteReadingList',
    async (listID) => deleteReadingList(listID)
)
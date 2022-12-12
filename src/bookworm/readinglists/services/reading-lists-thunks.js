import {createAsyncThunk} from "@reduxjs/toolkit";
import {
    addBookToReadingList,
    createReadingList, deleteBookFromReadingList,
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

export const deleteReadingListThunk = createAsyncThunk(
    'deleteReadingList',
    async (listID) => deleteReadingList(listID)
)

export const addBookToReadingListThunk = createAsyncThunk(
    'addBookToReadingListThunk',
    async (update) => addBookToReadingList(update)
)

export const deleteBookFromReadingListThunk = createAsyncThunk(
    'deleteBookFromReadingListThunk',
    async (update) => deleteBookFromReadingList(update)
)
import {createAsyncThunk} from "@reduxjs/toolkit";
import {createReadingList, findReadingListsByUserID} from "./reading-lists-services";

export const createReadingListThunk = createAsyncThunk(
    'createReadingList',
    async (readingList) => createReadingList(readingList)
)

export const findReadingListsByUserIDThunk = createAsyncThunk(
    'findReadingListsByUserID',
    async (userID) => findReadingListsByUserID(userID)
)
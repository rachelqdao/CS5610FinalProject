import {createAsyncThunk} from "@reduxjs/toolkit";
import {createReadingList} from "./reading-lists-services";

export const createReadingListThunk = createAsyncThunk(
    'createReadingList',
    async (readingList) => createReadingList(readingList)
)
import {createAsyncThunk} from "@reduxjs/toolkit";
import {findBookByID} from "./details-services";

export const findBookByIDThunk =
    createAsyncThunk(
        'findBookByID',
        async (identifier) => await findBookByID(identifier)
    )
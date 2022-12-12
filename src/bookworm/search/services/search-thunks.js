import {createAsyncThunk} from "@reduxjs/toolkit"
import {findBookBySearchTerm, findBookByAuthor, findBookByKeyword} from "./search-services"

export const findBookBySearchTermThunk =
    createAsyncThunk(
    'findBookBySearchTerm',
        async (term) => await findBookBySearchTerm(term)
)

export const findBookByAuthorThunk =
    createAsyncThunk(
        'findBookByAuthor',
        async (author) => await findBookByAuthor(author)
    )

export const findBookByKeywordThunk =
    createAsyncThunk(
        'findBookByKeyword',
        async (keyword) => await findBookByKeyword(keyword)
    )
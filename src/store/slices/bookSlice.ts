import {IBook, ServerResponse} from "../../models/models";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface BookSlice {
    question: string
    loading: boolean,
    error: string
    count: number | boolean
    books: IBook[]
    pag: number
    orderS: string
    categoriesS: string
}

const initialState: BookSlice = {
    orderS: '',
    categoriesS: "",
    pag: 0,
    question: '',
    loading: false,
    count: false,
    error: '',
    books: [],
}

export const BookSlice = createSlice({
    name: 'book',
    initialState,
    reducers: {
        fetching(state) {
            state.loading = true
        },
        fetchSuccess(state, action: PayloadAction<ServerResponse<IBook>>) {
            state.pag = action.payload.page
            state.loading = false
            state.books = action.payload.items
            if (!state.count || state.question !== action.payload.question || state.orderS !== action.payload.order || state.categoriesS !== action.payload.categories) {
                state.pag = 0
                state.count = action.payload.totalItems
                state.question = action.payload.question
                state.orderS = action.payload.order
                state.categoriesS = action.payload.categories
            }

        },
        fetchError(state, action: PayloadAction<Error>) {
            state.loading = false
            state.error = action.payload.message
        }
    }
})

export default BookSlice.reducer
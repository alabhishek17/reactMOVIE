
import {configureStore} from "@reduxjs/toolkit"
import {populerMoviesApi} from "../services/popular.js"
const store=configureStore({
    reducer: {
        [populerMoviesApi.reducerPath]:populerMoviesApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(populerMoviesApi.middleware),
})

export default store;
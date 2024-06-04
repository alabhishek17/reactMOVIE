
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

 export const populerMoviesApi=createApi({
    reducerPath:'populerMovie',
    baseQuery:fetchBaseQuery({baseUrl:"https://api.themoviedb.org/3/movie/", 
    headers:{
    authorization: "bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNmU5MzM1Yjg5Y2E3NWE3MGJjY2UxYzcyYmZkMDQ4ZCIsInN1YiI6IjYzYmVkN2FiODU4Njc4MDBmMDhjZjI3NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sQHes_rn51wewxY_7nZLxGssnd67J8ieiLOIo2Bg_FI", }}),
    endpoints:(builder)=>({
        getPopulerMovies:builder.query({
            query:()=>"popular",
        }),
    }),
});

console.log(populerMoviesApi);
export const {useGetPopulerMoviesQuery} = populerMoviesApi;



// fetch("https://api.themoviedb.org/3/movie/popular", {
//   "headers": {
    
//     "authorization": "bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNmU5MzM1Yjg5Y2E3NWE3MGJjY2UxYzcyYmZkMDQ4ZCIsInN1YiI6IjYzYmVkN2FiODU4Njc4MDBmMDhjZjI3NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sQHes_rn51wewxY_7nZLxGssnd67J8ieiLOIo2Bg_FI",
   
//   },
  
// });
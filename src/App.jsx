import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {useGetPopulerMoviesQuery} from "./reducer/services/popular";
// import { useSelector } from 'react-redux';
function App() {
  
  const {data,error,isLoading} = useGetPopulerMoviesQuery();

  console.log({data,error,isLoading});
  return (
    

    <>
    <div>
      <h1>movies</h1>
      {data?.results?.map((iteam)=>(
          <p key={iteam.id}>{iteam?.original_title}</p>
      ))
      }
      </div>
    </>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import Header from "./components/Header/Header";
import VideoDetails from './components/VideoDetails/VideoDetails';
function App() {
  return (
    <>
       <Header/>
       <main>
         <VideoDetails/>
       </main>
    </>
  )
}

export default App

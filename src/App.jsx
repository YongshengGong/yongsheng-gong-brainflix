import { useState } from 'react'
import './App.scss'
import Header from "./components/Header/Header";
import VideoDetails from './components/VideoDetails/VideoDetails';
import videos from "./data/video-details.json";
function App() {
     const [selectedVideo,setSelectedVideo]=useState(videos[0]);
  return (
    <>
       <Header/>
       <main>
         <VideoDetails video={selectedVideo}/>
       </main>
    </>
  )
}

export default App

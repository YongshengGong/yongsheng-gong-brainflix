import { useState } from 'react'
import './App.scss'
import Header from "./components/Header/Header";
import VideoDetails from './components/VideoDetails/VideoDetails';
import videos from "./data/video-details.json";
import NextVideos from './components/NextVideos/NextVideos';
function App() {
     const [selectedVideo,setSelectedVideo]=useState(videos[0]);
     function handleClick(video){
        setSelectedVideo(video)
     }
  return (
    <>
       <Header/>
       <main>
         <VideoDetails video={selectedVideo}/>
         <NextVideos onClick={()=>{handleClick(video)}} videos={videos}/>
       </main>
    </>
  )
}

export default App

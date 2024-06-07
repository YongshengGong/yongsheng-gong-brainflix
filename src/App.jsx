import React, { useEffect, useState } from 'react'
import './App.scss'
import Header from "./components/Header/Header";
import VideoDetails from './components/VideoDetails/VideoDetails';
import videos from "./data/video-details.json";
import NextVideos from './components/NextVideos/NextVideos';
import Player from './components/Player/Player';
import axios from 'axios';
function App() {
  const url="https://unit-3-project-api-0a5620414506.herokuapp.com/";
  const api_key="3e1b084f-72fa-4a65-8938-76c9f8b3a923";
  useEffect(()=>{
   async function callApi(){
      const res = await axios.get(`${url}videos?api_key=${api_key}`);
      console.log(res.data);
   }
   callApi();
  },[])
  const [selectedVideo, setSelectedVideo] = useState(videos[0]);
  const [list,setList]=useState(videos);
  function check(id) {
    const filter = videos.find(obj => obj.id === id);
    setSelectedVideo(filter);
  }
  const newList=list.filter(obj=>obj.id!==selectedVideo.id);
  return (
    <>
      <Header />
      <Player video={selectedVideo}/>
      <main className="main">
        <VideoDetails video={selectedVideo} />
        <NextVideos list={newList} check={check} />
      </main>
    </>
  )
}

export default App

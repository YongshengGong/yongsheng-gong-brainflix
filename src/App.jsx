import React, { useEffect, useState } from 'react'
import './App.scss'
import Header from "./components/Header/Header";
import VideoDetails from './components/VideoDetails/VideoDetails';
// import videos from "./data/video-details.json";
import NextVideos from './components/NextVideos/NextVideos';
import Player from './components/Player/Player';
import axios from 'axios';
function App() {
  const url="https://unit-3-project-api-0a5620414506.herokuapp.com/";
  const api_key="3e1b084f-72fa-4a65-8938-76c9f8b3a923";
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [list,setList]=useState([]);
  const [loading,setLoading]=useState(true);

  useEffect(()=>{
   async function callApi(){
    let completeList=[];
   try{
      const res = await axios.get(`${url}videos?api_key=${api_key}`);
      for (const obj of res.data) {
        const videoDetails = await callApiCompleteList(obj);
        completeList.push(videoDetails.data);
      }
      setSelectedVideo(completeList[0]);
      setList([...list,...completeList]);
   }
   catch(error){
    console.log(error);
   }
  setLoading(false);
   }
   callApi();
  },[]);
  

  async function callApiCompleteList(obj){
    try{
      const res = await axios.get(`${url}videos/${obj.id}?api_key=${api_key}`);
      return res;
    }
    catch(error){
        console.log(error)
    }
  }


  function check(id) {
    const filter = list.find(obj => obj.id === id);
    setSelectedVideo(filter);
  }
  const newList=list.filter(obj=>obj.id!==selectedVideo.id);
   console.log(list)
  if(loading){
    return <h1>Loading...</h1>
  }
  else{
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
}

export default App

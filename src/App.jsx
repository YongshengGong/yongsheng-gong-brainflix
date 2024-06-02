import { useState } from 'react'
import './App.scss'
import Header from "./components/Header/Header";
import VideoDetails from './components/VideoDetails/VideoDetails';
import videos from "./data/video-details.json";
import NextVideos from './components/NextVideos/NextVideos';
function App() {
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
      <main>
        <VideoDetails video={selectedVideo} />
        <NextVideos list={newList} check={check} />
      </main>
    </>
  )
}

export default App

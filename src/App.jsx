import { useState } from 'react'
import './App.scss'
import Header from "./components/Header/Header";
import VideoDetails from './components/VideoDetails/VideoDetails';
import videos from "./data/video-details.json";
import NextVideos from './components/NextVideos/NextVideos';
function App() {
  const [selectedVideo, setSelectedVideo] = useState(videos[0]);
  function check(id) {
    const filter = videos.find(obj => obj.id === id);
    const index = videos.indexOf(filter);
    setSelectedVideo(videos[index]);
  }
  return (
    <>
      <Header />
      <main>
        <VideoDetails video={selectedVideo} />
        <NextVideos videos={videos} check={check} />
      </main>
    </>
  )
}

export default App

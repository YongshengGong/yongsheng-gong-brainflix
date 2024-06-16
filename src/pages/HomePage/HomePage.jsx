import React, { useEffect, useState } from 'react'
import './HomePage.scss'
import Header from "../../components/Header/Header";
import VideoDetails from '../../components/VideoDetails/VideoDetails';
import NextVideos from '../../components/NextVideos/NextVideos';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function HomePage() {
  const url = "http://localhost:8080/";
  const api_key = "3e1b084f-72fa-4a65-8938-76c9f8b3a923";
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  let { id } = useParams();

  useEffect(() => {
    async function callApi() {
      try {
        const completeList = [];
        const incompleteList = await axios.get(`${url}videos?api_key=${api_key}`);
        console.log(incompleteList);
        for (const incompleteListObject of incompleteList.data) {
          const completeListObject = await callApiCompleteList(incompleteListObject);
          completeList.push(completeListObject.data);
        }
        if (id) {
          setSelectedVideo(completeList.find(obj => obj.id === id))
        }
        else {
          setSelectedVideo(completeList[0]);
        }
        setList([...completeList]);
      }
      catch (error) {
        console.log(error);
      }
      setLoading(false);
    }
    callApi();
  }, [id]);



  async function callApiCompleteList(obj) {
    try {
      const res = await axios.get(`${url}videos/${obj.id}?api_key=${api_key}`);
      return res;
    }
    catch (error) {
      console.log(error)
    }
  }

  let filteredList = null;
  if (id) {
    filteredList = list.filter(obj => obj.id !== id);
  }
  else {
    filteredList = list.filter(obj => obj !== list[0])
  }



  if (loading) {
    return <span>Loading...</span>
  }
  else {
    return (
      <>
        <Header />
        <main>
          <VideoDetails video={selectedVideo} api_key={api_key} />
          <NextVideos filteredList={filteredList} api_key={api_key}/>
        </main>
      </>
    )
  }
}

export default HomePage

import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { fetchDataApi } from '../fetchData';
import ChannelCard from '../Cards/ChannelCard';
import VideoFeed from '../videoFeed/VideoFeed';
const ChannelDets = () => {
  let {channelId} = useParams();
  let [channelDetails, setChannelDetails] = useState([]);
  let [channelVideos, setChannelVideos] = useState([]);
  useEffect(() => {
    try {
      fetchDataApi(`channels?part="snippet&id=${channelId}`).then((data) => {
        setChannelDetails(data.items[0]);
      })
      fetchDataApi(`search?channelId=${channelId}&part=snippet&order=date`).then((data) => {
        setChannelVideos(data.items);
      })
    } catch (error) {
      console.log('got an error in loading api data ' + error)
    }
  }, [])
  console.log(channelDetails);
  return (
    <>
        <ChannelCard channelInfo={channelDetails} />
      <VideoFeed videosData={channelVideos} selectedCategory = {"Channel"}/>
      </>
  )
}

export default ChannelDets
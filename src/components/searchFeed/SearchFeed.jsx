import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchDataApi } from '../fetchData';
import VideoFeed from '../videoFeed/VideoFeed';
const SearchFeed = () => {
  let { query } = useParams();
  let [videosData, setVideosData] = useState([]);
  console.log(query)
  useEffect(() => {
    try {
      fetchDataApi(`search?part=snippet&q=${query}`)
      .then((data)=>setVideosData(data?.items))
    } catch (error) {
      console.log('got error while fetching data ')
    }
  }, [query])
  useEffect(()=>{setVideosData([])}, [query])
  return (
    <>
      <VideoFeed videosData={videosData} selectedCategory={query} />
    </>
  )
}

export default SearchFeed
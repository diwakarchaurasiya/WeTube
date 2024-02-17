import React, { useEffect, useState } from 'react'
import SideBar from '../navigation/sideBar/SideBar'
import VideoFeed from '../videoFeed/VideoFeed'
import { Stack, Box, Typography } from '@mui/material'
import { fetchDataApi, sampleResponse } from '../fetchData'
const Home = () => {
    let [videosData, setVideosData] = useState([]);
    let [selectedCategory, setSelectedCategory] = useState('Latest');
    useEffect(() => {
        try {
            fetchDataApi(`search?part=snippet&q=${selectedCategory}`)
            .then((data) => {
                setVideosData(data.items)
          })
        } catch (error) {
            console.log('got error')
        }
        // setVideosData(sampleResponse)
    }, [selectedCategory])
    useEffect(()=>{setVideosData([])}, [selectedCategory])
    return (
        <><Stack direction={'row'} > 
            <Box width='20vw' sx={{display:'flex',height: { sx: "auto", md: "100%" },justifyContent:'center',borderRight:'2px solid #e0e0e0'}} >
                <SideBar selectedCategory={selectedCategory} setSelectedCategory = {setSelectedCategory} />
            </Box>
            <Box width='100%'>
                <Typography sx={{fontSize:'2rem',fontWeight:'bold',color:'e0e0e0',margin:'1rem'}}><span style={{color:'red'}}>{ selectedCategory}</span> videos </Typography>
                <VideoFeed videosData = {videosData} />
            </Box>
        </Stack>
            
      </>
  )
}

export default Home
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
        <><Stack direction={'row'}  sx={{flexDirection:{xs:'column',md:'row'}}}> 
            <Box  sx={{ position:'sticky',height: { md: "100%" },width:{md:'18vw',xs:'auto'},padding: { sx: '0', md: '2rem 0' }  }}>
                <SideBar selectedCategory={selectedCategory} setSelectedCategory = {setSelectedCategory} />
            </Box>
            <Box width='100%'>
                <VideoFeed videosData = {videosData}  selectedCategory = {selectedCategory}/>
            </Box>
        </Stack>
            
      </>
  )
}

export default Home
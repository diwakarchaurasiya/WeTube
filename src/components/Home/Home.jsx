import React from 'react'
import SideBar from '../navigation/sideBar/SideBar'
import VideoFeed from '../videoFeed/VideoFeed'
import { Stack ,Box} from '@mui/material'
const Home = () => {
    return (
        <><Stack direction={'row'} > 
            <Box width='20vw'>
                <SideBar />
            </Box>
            <Box width='100%'>
                <VideoFeed />
            </Box>
        </Stack>
            
      </>
  )
}

export default Home
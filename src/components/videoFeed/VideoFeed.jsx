import React from 'react'
import { Stack, Box, Typography } from '@mui/material'
import VideoCard from '../Cards/VideoCard'
import ChannelCard from '../Cards/ChannelCard'
import PlaylistCard from '../Cards/PlaylistCard'  
import VideoCardSkeleton from '../loadingPages/VideoCardSkeleton'
const VideoFeed = ({videosData,selectedCategory,margin}) => {
  if (!videosData?.length) {
    return (
      <>
      <Stack direction={'row'} margin sx={{ flexWrap: 'wrap', justifyContent: 'space-evenly', alignItems: 'center' }}>
        <VideoCardSkeleton/>
        <VideoCardSkeleton/>
        <VideoCardSkeleton/>
        <VideoCardSkeleton/>
        <VideoCardSkeleton/>
        <VideoCardSkeleton/>
        </Stack>
        </>
    )
  }
  return (
    <>
       <Stack direction={'row'} sx={{flexWrap:'wrap',justifyContent:'space-evenly',margin:margin}}>
       {videosData.map((item, idx) => (
         <Box key={idx} margin={2} sx={{ "&:hover": {
      backgroundColor: '#0000'
    }}}>
          {item?.id?.videoId && <VideoCard video={item} />}
          {item?.id?.playlistId && <PlaylistCard playInfo={item} />}
          {item?.id?.channelId && <ChannelCard channelInfo={item} />}
        </Box>
      ))}
      </Stack>
  </>
  )
}

export default VideoFeed
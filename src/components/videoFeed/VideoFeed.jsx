import React from 'react'
import { Stack, Box, Typography } from '@mui/material'
import VideoCard from '../Cards/VideoCard'
import ChannelCard from '../Cards/ChannelCard'
import PlaylistCard from '../Cards/PlaylistCard'  
import VideoCardSkeleton from '../loadingPages/VideoCardSkeleton'
const VideoFeed = ({videosData}) => {
  if (!videosData?.length) {
    return (
      <Stack direction={'row'} sx={{ flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', margin: '2rem 0' }}>
        <VideoCardSkeleton/>
        <VideoCardSkeleton/>
        <VideoCardSkeleton/>
        <VideoCardSkeleton/>
        <VideoCardSkeleton/>
        <VideoCardSkeleton/>
      </Stack>
    )
  }
  return (
    <>
       <Stack direction={'row'} sx={{flexWrap:'wrap',justifyContent:'space-between',alignItems:'center',margin:'0 2rem'}}>
       {videosData.map((item, idx) => (
         <Box key={idx} style={{ color:'white',margin:'1rem 0' }}>
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
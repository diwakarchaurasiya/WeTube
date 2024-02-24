import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { fetchDataApi } from '../fetchData';
import ReactPlayer from 'react-player/lazy'
import VideoCardSkeleton from '../loadingPages/VideoCardSkeleton';
import { Box, Stack, Typography } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import VideoFeed from '../videoFeed/VideoFeed';
const VideoPlayerPage = () => {
  let { videoId } = useParams();
  let [playingVideo, setPlayingVideo] = useState([]);
  let [suggestedVideos,setSuggestedVideos ] = useState([])
  useEffect(() => {
    try {
      fetchDataApi(`videos?part=snippet,statistics&id=${videoId}`).then((data) => {
        setPlayingVideo(data.items[0])
      })
      fetchDataApi(`search?part=snippet&relatedToVideoId=${videoId}&type=video`).then((data) => {
        setSuggestedVideos(data.items)
      })
    } catch (error) {
      console.log('got a error in fetching videos' + videoId) 
    }
  }, [videoId])
  useEffect(() => {
    setPlayingVideo([]);
    setSuggestedVideos([]);
  },[videoId])
  console.log(playingVideo,suggestedVideos)

  if (!playingVideo?.snippet) return (
    < Box height='95vh'>
      <Stack flexDirection={{ xs: 'column', md: 'row' }} >
        <Box sx={{ width: '80%', height: '70vh', top: '100px', background: '#fff', margin: ' 1rem' }} className='skelton'>
        </Box>
        <Box sx={{ justifyContent: 'center', alignItems: 'center', px: { md: 2, sm: 5 }, py: 2, width: { xs: '100%' ,md:'420px'},height:'100vh',overflow:'auto'}}>
<VideoCardSkeleton/>
<VideoCardSkeleton/>
<VideoCardSkeleton/>
<VideoCardSkeleton/>
<VideoCardSkeleton/>
<VideoCardSkeleton/>
<VideoCardSkeleton/>
        </Box>
    </Stack>
  
  </Box>
  )
  let { snippet: { title, channelId, channelTitle }, statistics: { viewCount, likeCount } } = playingVideo;

  return (
      <>
      <Box>
      <Stack flexDirection={{ xs: 'column',md:'row'} }>
        <Box flex={1} sx={{padding:{md:'1rem 0 0 1rem',xs:'0'}}} > 
          <Box sx={{ width: '100%', top: '90px'}}>
          <ReactPlayer url={`https://www.youtube.com/watch?v=${videoId}`} className='react-player' playing={true}  loop={true} controls={true} style={{border:'1px solid #e0e0e0'}}/>
            <Typography  variant='h5' sx={{color:'#0e0e0e',fontWeight:'bold',p:2}}>
              {title}
            </Typography>
            <Stack direction={{ md:'row',xs:'column'}} justifyContent={{md:'space-between',xs:'center'}} py={2} px={1}
            >
              <Link to={`/channel/${channelId}`}>
                <Typography  sx={{fontSize:'30px',px:4}}>
                  {channelTitle}<CheckCircle sx={{fontSize:'12px', color:'gray',pl:'5px'}}/>
                </Typography>
                </Link>
                <Stack  direction={{xs:'column',md:'row'}} sx={{alignItems:'center'}}>
                  <Typography variant='body1' sx={{opacity:'0.8',paddingX:'5rem'}}>
                    {parseInt(viewCount).toLocaleString()} : views
                  </Typography>
                  <Typography sx={{opacity:'0.8'}}>
                    {parseInt(likeCount).toLocaleString()} : Likes
                  </Typography>
                </Stack>
            </Stack>
          </Box>
        </Box>
        <Box sx={{ justifyContent: 'center', alignItems: 'center', px: { md: 2, sm: 5 },height:'100vh', py: 2, width: { xs: '100%' ,md:'370px'},overflow:'auto'}}>
      <VideoFeed videosData={suggestedVideos} direction='column' selectedCategory={'Suggested'}/>
        </Box>
        </Stack>
    </Box>
      </>
    )
}

export default VideoPlayerPage
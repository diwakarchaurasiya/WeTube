import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {CheckCircle} from '@mui/icons-material'
import { demoThumbnailUrl, demoChannelUrl, demoVideoUrl, demoChannelTitle, demoVideoTitle, demoProfilePicture } from '../constantData'
const VideoCard = ({ video: { id: { videoId }, snippet } }) => {
  return (
      <>
          <Card sx={{ width: { md: "358px", xs: '100%' }, boxShadow: '0',background: '#fff'}}>
              <Link to={videoId?`/video/${videoId}`:demoVideoUrl}>
                  <CardMedia
                      image={snippet?.thumbnails?.high?.url||demoThumbnailUrl}
                      alt={snippet?.title}
                      sx={{ width: '100%', height:180,borderRadius:{md:'8px',sx:'0px'}}}
                  /> 
              <CardContent 
                      sx={{  width: 'auto', height:{md:"5rem",xs:"auto"}, border: 'none'}}>
                      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                          <Typography variant='subtitle1' color='#0e0e0'>
                              {(snippet?.title+ ' || Diwakar Chaurasiya(Fullstack MERN Developer,)').slice(0,60)+'...'|| demoVideoTitle.slice(0,60)+'...'}
                          </Typography>
                      </Link>
                      <Link to={snippet?.channelId ? `/channel/${snippet.channelId}` : demoChannelUrl}>
                          <Typography variant='subtitle2' fontWeight='bold'color='gray'>
                              {snippet?.channelTitle || demoChannelTitle}
                              <CheckCircle sx={{fontSize:12, color:'gray',ml:'3px'}}/>
                          </Typography>
                          <Typography variant='subtitle2' fontWeight='light' color='gray'
                          fontSize='10px'>
                              {snippet?.publishedAt.slice(0,10) || demoChannelTitle}
                          </Typography>
                      </Link>
                      </CardContent>
                </Link>
          </Card>
      </>
  )
}

export default VideoCard
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {VideoFeed,VideoPlayerPage,ChannelDets,Home,SearchFeed, InvalidUrl, Navbar} from './index.js'
import { Box } from '@mui/material'
function App() {

  return (
    <>
      <BrowserRouter>
        <Box>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/video/:videoId' element={<VideoPlayerPage/>}/>
          <Route path='/channel/:channelId' element={<ChannelDets/>} />
          <Route path='/search/:query'  element={<SearchFeed/>} />
          <Route path='*'  element={<InvalidUrl/>} />
          </Routes>
          </Box>
      </BrowserRouter>
    </>
  )
}

export default App

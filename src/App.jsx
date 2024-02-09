import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {VideoFeed,VideoPlayerPage,ChannelDets,WeTube,SearchFeed, InvalidUrl, Navbar} from './index.js'
function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<WeTube/>} />
          <Route path='/video/:videoId' element={<VideoPlayerPage/>}/>
          <Route path='/channel/:channelId' element={<ChannelDets/>} />
          <Route path='/search/:query'  element={<SearchFeed/>} />
          <Route path='*'  element={<InvalidUrl/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

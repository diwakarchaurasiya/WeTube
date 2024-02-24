import { Box,Stack } from '@mui/material'
import React from 'react'
import SearchBar from './SearchBar'
import { Link } from 'react-router-dom'
import { demoProfilePicture } from '../../constantData'
const Navbar = () => {
  return (
    <>
          <Stack direction={{ xs: 'column', sm: 'row' }} alignItems='center' sx={{
        position: 'sticky', background: "#0e0e0e", top: 0, justifyContent: 'space-evenly',width:'100%' ,boxShadow: '0px -80px 100px #000', zIndex:10,padding:'.5rem 0'
      }}>
              <Link to='/'>
              <img width={50} src='https://www.youtube.com/s/desktop/d133835b/img/favicon_32x32.png' alt='logo' />
              </Link>
              <SearchBar />
        </Stack>  
    </>
  )
}

export default Navbar
import { Box,Stack } from '@mui/material'
import React from 'react'
import SearchBar from './SearchBar'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
          <Stack direction="row" style={{ alignItems: 'center', justifyContent: 'space-between',flexWrap:'wrap', position:'sticky',zIndex:10,padding:' .5rem 5rem', background:'#0e0e0e'}}>
              <Link to='/'>
              <img width={50} src='https://www.youtube.com/s/desktop/d133835b/img/favicon_32x32.png' alt='logo' />
              </Link>
              <SearchBar />
              <img width={50} style={{borderRadius:'50%',border:'5px solid white'}}
              src='https://musicplayerby-diwakar.netlify.app/singerImage.jpg' alt='user-img' />
        </Stack>  
    </>
  )
}

export default Navbar
import React from 'react'
import { categories } from '../../constantData'
import {Stack,Box} from '@mui/material'
const SideBar = () => {
  return (
    <>
      <Stack direction='row' sx={{ overflowY: "auto", height: { sx: "auto", md: '85vh' }, flexDirection: { md: 'column', xs: 'auto' },position:{xs:'sticky'}  }}
        >
      {categories.map((cat) => {
        return (
          <button style={{
            padding: '.5rem 0', display: 'flex', alignItems:'center', background: 'transparent',justifyContent:'center', border: '2px solid gray', margin: '5px', outline: 'none', borderRadius: '5px'
          }} key={cat.name} className='category-btn'>
            <span style={{color:'red',marginRight:'1rem',}}>{cat.icon}</span>
            <span>{ cat.name}</span>
          </button>
        )
      })}
      </Stack>
    </>
  )
}

export default SideBar
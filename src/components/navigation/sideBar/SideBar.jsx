import React from 'react'
import { categories } from '../../constantData'
import {Stack,Box} from '@mui/material'
const SideBar = ({selectedCategory,setSelectedCategory}) => {
  return (
    <>
      <Stack direction={'row'} sx={{ overflowY: "auto", height: { sx: "auto", md: '85vh' }, flexDirection: { md: 'column', xs: 'auto' },position:'relative'  }}
        >
      {categories.map((cate) => {
        return (
          <button style={{
            display: 'flex', alignItems: 'center',
             background: selectedCategory === cate.name && '#FC1503', border: '1px solid white', margin: '5px', outline: 'none', borderRadius: '10px',fontSize:'1.1rem'
          }} key={cate.name} className='category-btn' onClick={()=>{setSelectedCategory(cate.name)}}>
            <span style={{color:cate.name===selectedCategory? "white":"#FC1503",marginRight:'1rem',}}>{cate.icon}</span>
            <span style={{color:cate.name===selectedCategory && "white"}}>{ cate.name}</span>
          </button>
        )
      })}
      </Stack>
    </>
  )
}

export default SideBar
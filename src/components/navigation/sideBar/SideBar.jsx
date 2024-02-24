import React from 'react'
import { categories } from '../../constantData'
import {Stack,Box} from '@mui/material'
const SideBar = ({selectedCategory,setSelectedCategory}) => {
  return (
    <>
      <Stack direction={{ md: 'column', xs: 'row' }} sx={{overflowY: "scroll", height: { xs: "auto", md: '85vh'} ,padding:'0 1rem' ,borderRight:{md:'2px solid #d2d4d2',xs:'none'}}}
        >
      {categories.map((category) => {
        return (
          <button style={{
            display: 'flex', alignItems: 'center',
             background: selectedCategory === category.name && '#FC1503', border: '1px solid white', margin: '5px', outline: 'none', borderRadius: '10px',fontSize:'1.1rem'
          }} key={category.name} className='category-btn' onClick={()=>{setSelectedCategory(category.name)}}>
            <span style={{color:category.name===selectedCategory? "white":"#FC1503",marginRight:'1rem',}}>{category.icon}</span>
            <span style={{color:category.name===selectedCategory && "white"}}>{ category.name}</span>
          </button>
        )
      })}
      </Stack>
    </>
  )
}

export default SideBar
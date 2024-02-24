import React, { useState } from 'react'
import { Paper, Stack ,Link,IconButton, Box} from '@mui/material'
import { Search } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
Search
// function toggle () {
//   let element = document.getElementById('inputField');
//   element.classList.toggle("inputField");
// }
const SearchBar = () => {
  let [query, setQuery] = useState("")
  let navigate = useNavigate();
  let handleSubmit = (e) => {
    e.preventDefault();
    if (query) {
      navigate(`search/${query}`);
      setQuery('');
    }
  }
  return (
    <>
      <Paper component='form' sx={{ borderRadius: 10,pl:2, mr:{sm:5},
      border: '1px solid gray'
      }} onSubmit={handleSubmit}>
          <input type="text" name="" id="inputField"
            autoFocus={true}
           className='search-bar'
           value={query}
           placeholder='Search...'
          onChange={(data) => { setQuery(data.target.value) }}
          style={{ border: 'none', width: 'auto', outline: 'none',width:'15rem'}}
          />
        <Link to={`channel/${query}`}>
         <IconButton>
           <Search type='submit' onClick={handleSubmit} sx={{color:'red'}}/>
         </IconButton>
         </Link>
      </Paper>
    </>
  )
}

export default SearchBar
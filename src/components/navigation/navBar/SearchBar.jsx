import React, { useState } from 'react'
import { Paper, Stack ,Link,IconButton} from '@mui/material'
import { Padding, Search } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
Search
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
          <input type="text" name="" id=""
            autoFocus={true}
           className='search-bar'
           value={query}
           placeholder='Search...'
          onChange={(data) => { setQuery(data.target.value) }}
          style={{border:'none',width:'15rem',outline:'none'}}
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
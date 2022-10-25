import SearchModal from "./SearchModal";
import React, {useState, useEffect} from 'react';



function Search(props){
    const [show, setShow] = useState(false)
    return(
        <div className='search'>
          <button onClick = {()=>setShow(true)}>
            Лупа
          </button>
          <SearchModal onClose={()=>setShow(false)} show = {show}/>
      </div>
    )
}

export default Search;
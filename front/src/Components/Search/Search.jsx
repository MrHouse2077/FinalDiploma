import SearchModal from "./SearchModal";
import React, {useState, useEffect} from 'react';
import Styles from "./Search.module.scss";




function Search(props){
    const [show, setShow] = useState(false)
    return(
        <div className= {Styles.Search}>
          <button onClick = {()=>setShow(true)}>
            Лупа
          </button>
          <SearchModal onClose={()=>setShow(false)} show = {show}/>
      </div>
    )
}

export default Search;
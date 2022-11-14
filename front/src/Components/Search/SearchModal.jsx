import React, {useState, useEffect, useCallback} from 'react';
import Styles from "./Search.module.scss";
import { NavLink } from 'react-router-dom';

function SearchModal(props){
   let [dataSearch, setSearch] = useState({
      fieldSearch: {
         value: "",
      },
   });
   if(!props.show){
      return null
   }
   function onSearch(evt){
      let copy = Object.assign({}, dataSearch);
      copy.fieldSearch.value = evt.target.value;
      setSearch(copy);
   }
    return(
        <div className={Styles.SearchModal} onClick = {props.onClose}>
            <div className = {Styles.ModalContent} onClick = {e=>e.stopPropagation()}>
               <button type="button" class="close" onClick = {props.onClose}>
                  <span aria-hidden="true">×</span>
               </button>
               <div className = {Styles.ModalBody}>
                  <form>
                        <input type="text" onChange={(evt)=>{onSearch(evt)}} onBlur={(evt)=>{onSearch(evt)}} placeholder="Search here..."/>
                        <NavLink to={"/search/"+dataSearch.fieldSearch.value}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                           <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                        </svg>
                        </NavLink>

                  </form>
               </div>
            </div>
      </div>
    )
}



export default SearchModal;
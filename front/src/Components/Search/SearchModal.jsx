import React, {useState, useEffect, useCallback} from 'react';
import Styles from "./Search.module.scss";

function SearchModal(props){

   if(!props.show){
      return null
   }

   // const { OnClose } = props;
   // const closeOnEscapeKeyDown = useCallback((e) => {
   //    if ((e.charCode || e.keyCode) === 27) {
   //       OnClose();
   // }
   // }, [OnClose]);

   // useEffect(() => {
   //    document.body.addEventListener("keydown", closeOnEscapeKeyDown);
   //    return function cleanup() {
   //       document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
   //    };
   // }, [closeOnEscapeKeyDown]);

    return(
        <div className={Styles.SearchModal} onClick = {props.onClose}>
            <div className = {Styles.ModalContent} onClick = {e=>e.stopPropagation()}>
               <button type="button" class="close" onClick = {props.onClose}>
                  <span aria-hidden="true">×</span>
               </button>
               <div className = {Styles.ModalBody}>
                  
                  <form>
                        <input type="text" placeholder="Search here..."/>
                        <button>
                           Лупа
                           <i class="fa fa-search"></i>
                        </button>
                  </form>
               </div>
            </div>
         
         
         
         
         
         {/* <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
         </button>
         <div class="modal-dialog" role="document">
            <div class="modal-content">
               
            </div>
         </div> */}
      </div>
    )
}



export default SearchModal;
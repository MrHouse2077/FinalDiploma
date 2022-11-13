import Styles from './Pagination.module.scss';
import classNames from 'classnames';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro'

function Pagination(props){
    let quantity = props.quantity;
    let activePage = props.activePage;
    let count = quantity-activePage;

    let [pagination, setPagination] = useState({
            quantity : quantity,
            activePage : activePage,
            count : count,
            pointedPage: null,
        }
    );

    function backClick(){
        console.log(pagination.activePage);
        let copy = Object.assign({}, pagination);
        copy.activePage--;
        copy.count = copy.quantity - copy.activePage;
        setPagination(copy);
    }

    function nextCkick(){
        let copy = Object.assign({}, pagination);
        copy.activePage++;
        copy.count = copy.quantity - copy.activePage;
        setPagination(copy);
    }

    function changePage(evt){
        let copy = Object.assign({}, pagination);
        copy.activePage = Number(evt.target.getAttribute("data-page"));
        copy.count = copy.quantity - copy.activePage;
        setPagination(copy);
        console.log(evt.target.getAttribute("data-page"));
    }

    function pageNumberLight(evt){
        let copy = Object.assign({}, pagination);
        copy.pointedPage = evt.target.getAttribute("data-page");
        setPagination(copy);
  
    }
    function pageNumberNotLight(){
        let copy = Object.assign({}, pagination);
        copy.pointedPage = null;
        setPagination(copy);
    }
   
    function countQuanyityPages(pagination){
        let array = [];
        console.log(pagination);
        if(pagination.quantity >1 && pagination.quantity <=3){
            for(let i = 1; i<=pagination.quantity; i++){
                array.push(i);}
            return array;
        }
        if(pagination.quantity === 4){
            if(pagination.count <2){
                for(let i = 2; i<=pagination.quantity; i++){
                    array.push(i);}
                return array;
            }
            for(let i = 1; i<pagination.quantity; i++){
                array.push(i);}
            return array;
        }
        if(pagination.quantity > 4){
            if(pagination.activePage < 3){
                for(let i = 1; i<=3; i++){
                    array.push(i);}
                return array;
            }
            if(pagination.activePage === 3){
                for(let i = pagination.activePage-1; i<=pagination.activePage+1; i++){
                array.push(i);}
                return array;
            }
            if(pagination.count <= 2 && pagination.activePage != 3){
                for(let i = pagination.activePage+(pagination.count-2); i<=pagination.quantity; i++){
                array.push(i);}
                return array;
            }
            for(let i = pagination.activePage-1; i<=pagination.activePage+1; i++){
                array.push(i);}
            return array;
        }
        return array;
    }
    
    return(
        <div className={Styles.Pagination}>
            {
                (countQuanyityPages(pagination).length === 0)? "":
                        
                    (pagination.activePage <3 || pagination.quantity <= 3)?"":

                    <div className={Styles.next_prev_wrap}>
                        <div 
                            onMouseOver = {pageNumberLight}
                            onMouseOut = {pageNumberNotLight}
                            key = {1}
                            data-page = {1}
                            className={classNames(Styles.page_number,
                                (Number(pagination.pointedPage) == 1 )?Styles.pointed_page:""
                                )}
                            onClick = {changePage}
                        >
                            1
                        </div>

                        <div
                            data-page = {"prev"}
                            onMouseOver = {pageNumberLight}
                            onMouseOut = {pageNumberNotLight}
                            key = {"prev"}
                            className={classNames(Styles.page_number,
                                (pagination.pointedPage == "prev" )?Styles.pointed_page:""
                                )}
                            onClick = {backClick}
                        >
                            <FontAwesomeIcon icon={solid('arrow-left')} />
                        </div>
                    </div>
            }
            {
                countQuanyityPages(pagination).map((item)=>{
                    return(

                            <div 
                                onMouseOver = {pageNumberLight}
                                onMouseOut = {pageNumberNotLight}
                                key = {item.toString()}
                                data-page = {item}
                                className={classNames(Styles.page_number, (item == pagination.activePage)?Styles.active:"",
                                    (Number(pagination.pointedPage) == item )?Styles.pointed_page:""
                                )}
                                onClick = {changePage}


                            >
                                {item}
                            </div>
                        )
                })           
            }
            {            
                (pagination.quantity > 3)
                ?
                    (pagination.count > 2)
                    ?
                        <div className={Styles.next_prev_wrap}>
                                <div 
                                    onMouseOver = {pageNumberLight}
                                    onMouseOut = {pageNumberNotLight}
                                    data-page = {"next"}
                                    key = {"next"} 
                                    className={classNames(Styles.page_number,
                                        (pagination.pointedPage == "next" )?Styles.pointed_page:""
                                        )}
                                    onClick = {nextCkick}
                                >
                                    <FontAwesomeIcon icon={solid('arrow-right')} />
                                </div>

                                <div 
                                    onMouseOver = {pageNumberLight}
                                    onMouseOut = {pageNumberNotLight}
                                    data-page = {quantity}
                                    className={classNames(Styles.page_number,
                                        (Number(pagination.pointedPage) == quantity )?Styles.pointed_page:""
                                        )}
                                    onClick = {changePage}
                                >
                                    {quantity}
                                </div>
                        </div>

                    :
                        (pagination.quantity <= 5 && pagination.count >= 2)
                        ?
                            <div className={Styles.next_prev_wrap}>

                                    <div 
                                        onMouseOver = {pageNumberLight}
                                        onMouseOut = {pageNumberNotLight}
                                        data-page = {"next"}
                                        key = {"next"} 
                                        className={classNames(Styles.page_number,
                                            (pagination.pointedPage == "next" )?Styles.pointed_page:""
                                            )}
                                        onClick = {nextCkick}
                                    >
                                        <FontAwesomeIcon icon={solid('arrow-right')} />
                                    </div>

                                    <div
                                        onMouseOver = {pageNumberLight}
                                        onMouseOut = {pageNumberNotLight}
                                        data-page = {quantity}
                                        key = {quantity.toString()} 
                                        className={classNames(Styles.page_number,
                                            (Number(pagination.pointedPage) == quantity )?Styles.pointed_page:""
                                            )}
                                        onClick = {changePage}
                                    >
                                        {quantity}
                                    </div>

                            </div>
                        :
                            ""
                :
                ""
            
            }
        </div>
    );
}
export default Pagination;
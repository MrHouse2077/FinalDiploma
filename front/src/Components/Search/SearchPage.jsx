import React, {useState, useEffect, useCallback} from 'react';
import { useParams } from 'react-router-dom';
import DefaultLayout from '../Layouts/DefaultLayout/DefaultLayout';
import Requests from '../Requests';
import Styles from "./Search.module.scss";

function SearchPage(props){
    let params = useParams();
    let data = {"msg": params.request, "mode": "all"};
    let [dataRezSearch, setRezSearch] = useState({
        rezSearch: [],
        loader: true,
    });
    function renderRezalt(serverRequest){
        if(serverRequest.code == 200){
            let copy = Object.assign([], dataRezSearch);
            copy.rezSearch = serverRequest.data;
            copy.loader = false;
            setRezSearch(copy);
        }
    }
    function fuckooisj(){
        console.log(dataRezSearch);
    }
    useEffect(()=>{
        Requests({
                    method: 'post', 
                    url: '/search',
                    data: data,
                    callback: renderRezalt
                });
    }, []);
    return (
        <div className={Styles.SearchPage}>
            <div className='wrap'>
                <aside>
                    <div>aside</div>
                </aside>
                <div className={Styles.searchRez}>
                        {(dataRezSearch.loader)? "Loading....": ""}
                        {
                                    (!dataRezSearch.loader)?
                                            (dataRezSearch.rezSearch === null)?
                                            "Not found for "+params.request 
                                            : dataRezSearch.rezSearch.map((arrElement, index)=>
                                                <div className={Styles.categorySer} key={index}>
                                                    <h3>{arrElement[0]}</h3>
                                                    <div className={Styles.elements}>
                                                    {arrElement[1].map((element)=>
                                                    <div key={element.id} className={Styles.element}>
                                                        <h3>{element.name}</h3>
                                                        <p>{(element.price != undefined && element.price != null)? element.price+" руб." : ""}</p>
                                                    </div>
                                                        
                                                    )}
                                                    </div>
                                                </div>
                                        )
                                    : "rjytw"
                                }
                </div>
            </div>
        </div>
    );
}
export default SearchPage;
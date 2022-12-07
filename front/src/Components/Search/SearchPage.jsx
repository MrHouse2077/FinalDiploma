import React, {useState, useEffect, useCallback} from 'react';
import { useParams } from 'react-router-dom';
import DefaultLayout from '../Layouts/DefaultLayout/DefaultLayout';
import Loader from '../Loader/Loader';
import Product from '../Pages/Shop/Pages/Product/Product';
import Requests from '../Requests';
import Element from './Element';
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
    useEffect(()=>{
        Requests({
                    method: 'post', 
                    url: '/search',
                    data: data,
                    callback: renderRezalt
                });
    }, []);
    return (
        <div>
            <DefaultLayout title="Search">
                <div className={Styles.SearchPage}>
                    <div className='wrap'>
                        <div className={Styles.searchRez}>
                                {(dataRezSearch.loader)? <Loader className={Styles.Loader} /> : ""}
                                {
                                            (!dataRezSearch.loader)?
                                                    (dataRezSearch.rezSearch.length == 0)?
                                                    "Not found for "+params.request 
                                                    : dataRezSearch.rezSearch.map((arrElement, index)=>
                                                        <div className={Styles.categorySer} key={index}>
                                                            <h3>{arrElement[0]}</h3>
                                                            <div className={Styles.elements}>
                                                            { arrElement[1].map((element)=>
                                                                (arrElement[0]=="products")?
                                                                <div key={element.id} className={Styles.element}>
                                                                    <Product to={'/shop/'+element.id} product={element}/>
                                                                </div>
                                                                : <div key={element.id} className={Styles.element}>
                                                                    <Element to={'/blog/'+element.id} product={element} />
                                                                  </div>  
                                                            )}
                                                            </div>
                                                        </div>
                                                )
                                            : ""
                                        }
                        </div>
                    </div>
                </div>
            </DefaultLayout>
        </div>
    );
}
export default SearchPage;
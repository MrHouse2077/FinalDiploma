import { useState } from "react";
import { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import DefaultLayout from "../../../../Layouts/DefaultLayout/DefaultLayout";
import Loader from "../../../../Loader/Loader";
import Requests from "../../../../Requests";
import Pagination from "../../../../UI/Pagination/Pagination";
import Product from "../Product/Product";
import Styles from './ListProducts.module.scss';
import Sorting from "../../../../Sorting/Sorting";
function ListProducts(){

    let [products, setProducts] = useState({
        products: [],
        loader: true,
        filter:{
            minPriceProduct: 0,
            maxPriceProduct: 300000,
            secelctMinPriceProduct: 0,
            secelctMaxPriceProduct: 300000,
        },
        sortBy: "priceUp",
        productsInPage: 10,
        activePage: 1,
    });

    function chengeStatusFilter(secelctMinPrice, secelctMaxPrice){
        let copy = Object.assign([], products);
        copy.filter.secelctMinPriceProduct = secelctMinPrice;
        copy.filter.secelctMaxPriceProduct = secelctMaxPrice;
        setProducts(copy);
    }

    function onFilterResult(){

        let copy = Object.assign([], products);
        console.log(copy.sortBy);
        copy.loader = true;
        setProducts(copy);

        Requests({
            method: 'post', 
            url: '/products',
            data: {filter: products.filter},
            callback:renderProducts 
        });
    }


    useEffect(()=>{
        Requests({
                    method: 'post', 
                    url: '/products',
                    callback:renderProducts 
                });
    }, []);

    function renderProducts(serverRequest){
        if(serverRequest.code == 200){

            
            let copy = Object.assign([], products);
            copy.products = serverRequest.data
            copy.loader = false;
            SortProducts(copy);
            setProducts(copy);
            
        }
    }
    function getSortingMethod(method){
        let copy = Object.assign([], products);
        copy.sortBy = method;
        copy.products = SortProducts(copy);
        setProducts(copy);
    }
    function SortProducts(data){
        let copy = Object.assign([], data);
        let arr;
        switch(copy.sortBy){
                case 'priceUp':
                         arr = copy.products.sort((a, b) => a.price - b.price);
                    break;
                case 'priceDown':
                         arr = copy.products.sort((a, b) => b.price - a.price);
                    break;
                case 'alphabetUp':
                         arr = copy.products.sort((a, b) => a.name > b.name ? 1 : -1,);
                    break;
                case 'alphabetDown':
                         arr = copy.products.sort((a, b) => a.name > b.name ? -1 : 1,);
                    break;
                default:
                    console.log('error, wrong sort method!');
                    break;
        }
        copy.products = arr;
        return arr;
        
    }

    return (
        <div>
            

            <DefaultLayout filterShow='true' 
            filterParams={products.filter} 
            chengeStatusFilter={chengeStatusFilter}
            onFilterResult={onFilterResult}
            >

                {(products.loader)? <Loader/>: ''}

                <div>
                    {
                        (!products.loader)?
                        <div>    
                           
                            <div className={Styles.Sorting}>
                            <Sorting active={products.sortBy} getSortingMethod={getSortingMethod}/>
                            </div>
                            <div className={Styles.products}>
                                
                                {   
                                    
                                    products.products.map((product)=>
                                        <div key={product.id} className={Styles.product}>
                                            <Product to={'/shop/'+product.id} product={product}/>
                                        </div>
                                    )
                                }
                                {
                                    /*
                                        1. сделать вывод карточек товаров через отдельные компоненты
                                        2. постраничную навигацию

                                    {
    Статьи: 10
    номер страницы: 1
    }

    {
    Статьи: []   
    номер выбранной страницы: 1
    сколько статей в базе: 2500,
    всего страниц: 556
    }

    1 2 3 4 ... 10
                                
                                

                                    */

                                
                                }
                            </div>
                        </div>
                        :''
                    }
                    
                </div>
                {/* <div className={Styles.product}>
                    <Product /> 
                </div> */}
                
                {/* <Pagination quantity={quantity} activePage={activePage}/> */}

            </DefaultLayout>

            
        </div>
    );
}

export default ListProducts;
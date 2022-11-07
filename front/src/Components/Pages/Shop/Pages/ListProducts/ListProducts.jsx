import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DefaultLayout from "../../../../Layouts/DefaultLayout/DefaultLayout";
import Requests from "../../../../Requests";
import Styles from './ListProducts.module.scss';

function ListProducts(){

/*
    {
                "id": 1,
                "name": "Название 1",
                "description": null,
                "main_photo": null,
                "price": 41265,
                "count": 1,
                "old_price": null,
                "category_id": 2,
                "category_name": "Категория 2",
                "created_at": null,
                "updated_at": null
            }
*/

    let [products, setProducts] = useState({
        products: [],
        loader: true,
        filter:{
            minPriceProduct: 0,
            maxPriceProduct: 300000,
            secelctPriceProduct: 0,
        }
        
    });

    function chengeStatusFilter(secelctPriceProduct){
        let copy = Object.assign([], products);
        copy.filter.secelctPriceProduct = secelctPriceProduct;
        setProducts(copy);
    }

    function onFilterResult(){

        let copy = Object.assign([], products);
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
            setProducts(copy);
            maxAndMinPrice(copy);
        }
    }


    function maxAndMinPrice(products){
        let max = 0;
        products.products.forEach(product => {
            if(product.price > max){
                max = product.price;
            }
        });

        let min = 0;
        products.products.forEach(product => {
            if(product.price < min){
                min = product.price;
            }
        });
        

        let copy = Object.assign([], products);
        //copy.filter.minPriceProduct = min;
        //copy.filter.maxPriceProduct = max;
        //copy.filter.secelctPriceProduct = max;
        setProducts(copy);
    }

    return (
        <div>
            

            <DefaultLayout filterShow='true' 
            filterParams={products.filter} 
            chengeStatusFilter={chengeStatusFilter}
            onFilterResult={onFilterResult}
            >

                {(products.loader)? "Loading....": ''}

                <div>
                    {
                        (!products.loader)?

                        <div className={Styles.products}>
                            {
                                products.products.map((product)=>
                                    <div key={product.id} className={Styles.product}>
                                        <h3>{product.name }</h3>
                                        <p>{product.price} руб.</p>
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

                        :''
                    }
                </div>

            </DefaultLayout>

            
        </div>
    );
}

export default ListProducts;
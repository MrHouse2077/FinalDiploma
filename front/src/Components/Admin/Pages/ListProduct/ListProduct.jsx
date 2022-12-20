import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useState } from "react";

import Requests from "../../.././Requests";


import AdminTemplate from "../AdminTemplate/AdminTemplate";
import Styles from "./ListProduct.module.scss";


function ListProduct() {

    let [products, setProducts] = useState({
        products:[],
        loader: true,
    });

    useEffect(()=>{
        Requests({
                    method: 'post', 
                    url: '/listProducts',
                    callback:renderProducts,
                });
    }, []);

    function renderProducts(serverRequest){
        if(serverRequest.code == 200){

            
            let copy = Object.assign([], products);
            copy.products = serverRequest.data;
            copy.loader = false;
            setProducts(copy);
        }
    }





    return (
        <div>
            <AdminTemplate></AdminTemplate>
            <div className={Styles.ListProduct}>
                <div className="page-wrapper">
                    <div className="page-content">
                        <div className="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
                            <div className="card">
                                <div className="card-header py-3">
                                    <h6 className="mb-0">Список товаров</h6>
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-12 col-lg-8 d-flex">
                                            <div className="card border shadow-none w-100">
                                                <div className="card-body">
                                                    <div className="table-responsive">
                                                        <table className="table align-middle">
                                                            <thead className="table-light">
                                                                <tr>
                                                                    <th><input className="form-check-input" type="checkbox"/></th>
                                                                    <th>ID</th>
                                                                    <th>Название</th>
                                                                    <th>Описание</th>
                                                                    
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {/* {
                                                                    categories.categories.map((category)=>
                                                                        <tr>
                                                                            <td><input className="form-check-input" type="checkbox"/></td>
                                                                            <td>{category.id}</td>
                                                                            <td>{category.name}</td>
                                                                            <td>{category.description}</td>
                                                                            
                                                                        </tr>
                                                                    )
                                                                } */}

                                                                
                                                                
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
  }
  
  export default ListProduct;
  
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useState } from "react";

import Requests from "../../.././Requests";
import classNames from 'classnames';
import Styles from "./AddCategory.module.scss";
import Loader from "../../../Loader/Loader";



function AddCategory(){

    let [categories, setCategories] = useState({
        categories:[],
        loader: true,
    })

    let [bgcFonApp, setbgcFonApp] = useState(
        {
            activeBGC: 0,
            bgc: [
                {msg: "Красный", code: "bgc1"},
                {msg: "Синий", code: "bgc2"},
            ]
        }
    );

    function onChangeActiveBGC(indexBGC){
        localStorage.setItem('bgc', bgcFonApp.bgc[indexBGC].code);
    }



    useEffect(()=>{
        Requests({
                    method: 'get', 
                    url: '/categories',
                    callback:renderCategories,
                });
    }, []);

    function renderCategories(serverRequest){
        if(serverRequest.code == 200){

            
            let copy = Object.assign([], categories);
            copy.categories = serverRequest.data
            copy.loader = false;
            setCategories(copy);
        }
    }



    

    return (

        <div>
            {(categories.loader)? <Loader/>: ''}
            <div>

                {
                    (!categories.loader)?

                    <div className={Styles.AddCategory}>AddCategory

                        <div class="page-wrapper">
                        <div class="page-content">

                            <div class="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
                                <div class="breadcrumb-title pe-3">eCommerce</div>
                                <div class="ps-3">
                                    <nav aria-label="breadcrumb">
                                        <ol class="breadcrumb mb-0 p-0">
                                            <li class="breadcrumb-item"><a href="javascript:;"><i class="bx bx-home-alt"></i></a>
                                            </li>
                                            <li class="breadcrumb-item active" aria-current="page">Добавить новую категорию</li>
                                        </ol>
                                    </nav>
                                </div>
                                <div class="ms-auto">
                                    <div class="btn-group">
                                        <button type="button" class="btn btn-light">Settings</button>
                                        <button type="button" class="btn btn-light dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown">	<span class="visually-hidden">Фон</span>
                                        </button>
                                        <div class="dropdown-menu dropdown-menu-right dropdown-menu-lg-end">
                                            {
                                                bgcFonApp.bgc.map((el, index)=>
                                                
                                                    <span className="dropdown-item" key={index} onClick={
                                                        ()=>{
                                                            onChangeActiveBGC(index)
                                                        }
                                                    }>
                                                        {el.msg}
                                                    </span>
                                                )
                                            }
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div class="card">
                                <div class="card-header py-3">
                                    <h6 class="mb-0">Add Product Category</h6>
                                </div>
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-12">
                                        </div>
                                        <div class="col-12 col-lg-4 d-flex">
                                            <div class="card border shadow-none w-100">
                                                <div class="card-body">
                                                    <form class="row g-3" method="POST" action="/admin/add-category">
                                                        <input type="hidden" name="_token" value="Yq9Rj2hU4bD7sxSmhZj86jOUHbILCFT108eeSQMf"/>                    
                                                        <div class="col-12">
                                                            <label class="form-label">Название</label>
                                                            <input type="text" class="form-control" name="name" placeholder="Category name"/>
                                                        </div>
                                                
                                                        <div class="col-12">
                                                            <label class="form-label">Parent</label>
                                                            <select class="form-select">
                                                                <option>Fashion</option>
                                                                <option>Electronics</option>
                                                                <option>Furniture</option>
                                                                <option>Sports</option>
                                                            </select> 
                                                        </div>

                                                        <div class="col-12">
                                                            <label class="form-label">Описание</label>
                                                            <textarea class="form-control" rows="3" cols="3" placeholder="Product Description" name="description"></textarea>
                                                        </div>
                                                        <div class="col-12">
                                                            <div class="d-grid">
                                                                <button class="btn btn-primary">Add Category</button>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12 col-lg-8 d-flex">
                                            <div class="card border shadow-none w-100">
                                                <div class="card-body">
                                                <div class="table-responsive">
                                                    <table class="table align-middle">
                                                        <thead class="table-light">
                                                            <tr>
                                                                <th><input class="form-check-input" type="checkbox"/></th>
                                                                <th>ID</th>
                                                                <th>Название</th>
                                                                <th>Описание</th>
                                                                <th>Товаров</th>
                                                                <th></th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {
                                                                categories.categories.map((category)=>
                                                                    <tr>
                                                                        <td><input class="form-check-input" type="checkbox"/></td>
                                                                        <td>{category.id}</td>
                                                                        <td>{category.name}</td>
                                                                        <td>{category.description}</td>
                                                                        <td>{category.count}</td>
                                                                        {/* <td>
                                                                            <div class="d-flex align-items-center gap-3 fs-6">
                                                                                <a href="javascript:;" class="text-primary" data-bs-toggle="tooltip" data-bs-placement="bottom" title="" data-bs-original-title="View detail" aria-label="Views"><i class="bi bi-eye-fill"></i></a>
                                                                                <a href="javascript:;" class="text-warning" data-bs-toggle="tooltip" data-bs-placement="bottom" title="" data-bs-original-title="Edit info" aria-label="Edit"><i class="bi bi-pencil-fill"></i></a>
                                                                                <a href="javascript:;" class="text-danger on_delete_category" data-id-category="1" data-bs-toggle="modal" data-bs-target="#deleteCategoryModal" title="" data-bs-original-title="Delete" aria-label="Delete"><i class="bi bi-trash-fill"></i></a>
                                                                            </div>
                                                                        </td> */}
                                                                    </tr>
                                                                )
                                                            }

                                                            
                                                            
                                                        </tbody>
                                                    </table>
                                                </div>
                                                <nav class="float-end mt-0" aria-label="Page navigation">
                                                    <ul class="pagination">
                                                        <li class="page-item disabled"><a class="page-link" href="#">Previous</a></li>
                                                        <li class="page-item active"><a class="page-link" href="#">1</a></li>
                                                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                                                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                                                        <li class="page-item"><a class="page-link" href="#">Next</a></li>
                                                    </ul>
                                                </nav>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                        </div>
                    </div>
                    :''
                }
            </div>
        </div>
    );
}

export default AddCategory;
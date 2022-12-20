import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useState } from "react";

import Requests from "../../.././Requests";
import classNames from 'classnames';
import Styles from "./AddCategory.module.scss";
import Loader from "../../../Loader/Loader";

//import Dashboard from "./Dashboard";
import AdminTemplate from "../AdminTemplate/AdminTemplate";



function AddCategory(){
    let [category, setNewCategory] = useState({
        category:{
            name: '',
            description: '',
        }
        
    });


    let [categories, setCategories] = useState({
        categories:[],
        loader: true,
    })



    function onChangeField(fieldElement, value){
        
        switch(fieldElement){
            case 'name':
            case 'description': 
                addNewCategory(fieldElement, value);
                break;
            default:
                break;
        }
       
        
    }

    // function validationField(fieldElement, value){
    //     let copy = Object.assign([], category);
    //     copy[fieldElement].value = value;
    //     copy[fieldElement].touched = true;
    //     for(let rule of copy[fieldElement].valid = category[fieldElement].rules){
    //         if(!rule.f(value).status){
    //             copy[fieldElement].valid = false;
    //             copy[fieldElement].msgFaild = rule.f(value).msg;
    //             break;
    //         }
    //         copy[fieldElement].valid = rule.f(value).status;
    //         copy[fieldElement].msgFaild = "";
    //     }
        
    //     setNewCategory(copy);
    // }
    function addNewCategory(fieldElement, value){
        let copy = Object.assign([], category);
        copy.category[fieldElement] = value;
        setNewCategory(copy);
    }
    function sendNewCategory(category){
        
        console.log(category);
        Requests({
            method: 'post', 
            url: '/addNewcategory',
            data: category.category,
            callback:renderCategories 
        });
    }

    
   




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
                    method: 'post', 
                    url: '/categories',
                    callback:renderCategories,
                });
    }, []);

    function renderCategories(serverRequest){
        if(serverRequest.code == 200){

            
            let copy = Object.assign([], categories);
            copy.categories = serverRequest.data;
            copy.loader = false;
            setCategories(copy);
        }
    }
  
    // function addNewCategory(category){
    //     let copy = Object.assign([], category);
    //     copy.category.name = category.name;
    //     setCategories(copy);
    //     console.log(copy);

    //     Requests({
    //         method: 'post',
    //         url: '/addNewCategory',
    //         data: copy,
    //         callback:addNewCategory,
    //     })



    // }
    



    

    return (
        

        <div>
            <AdminTemplate></AdminTemplate>
            {(categories.loader)? <Loader/>: ''}
            <div>

                {
                    (!categories.loader)?

                    <div className={Styles.AddCategory}>

                        <div className="page-wrapper">
                        <div className="page-content">

                            <div className="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
                                
                                <div className="ps-3">
                                    <h4 className={Styles.title}>
                                        Добавить новую категорию
                                    </h4>
                                </div>
                                <div className="ms-auto">
                                    <div className="btn-group">
                                        <button type="button" className="btn btn-light">Settings</button>
                                        <button type="button" className="btn btn-light dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown">	<span class="visually-hidden">Фон</span>
                                        </button>
                                        <div className="dropdown-menu dropdown-menu-right dropdown-menu-lg-end">
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


                            <div className="card">
                                <div className="card-header py-3">
                                    <h6 className="mb-0">Add Product Category</h6>
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-12">
                                        </div>
                                        <div className="col-12 col-lg-4 d-flex">
                                            <div className="card border shadow-none w-100">
                                                <div className="card-body">
                                                    
                                                        <input type="hidden" name="id"/>                    
                                                        <div className="col-12">
                                                            <label className="form-label">Название</label>
                                                            <input type="text" className="form-control" name="name" placeholder="Category name" onChange= {(evt)=>{onChangeField('name', evt.target.value)}}/>
                                                        </div>
                                                

                                                        <div className="col-12">
                                                            <label className="form-label">Описание</label>
                                                            <textarea className="form-control" rows="3" cols="3" placeholder="Product Description" name="description" onChange= {(evt)=>{onChangeField('description', evt.target.value)}}/>
                                                        </div>
                                                        <div className="col-12">
                                                            <div className="d-grid">
                                                                {
                                                                    <button className = {classNames("btn", "btn-primary")} onClick = {
                                                                        ()=>{
                                                                            sendNewCategory(category);}
                                                                        }>Add Category
                                                                    </button>
                                                                }
                                                            </div>
                                                        </div>
                                                    
                                                </div>
                                            </div>
                                        </div>
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
                                                            {
                                                                categories.categories.map((category)=>
                                                                    <tr>
                                                                        <td><input className="form-check-input" type="checkbox"/></td>
                                                                        <td>{category.id}</td>
                                                                        <td>{category.name}</td>
                                                                        <td>{category.description}</td>
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
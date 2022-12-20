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
    
    let defaultData = {
        name:{
            value: '',
            dirty: false,
            error: 'Название не может быть пустым',
        },
        description:{
            value: '',
        },
        formValid: false,
    }
    let [categoryValid, setcategoryValid] = useState(defaultData);


    let [categories, setCategories] = useState({
        categories:[],
        loader: true,
    });

    let defaultStatus = {
        formAccess: {
            status: false,
            text: 'Товар успешно добавлен!',
        },
        formError: false,

    };
    let [statusForm, setStatusForm] = useState(defaultStatus);

    function clean(){
        //очистка формы отправки товаров
        let copy = Object.assign([], statusForm);
        copy.formAccess.status = true;

        setcategoryValid(defaultData);
        setStatusForm(copy);


    }

    function nameHandler(evt){
        //валидация названия
        console.log(evt.target.value);
        let copy = Object.assign([], categoryValid);
        copy.name.value = evt.target.value;
        const re = /^[а-яА-ЯёЁa-zA-Z0-9 ]+$/;
        if(!re.test(String(evt.target.value).toLowerCase())){
            copy.name.error = 'Некорректное название. Название может содержать только буквы латиницы или кириллицы, а также цифры';
            if(!evt.target.value){
                copy.name.error = 'Название не может быть пустым';
            }
        }
        else{
            copy.name.error = '';
            
        }
        setcategoryValid(copy);
        
    }
    function descriptionHandler(evt){
        //валидация названия
        console.log(evt.target.value);
        let copy = Object.assign([], categoryValid);
        copy.description.value = evt.target.value;
        setcategoryValid(copy);
        setStatusForm(defaultStatus);
    }

    function blurHandle(evt){
        //проверка поля на его касание, если коснулись, но ничего не заполнили, то состояние меняется и выводится ошибка
        let copy = Object.assign([], categoryValid);
        switch(evt.target.name){
            case 'name':
                copy.name.dirty = true;
                break;
            default:
                break;
        }
        setcategoryValid(copy);

    }



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
            callback:clean, 
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


    useEffect(()=>{
        let copy = Object.assign([], categoryValid);
        //проверка на ошибки всей формы, для разблокировки кнопки отправки
        if(categoryValid.name.error){
            copy.formValid = false;
        }
        else{
            copy.formValid = true;


        }
        setcategoryValid(copy);

    }, [categoryValid.name.error]);

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
                                        <button type="button" className="btn btn-light dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown">	<span className="visually-hidden">Фон</span>
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
                                    <h6 className="mb-0">Добавить категорию товаров</h6>
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-12">
                                        </div>
                                        <div className="col-12 col-lg-4 d-flex">
                                            <div className="card border shadow-none w-100">
                                                <div className="card-body">
                                                    {(statusForm.formAccess.status) && <div style={{color:'green', marginBottom:'15px'}}>{statusForm.formAccess.text}</div>}
                                                    
                                                        <input type="hidden" name="id"/>                    
                                                        <div className="col-12">
                                                            <label className="form-label">Название</label>
                                                            {(categoryValid.name.dirty && categoryValid.name.error) && <div style={{color:'red', marginBottom:'15px'}}>{categoryValid.name.error}</div>}

                                                            <input type="text" value = {categoryValid.name.value} className="form-control" name="name" placeholder="Category name" onInput= {(evt)=>{onChangeField('name', evt.target.value)}} onChange = {(evt)=>{nameHandler(evt)}} onBlur = {(evt)=>{blurHandle(evt)}}/>
                                                        </div>
                                                

                                                        <div className="col-12">
                                                            <label className="form-label">Описание</label>
                                                            <textarea className="form-control" value = {categoryValid.description.value} rows="3" cols="3" placeholder="Product Description" name="description" onInput= {(evt)=>{onChangeField('description', evt.target.value)}} onChange = {(evt)=>{descriptionHandler(evt)}}/>
                                                        </div>
                                                        <div className="col-12">
                                                            <div className="d-grid">
                                                                {
                                                                    <button disabled = {!categoryValid.formValid} className = {classNames(Styles.BtnSend, "btn", "btn-primary")} onClick = {
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
                                                                categories.categories.map((category, key)=>
                                                                    <tr key={key}>
                                                                        <td><input className="form-check-input" type="checkbox"/></td>
                                                                        <td>{category.id}</td>
                                                                        <td>{category.name}</td>
                                                                        <td>{category.description}</td>
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
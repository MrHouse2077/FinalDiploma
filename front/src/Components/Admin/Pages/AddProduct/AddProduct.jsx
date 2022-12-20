import { useState } from "react";
import Dashboard from "../Dashboard/Dashboard";
import Styles from "./AddProduct.module.scss"
import classNames from 'classnames';
import { useEffect } from "react";
import Requests from "../../.././Requests";
import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import AdminTemplate from "../AdminTemplate/AdminTemplate";

function AddProduct(props){
    let defaultDataProduct = {
        name:{
            value: '',
            dirty: false,
            error: 'Название не может быть пустым',
            target: '',
        }, 
        description:{
            value: '',
            dirty: false,
            error: 'Описание не может быть пустым',
        }, 
        newPrice:{
            value: '',
            dirty: false,
            error: 'Новая цена не может быть пустая',
        }, 
        oldPrice:{
            value: '',
            dirty: false,
            error: 'Старая цена не может быть пустая',
        }, 
        count:{
            value: '',
            dirty: false,
            error: 'Количество товаров не может быть пустым',
        },
        category:{
            value: '',
            dirty: false,
            error: 'Выберите определенную категорию',
        },

        formValid: false, 
    }
    

    let defaultStatus = {
        formAccess: {
            status: false,
            text: 'Товар успешно добавлен!',
        },
        formError: false,

    };
    let [productValid, setProductValid] = useState(defaultDataProduct);
    let [statusForm, setStatusForm] = useState(defaultStatus);
    const [show, setShow] = useState(false);
    let [product, setProduct] = useState({
        //состояние товаров
        product:{
            name: '',
            description: '',
            newPrice: '',
            oldPrice: '',
            selectedCategory: '',
            count: '',
            images: '',
        }
        

    })

    let [characterisctics, setCharacteristics] = useState({
        //состояние характеристик
        characterisctics:{
            color: '',
            priceColor: '',
            size: '',
            priceSize: '',
            equipment: '',
            priceEquipment: '',
        }
        

    });


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let [categories, setCategories] = useState({
        categories:[],
        loader: true,
    })
    



    useEffect(()=>{
        let copy = Object.assign([], productValid);
        //проверка на ошибки всей формы, для разблокировки кнопки отправки
        if(productValid.name.error || productValid.description.error || productValid.newPrice.error || productValid.oldPrice.error || productValid.count.error || productValid.category.error){
            copy.formValid = false;
        }
        else{
            copy.formValid = true;


        }
        setProductValid(copy);

    }, [productValid.name.error, productValid.description.error, productValid.newPrice.error, productValid.oldPrice.error, productValid.count.error, productValid.category.error]);

    function nameHandler(evt){
        //валидация названия
        console.log(evt.target.value);
        let copy = Object.assign([], productValid);
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
        setStatusForm(defaultStatus);
        setProductValid(copy);
    }

    function descriptionHandler(evt){
        //валидация описания
        console.log(evt.target.value);
        let copy = Object.assign([], productValid);
        copy.description.value = evt.target.value;
        if(!evt.target.value){
            copy.description.error = 'Описание не может быть пустым';

        }
        else if(evt.target.value.length < 10){
            copy.description.error = 'Описание не может быть меньше 10 символов';
        }
        else{
            copy.description.error = '';
        }
        setStatusForm(defaultStatus);
        setProductValid(copy);

    }

    function newPriceHundler(evt){
        //валидация новой цены
        console.log(evt.target.value);
        let copy = Object.assign([], productValid);
        copy.newPrice.value = evt.target.value;
        const re = /^[0-9]+$/;
        if(!re.test(evt.target.value)){
            copy.newPrice.error = 'Введите число';
            if(!evt.target.value){
                copy.newPrice.error = 'Новая цена не может быть пустая';
            }
        }
        else{
            copy.newPrice.error = '';
        }
        setStatusForm(defaultStatus);
        setProductValid(copy);

    }
    
    function oldPriceHundler(evt){
        //валидация старой цены
        console.log(evt.target.value);
        let copy = Object.assign([], productValid);
        copy.oldPrice.value = evt.target.value;
        const re = /^[0-9]+$/;
        if(!re.test(evt.target.value)){
            copy.oldPrice.error = 'Введите число';
            if(!evt.target.value){
                copy.oldPrice.error = 'Старая цена не может быть пустая';
            }
        }
        else{
            copy.oldPrice.error = '';
        }
        setStatusForm(defaultStatus);
        setProductValid(copy);

    }

    function countHundler(evt){
        //валидация количества товаров
        console.log(evt.target.value);
        let copy = Object.assign([], productValid);
        copy.count.value = evt.target.value;
        const re = /^[0-9]+$/;
        if(!re.test(evt.target.value)){
            copy.count.error = 'Введите число';
            if(!evt.target.value){
                copy.count.error = 'Количество товаров не может быть пустым';
            }
        }
        else{
            copy.count.error = '';
        }
        setStatusForm(defaultStatus);
        setProductValid(copy);

    }

    function categoryHundler(evt){
        //валидация категорий
        let copy = Object.assign([], productValid);
        copy.category.value = evt.target.value;
        if(copy.category.value == '0'){
            copy.category.error = 'Выберите определенную категорию';
        }
        else{
            copy.category.error = '';
        }
        setStatusForm(defaultStatus);
        setProductValid(copy);
    }

    // function categoryHundler(evt){
    //     //валидация описания
    //     console.log(evt.target.value);
    //     setCategory(evt.target.value);
    //     if(!evt.target.value){
    //         setCategoryError('Выберите категорию');
    //     }
    //     else{
    //         setCategoryError('');
    //     }
    // }

    
    useEffect(()=>{
        //подгрузка категорий из базы
        Requests({
                    method: 'post', 
                    url: '/categories',
                    callback:renderCategories,
                });
    }, []);

    function renderCategories(serverRequest){
        //отрисовка категорий в форме
        if(serverRequest.code == 200){

            
            let copy = Object.assign([], categories);
            copy.categories = serverRequest.data;
            copy.loader = false;
            setCategories(copy);
        }
    }
    function onChangeFieldCharacteristics(fieldElement, value){
        //функция слежения за инпутом характеристик
        
        switch(fieldElement){
            case 'color':
            case 'size': 
            case 'equipment':
            case 'priceEquipment':
            case 'priceSize': 
            case 'priceColor': 
                addCharacteristics(fieldElement, value);
                break;
            default:
                break;
        }
       
        
    }

    function onChangeFieldProducts(fieldElement, value){
        //функция слежения за инпутом продуктов
        switch(fieldElement){
            case 'name':
            case 'description': 
            case 'newPrice':
            case 'oldPrice':
            case 'count':
            case 'selectedCategory':
            case 'images':
                addProduct(fieldElement, value);
                break;
                
            default:
                break;
        }

    }

    function onChangeFieldProductsImages(fieldElement, nativeEvent){
        switch(fieldElement){
            case 'images':
                addImages(fieldElement, nativeEvent);
                break;
                
            default:
                break;
        }
    }
    function addProduct(fieldElement, value){
        //добавка товара в состояние
        console.log(fieldElement, value);
        let copy = Object.assign([], product);
        copy.product[fieldElement] = value;
        setProduct(copy);
        
    }
    function addImages(fieldElement, nativeEvent){
        console.log(nativeEvent.target.files[0].name);
        let copy = Object.assign([], product);
        copy.product[fieldElement] = nativeEvent.target.files[0].name;
        setProduct(copy);
    }

    function clean(){
        //очистка формы отправки товаров
        let copy = Object.assign([], statusForm);
        copy.formAccess.status = true;

        setProductValid(defaultDataProduct);
        setStatusForm(copy);


    }
    function sendNewProduct(product){
        //отправка товара в базу
        
        console.log(product);
        Requests({
            method: 'post', 
            url: '/addProduct',
            data:product.product,
            callback:clean, 
        });
        
    }

    function sendCharacteristics(characterisctics){
        //отправка характеристик в базу
        
        console.log(characterisctics);
        Requests({
            method: 'post', 
            url: '/addCharacteristics',
            data: characterisctics.characterisctics,
            callback:renderCategories 
        });
        
        
    }

    function addCharacteristics(fieldElement, value){
        //функция добавления характеристик в состояние
        let copy = Object.assign([], characterisctics);
        copy.characterisctics[fieldElement] = value;
        setCharacteristics(copy);
    }

    function blurHandle(evt){
        //проверка поля на его касание, если коснулись, но ничего не заполнили, то состояние меняется и выводится ошибка
        let copy = Object.assign([], productValid);
        switch(evt.target.name){
            case 'name':
                copy.name.dirty = true;
                break;
            case 'description': 
                copy.description.dirty = true;
                break;
            case 'newPrice':
                copy.newPrice.dirty = true;
                break;
            case 'oldPrice':
                copy.oldPrice.dirty = true;
                break;
            case 'count':
                copy.count.dirty = true;
                break;
            case 'category':
                copy.category.dirty = true;
                break;
        }
        setProductValid(copy);

    }
    

    return(
        
        <div>
            <AdminTemplate></AdminTemplate>
            <div className={Styles.AddProduct}>

                <h4 className={Styles.title}>
                    Добавить новый товар
                </h4>
                <Button variant="primary" className = {Styles.BtnCharact} onClick={handleShow}>
                    Добавить дополнительные характеристики
                </Button>

                <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                    size="lg"
                >
                    <Modal.Header closeButton>
                    <Modal.Title>Дополнительные характеристики</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <Form className="row">
                        <Form.Group className="mb-3 col-6" controlId="formBasicColor">
                            <Form.Label>Выберите цвет товара</Form.Label>
                            <Form.Control type="text" placeholder="Введите цвет" onInput= {(evt)=>{onChangeFieldCharacteristics('color', evt.target.value)}}  />
                        </Form.Group>
                        <Form.Group className="mb-3 col-6" controlId="formColorPrice">
                            <Form.Label>Введите стоимость за цвет</Form.Label>
                            <Form.Control type="text" placeholder="Доп цена" onInput= {(evt)=>{onChangeFieldCharacteristics('priceColor', Number(evt.target.value))}}/>
                        </Form.Group>

                        <Form.Group className="mb-3 col-6" controlId="formBasicSize">
                            <Form.Label>Выберите размер товара </Form.Label>
                            <Form.Control type="text" placeholder="Введите размер" onInput= {(evt)=>{onChangeFieldCharacteristics('size', evt.target.value)}}/>
                        </Form.Group>
                        <Form.Group className="mb-3 col-6" controlId="formSizePrice">
                            <Form.Label>Введите стоимость за размер</Form.Label>
                            <Form.Control type="text" placeholder="Доп цена" onInput= {(evt)=>{onChangeFieldCharacteristics('priceSize', Number(evt.target.value))}}/>
                        </Form.Group>

                        <Form.Group className="mb-3 col-6" controlId="formBasicEquipment">
                            <Form.Label>Выберите комплектацию товара</Form.Label>
                            <Form.Control type="text" placeholder="Введите комплектацию" onInput= {(evt)=>{onChangeFieldCharacteristics('equipment', evt.target.value)}} />
                        </Form.Group>
                        <Form.Group className="mb-3 col-6" controlId="formEquipmentPrice">
                            <Form.Label>Введите стоимость за комплектацию</Form.Label>
                            <Form.Control type="text" placeholder="Доп цена" onInput= {(evt)=>{onChangeFieldCharacteristics('priceEquipment', Number(evt.target.value))}}/>
                        </Form.Group>

                        <div className="row justify-content-center">
                            <Button variant="primary" className="mb-3 col-2" type="button" onClick = {
                                                                        ()=>{
                                                                            console.log(characterisctics);}
                                                                        }>
                                Добавить
                            </Button>
                        </div>

                        
                    </Form>
                    </Modal.Body>
                </Modal>
                
                <div className={Styles.wrap_add_field}>
                   

                    <div className={Styles.product_description}>
                        <div>
                        {(statusForm.formAccess.status) && <div style={{color:'green', marginBottom:'15px'}}>{statusForm.formAccess.text}</div>}

                            <Form className="row">
                                <Form.Group className="mb-3 col-12" controlId="formBasicName">
                                    
                                    <h5 className={Styles.parametr_title}>
                                        Название товара 
                                    </h5>
                                    {(productValid.name.dirty && productValid.name.error) && <div style={{color:'red', marginBottom:'15px'}}>{productValid.name.error}</div>}
                                    <Form.Control value = {productValid.name.value} name = "name" type="text" placeholder="Название" onInput= {(nativeEvent)=>{onChangeFieldProducts('name', nativeEvent.target.value)}} onChange = {(evt)=>{nameHandler(evt)}} onBlur = {(evt)=>{blurHandle(evt)}}/>
                                </Form.Group>
                                <Form.Group className="mb-3 col-12" controlId="formColorDescription">
                                    <h5 className={Styles.parametr_title}>
                                        Описание товара 
                                    </h5>
                                    {(productValid.description.dirty && productValid.description.error) && <div style={{color:'red', marginBottom:'15px'}}>{productValid.description.error}</div>}
                                    <Form.Control value = {productValid.description.value} name = "description" type="text" placeholder="Описание" onInput= {(nativeEvent)=>{onChangeFieldProducts('description', nativeEvent.target.value)}} onChange = {(evt)=>{descriptionHandler(evt)}} onBlur = {(evt)=>{blurHandle(evt)}}/>
                                </Form.Group>
                                <Form.Group controlId="formFileMultiple" className="mb-3 col-12">
                                    <h5 className={Styles.parametr_title}>
                                            Изображение товара 
                                    </h5>
                                    <Form.Control name = "images" type="file" size = "lg" multiple onInput= {(nativeEvent)=>{onChangeFieldProductsImages('images', nativeEvent)}}/>
                                </Form.Group>
                            </Form>
                          
                        </div>

                    </div>

                    <div className={Styles.product_params}>
                        
                        
                        <div  className={Styles.parametr_wrap_flex}>
                            

                            <div>
                                <Form className="row">
                                    <Form.Group className="mb-3 col-12" controlId="formBasicNewPrice">
                                        <h5 className={Styles.parametr_title}>
                                            Новая цена 
                                        </h5>
                                        {(productValid.newPrice.dirty && productValid.newPrice.error) && <div style={{color:'red', marginBottom:'15px'}}>{productValid.newPrice.error}</div>}
                                        <Form.Control  value = {productValid.newPrice.value} name = "newPrice" type="text" placeholder="руб." onInput= {(nativeEvent)=>{onChangeFieldProducts('newPrice', Number(nativeEvent.target.value))}} onChange = {(evt)=>{newPriceHundler(evt)}} onBlur = {(evt)=>{blurHandle(evt)}}/>
                                    </Form.Group>
                                    <Form.Group className="mb-3 col-12" controlId="formOldPrice">
                                        <h5 className={Styles.parametr_title}>
                                            Старая цена 
                                        </h5>
                                        {(productValid.oldPrice.dirty && productValid.oldPrice.error) && <div style={{color:'red', marginBottom:'15px'}}>{productValid.oldPrice.error}</div>}
                                        <Form.Control  value = {productValid.oldPrice.value} name = "oldPrice" type="text" placeholder="руб." onInput= {(nativeEvent)=>{onChangeFieldProducts('oldPrice', Number(nativeEvent.target.value))}} onChange = {(evt)=>{oldPriceHundler(evt)}} onBlur = {(evt)=>{blurHandle(evt)}}/>
                                    </Form.Group>
                                    <Form.Group className="mb-3 col-12" controlId="formCount">
                                        <h5 className={Styles.parametr_title}>
                                            Количество товаров
                                        </h5>
                                        {(productValid.count.dirty && productValid.count.error) && <div style={{color:'red', marginBottom:'15px'}}>{productValid.count.error}</div>}
                                        <Form.Control value = {productValid.count.value} name = "count" type="text" placeholder="шт." onInput= {(nativeEvent)=>{onChangeFieldProducts('count', Number(nativeEvent.target.value))}} onChange = {(evt)=>{countHundler(evt)}} onBlur={(evt)=>blurHandle(evt)}/>
                                    </Form.Group>
                                    
                                </Form>
                            </div>

                            
                            
                        </div>

                        
                        <div  className={Styles.parametr_wrap_flex}>

                            <div className="col-12">
                                <h5 className={Styles.parametr_title}>
                                        Категория 
                                </h5>
                                {(productValid.category.dirty && productValid.category.error) && <div style={{color:'red', marginBottom:'15px'}}>{productValid.category.error}</div>}
                                <select className="form-select" name = "category" onInput= {(nativeEvent)=>{onChangeFieldProducts('selectedCategory', Number(nativeEvent.target.value))}} onChange = {(evt)=>{categoryHundler(evt)}} onBlur={(evt)=>blurHandle(evt)}>
                                    <option selected value = '0'>Выберите категорию</option>
                                    {
                                        categories.categories.map((category, key)=>
                                            <option key={key} value = {category.id}>{category.name}</option>
                                            
                                        )
                                    }
                                </select> 
                            </div>
                        </div>

                    </div>

                </div>
                <button type="submit" disabled = {!productValid.formValid} className = {classNames(Styles.BtnSend, "btn", "btn-primary")} onClick = {()=>{
                                                                                        sendNewProduct(product)
                                                                                        sendCharacteristics(characterisctics)
                                                                                    }}>Добавить</button>

            </div>
        </div>

    );

}
export default AddProduct;
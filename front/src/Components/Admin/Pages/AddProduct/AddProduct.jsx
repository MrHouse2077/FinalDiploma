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

    let [productName, setName] = useState('');
    let [productDescription, setDescription] = useState('');
    let [productNewPrice, setNewPrice] = useState('');
    let [productOldPrice, setOldPrice] = useState('');
    let [productCount, setCount] = useState('');
    let [productCategory, setCategory] = useState('');   


    let [nameDirty, setNameDirty] = useState(false);
    let [descriptionDirty, setDescriptionDirty] = useState(false);
    let [newPriceDirty, setNewPriceDirty] = useState(false);
    let [oldPriceDirty, setOldPriceDirty] = useState(false);
    let [countDirty, setCountDirty] = useState(false);
    let [categoryDirty, setCategoryDirty] = useState(false);

    
    let [nameError, setNameError] = useState('Название не может быть пустым');
    let [descriptionError, setDescriptionError] = useState('Описание не может быть пустым');
    let [newPriceError, setNewPriceError] = useState('Введите новую цену');
    let [oldPriceError, setOldPriceError] = useState('Введите старую цену');
    let [countError, setCountError] = useState('Количество товаров не может быть пустым');
    let [categoryError, setCategoryError] = useState('Количество товаров не может быть пустым');


    let [formValid, setFormValid] = useState(false);

    useEffect(()=>{
        //проверка на ошибки всей формы, для разблокировки кнопки отправки
        if(nameError || descriptionError || newPriceError || countError){
            setFormValid(false);
        }
        else{
            setFormValid(true);

        }

    }, [nameError, descriptionError, newPriceError, countError])

    function nameHandler(evt){
        //валидация названия
        console.log(evt.target.value);
        setName(evt.target.value);
        const re = /^[а-яА-ЯёЁa-zA-Z0-9]+$/;
        if(!re.test(String(evt.target.value).toLowerCase())){
            setNameError('Некорректное название. Название может содержать только буквы латиницы или кириллицы, а также цифры');
            if(!evt.target.value){
                setNameError('Название не может быть пустым');
            }
        }
        else{
            setNameError('');
        }
    }

    function descriptionHandler(evt){
        //валидация описания
        console.log(evt.target.value);
        setDescription(evt.target.value);
        if(!evt.target.value){
            setDescriptionError('Описание не может быть пустым');
        }
        else if(evt.target.value.length < 20){
            setDescriptionError('Описание не может быть меньше 20 символов');
        }
        else{
            setDescriptionError('');
        }
    }

    function newPriceHundler(evt){
        //валидация новой цены
        console.log(evt.target.value);
        setNewPrice(evt.target.value);
        const re = /^[0-9]+$/;
        if(!re.test(evt.target.value)){
            setNewPriceError('Введите число');
            if(!evt.target.value){
                setNewPriceError('Введите новую цену');
            }
        }
        else{
            setNewPriceError('');
        }
    }
    
    function oldPriceHundler(evt){
        //валидация старой цены
        console.log(evt.target.value);
        setOldPriceError(evt.target.value);
        const re = /^[0-9]+$/;
        if(!re.test(evt.target.value)){
            setOldPriceError('Введите число');
            if(!evt.target.value){
                setOldPriceError('Введите старую цену');
            }
        }
        else{
            setOldPriceError('');
        }
    }

    function countHundler(evt){
        //валидация количества товаров
        console.log(evt.target.value);
        setCountError(evt.target.value);
        const re = /^[0-9]+$/;
        if(!re.test(evt.target.value)){
            setCountError('Введите число');
            if(!evt.target.value){
                setCountError('Количество товаров не может быть пустым');
            }
        }
        else{
            setCountError('');
        }
    }

    function categoryHundler(evt){
        //валидация описания
        console.log(evt.target.value);
        setCategory(evt.target.value);
        if(!evt.target.value){
            setCategoryError('Выберите категорию');
        }
        else{
            setCategoryError('');
        }
    }







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
                addProduct(fieldElement, value);
                break;
                
            default:
                break;
        }

    }
    function addProduct(fieldElement, value){
        //добавка товара в состояние
        // console.log(fieldElement, value);
        let copy = Object.assign([], product);
        copy.product[fieldElement] = value;
        setProduct(copy);
        
    }
    function cleanInputs(product){
        //очистка полей инпутов в случае успешной отправки данных
    }
    function sendNewProduct(product){
        //отправка товара в базу
        
        console.log(product);
        Requests({
            method: 'post', 
            url: '/addProduct',
            data: product.product,
            callback:renderCategories 
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
        // console.log(fieldElement, value);
        let copy = Object.assign([], characterisctics);
        copy.characterisctics[fieldElement] = value;
        setCharacteristics(copy);
        // console.log(copy);
    }

    function blurHandle(evt){
        //проверка поля на его касание, если коснулись, но ничего не заполнили, то состояние меняется и выводится ошибка
        switch(evt.target.name){
            case 'name':
                setNameDirty(true);
                break;
            case 'description': 
                setDescriptionDirty(true);
                break;
            case 'newPrice':
                setNewPriceDirty(true);
                break;
            case 'oldPrice':
                setOldPriceDirty(true);
                break;
            case 'count':
                setCountDirty(true);
                break;
            case 'category':
                setCategoryDirty(true);
                break;
        }
    }

    return(
        
        <div>
            <AdminTemplate></AdminTemplate>
            <div className={Styles.AddProduct}>

                <h4 className={Styles.title}>
                    Добавить новый продукт
                </h4>
                <Button variant="primary" onClick={handleShow}>
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
                            <Form className="row">
                                <Form.Group className="mb-3 col-12" controlId="formBasicName">
                                    {(nameDirty && nameError) && <div style={{color:'red'}}>{nameError}</div>}
                                    <Form.Label>Название товара</Form.Label>
                                    <Form.Control value = {productName} name = "name" type="text" placeholder="Название" onInput= {(nativeEvent)=>{onChangeFieldProducts('name', nativeEvent.target.value)}} onChange = {(evt)=>{nameHandler(evt)}} onBlur = {(evt)=>{blurHandle(evt)}}/>
                                </Form.Group>
                                <Form.Group className="mb-3 col-12" controlId="formColorDescription">
                                    {(descriptionDirty && descriptionError) && <div style={{color:'red'}}>{descriptionError}</div>}
                                    <Form.Label>Описание товара</Form.Label>
                                    <Form.Control value = {productDescription} name = "description" type="text" placeholder="Описание" onInput= {(nativeEvent)=>{onChangeFieldProducts('description', nativeEvent.target.value)}} onChange = {(evt)=>{descriptionHandler(evt)}} onBlur = {(evt)=>{blurHandle(evt)}}/>
                                </Form.Group>
                                <Form.Group controlId="formFileLg" className="mb-3 col-12">
                                    <Form.Label>Изображение товара</Form.Label>
                                    <Form.Control type="file" size="lg" />
                                </Form.Group>
                            </Form>
                          
                        </div>

                    </div>

                    <div className={Styles.product_params}>
                        
                        
                        <div  className={Styles.parametr_wrap_flex}>
                            

                            <div>
                                <Form className="row">
                                    <Form.Group className="mb-3 col-12" controlId="formBasicNewPrice">
                                        {(newPriceDirty && newPriceError) && <div style={{color:'red'}}>{newPriceError}</div>}
                                        <Form.Label>Новая цена</Form.Label>
                                        <Form.Control  name = "newPrice" type="text" placeholder="руб." onInput= {(nativeEvent)=>{onChangeFieldProducts('newPrice', Number(nativeEvent.target.value))}} onChange = {(evt)=>{newPriceHundler(evt)}} onBlur = {(evt)=>{blurHandle(evt)}}/>
                                    </Form.Group>
                                    <Form.Group className="mb-3 col-12" controlId="formOldPrice">
                                        {(oldPriceDirty && oldPriceError) && <div style={{color:'red'}}>{oldPriceError}</div>}
                                        <Form.Label>Старая цена</Form.Label>
                                        <Form.Control  name = "oldPrice" type="text" placeholder="руб." onInput= {(nativeEvent)=>{onChangeFieldProducts('oldPrice', Number(nativeEvent.target.value))}} onChange = {(evt)=>{oldPriceHundler(evt)}} onBlur = {(evt)=>{blurHandle(evt)}}/>
                                    </Form.Group>
                                    <Form.Group className="mb-3 col-12" controlId="formCount">
                                        {(countDirty && countError) && <div style={{color:'red'}}>{countError}</div>}
                                        <Form.Label>Количество товаров</Form.Label>
                                        <Form.Control name = "count" type="text" placeholder="шт." onInput= {(nativeEvent)=>{onChangeFieldProducts('count', Number(nativeEvent.target.value))}} onChange = {(evt)=>{countHundler(evt)}} onBlur={(evt)=>blurHandle(evt)}/>
                                    </Form.Group>
                                    
                                </Form>
                            </div>

                            
                            
                        </div>

                        
                        <div  className={Styles.parametr_wrap_flex}>

                            <div className="col-12">
                                <h5 className={Styles.parametr_title}>
                                        Категория 
                                </h5>
                                <select className="form-select" name = "category" onInput= {(nativeEvent)=>{onChangeFieldProducts('selectedCategory', Number(nativeEvent.target.value))}} onChange = {(evt)=>{categoryHundler(evt)}} onBlur={(evt)=>blurHandle(evt)}>
                                    <option >Выберите категорию</option>
                                    {
                                        categories.categories.map((category, key)=>
                                            <option key={key} value = {category.id}>{category.name}</option>
                                            
                                        )
                                    }
                                </select> 
                            </div>
                        </div>

                    </div>
                    <p>Итоговая стоимость со всеми характеристиками:</p>

                </div>
                <button disabled = {!formValid} className = {classNames("btn", "btn-primary")} onClick = {()=>{
                                                                                        sendNewProduct(product)
                                                                                        // sendCharacteristics(characterisctics)
                                                                                    }}>Добавить</button>

            </div>
        </div>

    );

}
export default AddProduct;
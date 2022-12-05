import { useState } from "react";
import InputText from "../../../UI/InputText/InputText";
import Select from "../../../UI/Select/Select";
import TextArea from "../../../UI/TextArea/TextArea";
import Dashboard from "../Dashboard/Dashboard";
import Styles from "./AddProduct.module.scss"
import classNames from 'classnames';
import { useEffect } from "react";
import Requests from "../../.././Requests";
import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function AddProduct(){
    const [show, setShow] = useState(false);
    let [product, setProduct] = useState({
        product:{
            name: '',
            description: '',
            newPrice: '',
            oldPrice: '',
            selectedCategory: '',
        }

    })

    let [characterisctics, setCharacteristics] = useState({
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
    function onChangeFieldCharacteristics(fieldElement, value){
        
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
        switch(fieldElement){
            case 'name':
            case 'description': 
            case 'newPrice':
            case 'oldPrice':
            case 'selectedCategory': 
            addProduct(fieldElement, value);
                break;
            default:
                break;
        }

    }
    function addProduct(fieldElement, value){
        // console.log(fieldElement, value);
        let copy = Object.assign([], product);
        copy.product[fieldElement] = value;
        setProduct(copy);
        
    }
    function sendNewProduct(product){
        
        console.log(product);
        Requests({
            method: 'post', 
            url: '/addProduct',
            data: product,
        });
        
    }
    function sendCharacteristics(characterisctics){
        
        console.log(characterisctics);
        Requests({
            method: 'post', 
            url: '/addCharacteristics',
            data: characterisctics,
        });
        
        
    }

    // function addCharacteristics(fieldElement, value){
    //     // console.log(fieldElement, value);
    //     let copy = Object.assign([], characterisctics);
    //     copy.characterisctics[fieldElement] = value;
    //     setCharacteristics(copy);
    //     // console.log(copy);
    // }

    
    // let [checkValues, checkSet] = useState({
    //     fieldEmail: {
    //         flag : null,
    //         value: null,
    //         msgFaild: null,
    //         valid: false,
    //         touched: false,
    //         rules:[
    //             {
    //                 //проверка на email
    //                 msg: "Введите email!",
    //                 f: function(valueElement){
    //                     const regexp_email = /^[-a-z0-9!#$%&'*+/=?^_`{|}~]+(?:\.[-a-z0-9!#$%&'*+/=?^_`{|}~]+)*@(?:[a-z0-9]([-a-z0-9]{0,61}[a-z0-9])?\.)*(?:aero|arpa|asia|biz|cat|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel|[a-z][a-z])$/iu;
    //                     return (regexp_email.test(valueElement))? {status: true}: {status: false, msgFaild: this.msg};
    //                 }
    //             },
    //         ],
    //      },
    //      fieldPassword: {
    //         value: null,
    //         msgFaild: null,
    //         valid: false,
    //         touched: false,
    //         rules:[
    //             {
    //                 //проверка на минимальную длинну
    //                 minLength: 3,
    //                 msg: "Длинна пароля не должна быть меньше четырёх символов!",
    //                 f: function(valueElement){
    //                     return (valueElement.length >= this.minLength)? {status: true}: {status:false, msgFaild: this.msg};
    //                 }
    //             },
      
    //         ]
    //     },
    //     formValid: false,
    //   });

    return(
        
        <div>
            <Dashboard></Dashboard>
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
                            <Form.Control type="text" placeholder="Введите цвет" onChange= {(evt)=>{onChangeFieldCharacteristics('color', evt.target.value)}} />
                        </Form.Group>
                        <Form.Group className="mb-3 col-6" controlId="formColorPrice">
                            <Form.Label>Введите стоимость за цвет</Form.Label>
                            <Form.Control type="text" placeholder="Доп цена" onChange= {(evt)=>{onChangeFieldCharacteristics('priceColor', evt.target.value)}}/>
                        </Form.Group>

                        <Form.Group className="mb-3 col-6" controlId="formBasicSize">
                            <Form.Label>Выберите размер товара </Form.Label>
                            <Form.Control type="text" placeholder="Введите размер" onChange= {(evt)=>{onChangeFieldCharacteristics('size', evt.target.value)}}/>
                        </Form.Group>
                        <Form.Group className="mb-3 col-6" controlId="formSizePrice">
                            <Form.Label>Введите стоимость за размер</Form.Label>
                            <Form.Control type="text" placeholder="Доп цена" onChange= {(evt)=>{onChangeFieldCharacteristics('priceSize', evt.target.value)}}/>
                        </Form.Group>

                        <Form.Group className="mb-3 col-6" controlId="formBasicEquipment">
                            <Form.Label>Выберите комплектацию товара</Form.Label>
                            <Form.Control type="text" placeholder="Введите комплектацию" onChange= {(evt)=>{onChangeFieldCharacteristics('equipment', evt.target.value)}} />
                        </Form.Group>
                        <Form.Group className="mb-3 col-6" controlId="formEquipmentPrice">
                            <Form.Label>Введите стоимость за комплектацию</Form.Label>
                            <Form.Control type="text" placeholder="Доп цена" onChange= {(evt)=>{onChangeFieldCharacteristics('priceEquipment', evt.target.value)}}/>
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
                    {/* <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary">Understood</Button>
                    </Modal.Footer> */}
                </Modal>
                
                <div className={Styles.wrap_add_field}>
                   

                    <div className={Styles.product_description}>
                        <div>
                            <Form className="row">
                                <Form.Group className="mb-3 col-12" controlId="formBasicName">
                                    <Form.Label>Название товара</Form.Label>
                                    <Form.Control type="text" placeholder="Название" onChange= {(evt)=>{onChangeFieldProducts('name', evt.target.value)}} />
                                </Form.Group>
                                <Form.Group className="mb-3 col-12" controlId="formColorDescription">
                                    <Form.Label>Описание товара</Form.Label>
                                    <Form.Control type="text" placeholder="Описание" onChange= {(evt)=>{onChangeFieldProducts('description', evt.target.value)}}/>
                                </Form.Group>
                                <Form.Group controlId="formFileLg" className="mb-3 col-12">
                                    <Form.Label>Изображение товара</Form.Label>
                                    <Form.Control type="file" size="lg" />
                                </Form.Group>
                                <Form.Group className="mb-3 col-12" controlId="formColorDescription">
                                    <Form.Control type="text" placeholder="Описание" disabled value = {characterisctics.priceColor + characterisctics.priceSize + characterisctics.priceEquipment}/>
                                </Form.Group>
                            </Form>
                          
                        </div>

                    </div>

                    <div className={Styles.product_params}>
                        
                        
                        <div  className={Styles.parametr_wrap_flex}>
                            

                            <div>
                                <Form className="row">
                                    <Form.Group className="mb-3 col-12" controlId="formBasicNewPrice">
                                        <Form.Label>Новая цена</Form.Label>
                                        <Form.Control type="text" placeholder="Название" onChange= {(evt)=>{onChangeFieldProducts('newPrice', evt.target.value)}} />
                                    </Form.Group>
                                    <Form.Group className="mb-3 col-12" controlId="formColorDescription">
                                        <Form.Label>Старая цена</Form.Label>
                                        <Form.Control type="text" placeholder="Описание" onChange= {(evt)=>{onChangeFieldProducts('oldPrice', evt.target.value)}}/>
                                    </Form.Group>
                                    
                                </Form>
                            </div>

                            
                            
                        </div>

                        
                        <div  className={Styles.parametr_wrap_flex}>

                            <div class="col-12">
                                <h5 className={Styles.parametr_title}>
                                        Категория 
                                </h5>
                                <select class="form-select" onChange= {(evt)=>{onChangeFieldProducts('selectedCategory', evt.target.value)}}>
                                    {
                                        categories.categories.map((category)=>
                                            <option>{category.name}</option>
                                            // <div>
                                                
                                            //     <input type = "text" value = {category.id}  disabled/>
                                            // </div>
                                        )
                                    }
                                </select> 
                            </div>
                        </div>

                    </div>
                    <p>Итоговая стоимость со всеми характеристиками:</p>

                </div>
                <button className = {classNames("btn", "btn-primary")} onClick = {
                                                                        ()=>{
                                                                            sendNewProduct(product)
                                                                            // sendCharacteristics(characterisctics);}
                                                                        }
                                                                        }>Добавить</button>

            </div>
        </div>

    );

}
export default AddProduct;
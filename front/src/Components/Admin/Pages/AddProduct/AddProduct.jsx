import { useState } from "react";
import InputText from "../../../UI/InputText/InputText";
import Select from "../../../UI/Select/Select";
import TextArea from "../../../UI/TextArea/TextArea";
import Styles from "./AddProduct.module.scss"
function AddProduct(){

    
    let [checkValues, checkSet] = useState({
        fieldEmail: {
            flag : null,
            value: null,
            msgFaild: null,
            valid: false,
            touched: false,
            rules:[
                {
                    //проверка на email
                    msg: "Введите email!",
                    f: function(valueElement){
                        const regexp_email = /^[-a-z0-9!#$%&'*+/=?^_`{|}~]+(?:\.[-a-z0-9!#$%&'*+/=?^_`{|}~]+)*@(?:[a-z0-9]([-a-z0-9]{0,61}[a-z0-9])?\.)*(?:aero|arpa|asia|biz|cat|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel|[a-z][a-z])$/iu;
                        return (regexp_email.test(valueElement))? {status: true}: {status: false, msgFaild: this.msg};
                    }
                },
            ],
         },
         fieldPassword: {
            value: null,
            msgFaild: null,
            valid: false,
            touched: false,
            rules:[
                {
                    //проверка на минимальную длинну
                    minLength: 3,
                    msg: "Длинна пароля не должна быть меньше четырёх символов!",
                    f: function(valueElement){
                        return (valueElement.length >= this.minLength)? {status: true}: {status:false, msgFaild: this.msg};
                    }
                },
      
            ]
        },
        formValid: false,
      });

    return(

        <div className={Styles.AddProduct}>

            <h4 className={Styles.title}>
                Добавить новый продукт
            </h4>
            <div className={Styles.wrap_add_field}>

                <div className={Styles.product_description}>
                    <div>
                        <h5 className={Styles.parametr_title}>
                            Название продукта  
                        </h5>

                        <InputText
                        
                            type="text"
                            placeholder = "Введите название продукта"
                            onChange = {()=>{}}
                            className = {Styles.parametr_wrap}
                            onBlur  = {()=>{}}
                            checkValues  = {checkValues}
                        
                        >
                        
                        </InputText>
                        
                    </div>
                        <h5 className={Styles.parametr_title}>
                            Описание продукта  
                        </h5>

                        <TextArea
                        
                            placeholder = "Введите описание продукта"
                            onChange = {()=>{}}
                            className = {Styles.parametr_wrap}
                            onBlur  = {()=>{}}
                            checkValues  = {checkValues}
                        
                        >
                        
                        </TextArea>
                    <div>
                        <h5 className={Styles.parametr_title}>
                            Фотография продукта  
                        </h5>

                        <InputText
                        
                            type="text"
                            placeholder = "Загрузите изображение продукта"
                            onChange = {()=>{}}
                            className = {Styles.parametr_wrap}
                            onBlur  = {()=>{}}
                            checkValues  = {checkValues}
                        
                        >
                        
                        </InputText>
                    </div>

                </div>

                <div className={Styles.product_params}>
                    
                    <div  className={Styles.parametr_wrap_flex}>

                        <div>
                            <h5 className={Styles.parametr_title}>
                                Цена продукта 
                            </h5>

                            <InputText
                            
                                type="text"
                                placeholder = "Введите цену"
                                onChange = {()=>{}}
                                className = {Styles.parametr_wrap}
                                onBlur  = {()=>{}}
                                checkValues  = {checkValues}
                            
                            >
                            
                            </InputText>
                        </div>

                        <div>
                            <h5 className={Styles.parametr_title}>
                                Валюта  
                            </h5>

                            <Select
                            
                                selected = "Выберите валюту"
                                className = {Styles.parametr_wrap}
                                selectList  = ""
                                checkValues = {checkValues}
                            >
                            
                            </Select>
                        </div>
                        
                    </div>

                    <div  className={Styles.parametr_wrap_flex}>
                        <div>
                            <h5 className={Styles.parametr_title}>
                                Старая цена 
                            </h5>

                            <InputText
                            
                                type="text"
                                placeholder = "Введите цену"
                                onChange = {()=>{}}
                                className = {Styles.parametr_wrap}
                                onBlur  = {()=>{}}
                                checkValues  = {checkValues}
                            
                            >
                            
                            </InputText>
                        </div>

                        <div>
                            <h5 className={Styles.parametr_title}>
                                Валюта  
                            </h5>

                            <Select
                            
                                selected = "Выберите валюту"
                                className = {Styles.parametr_wrap}
                                selectList  = ""
                                checkValues = {checkValues}
                            >
                            
                            </Select>
                        </div>
                    </div>

                </div>

            </div>

        </div>

    );

}
export default AddProduct;
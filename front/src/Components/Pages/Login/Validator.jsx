import Requests from "../../Requests";
import { useState } from "react";
import Styles from "./Login.module.scss";
import Button from "../../UI/Button/Button";
import InputText from "../../UI/InputText/InputText";

function Validator(props){
    let onLk = props.onLk;
    let onLogin = props.onLogin;
    
    let [checkValues, checkSet] = useState({
        fieldEmail: {
            value: '',
            msgFaild: '',
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
            value: '',
            msgFaild: '',
            valid: false,
            touched: false,
            rules:[
                {
                    //проверка на минимальную длинну
                    msg: "Длинна пароля не должна быть меньше четырёх символов!",
                    f: function(valueElement){
                        return (valueElement.length > 4)? {status: true}: {status:false, msgFaild: this.msg};
                    }
                },

            ]
        },
        formValid: false,
    });



    function onChangeElement(fieldElement, evt){
        switch(fieldElement){
            case 'fieldEmail': 
            case 'fieldPassword': 
                validationField(fieldElement, evt);

            break;
            default: break;

        }
    }


    function validationField(fieldElement, evt){
        
        let copy = Object.assign({}, checkValues);
        copy[fieldElement].value = evt;
        copy[fieldElement].touched = true;
        for(let rule of copy[fieldElement].rules){
            if(!rule.f(evt).status){
                copy[fieldElement].valid = false
                copy[fieldElement].msgFaild = rule.f(evt).msgFaild;
                
                break;
            }
            copy[fieldElement].valid = rule.f(evt).status;
            copy[fieldElement].msgFaild = '';
        }

        checkSet(copy);
    }

    return (

        <div className="Login">
        
        <InputText 
            type="text" 
            placeholder="Введите email" 
            onChange = {(evt)=>
                onChangeElement('fieldEmail', evt.target.value)}
            onBlur = {(evt)=>
                onChangeElement('fieldEmail', evt.target.value)}
            className = {
                
                (!checkValues.fieldEmail.valid && checkValues.fieldEmail.touched)
                ?
                    Styles.error
                :
                    (checkValues.fieldEmail.valid)
                    ?
                        Styles.succes
                    :
                        ""
            }
        />

        <InputText 
            type="password" 
            placeholder="Введите пароль"
            onChange = {(evt)=>
                onChangeElement('fieldPassword', evt.target.value)}
            onBlur = {(evt)=>
                onChangeElement('fieldPassword', evt.target.value)}
                className = {
                
                    (!checkValues.fieldPassword.valid && checkValues.fieldPassword.touched)
                    ?
                        Styles.error
                    :
                        (checkValues.fieldPassword.valid)
                        ?
                            Styles.succes
                        :
                            ""
                }
        />

         <div 
            
            className={Styles.field}>
            <Button 
                disabled = {(checkValues.fieldEmail.valid && checkValues.fieldPassword.valid)? false: true}
                onClick={onLogin} 
            >
                Log-in
            </Button>
        </div>
        
        <button 
            onClick={onLk}
            disabled = {(checkValues.fieldEmail.valid && checkValues.fieldPassword.valid)? false: true}
        >
            войти в лк 
        </button>
      </div>

    );

}
export default Validator;
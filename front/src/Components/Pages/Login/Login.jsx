import { useState } from "react";
import Requests from "../../Requests";
import Button from "../../UI/Button/Button";
import InputText from "../../UI/InputText/InputText";
import Styles from "./Login.module.scss";
import Validator from "../../Validator";
import Shape from "../../images/login/shape.png";

function Login(props) {

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



    let auth = props.auth;
    function onLk(){
        Requests(
          {
              method:'post', 
              url: "/lk",
              data: {token: auth.token},
              callback: access
          }
        )
    }
  
    function access(data){
      console.log(data);
    } 

    function onLogin(data){

        Requests(
            {
                method:'post', 
                url: "/login",
                data: {email: data.email, password: data.password},
                callback: props.setAuthData
            }
        )
            
    }

  function saveState(data, fieldElement){
        
    let copy = Object.assign({}, checkValues);
    copy[fieldElement].value = data[fieldElement].value;
    copy[fieldElement].touched = data[fieldElement].touched;
    copy[fieldElement].valid = data[fieldElement].valid;
    copy[fieldElement].msgFaild = data[fieldElement].msgFaild;

    checkSet(copy);
  }

    

    return (
      <div className={Styles.Login}>
        <div className={Styles.wrap}>
          <div className={Styles.image}>
            <img src={Shape} alt="" />
          </div>
          <div className={Styles.form}>
            <InputText 
                
                type="text" 
                placeholder="Введите email" 
                onChange = {(evt)=>{
                  Validator(
                    {
                      fieldElement: "fieldEmail",
                      event: evt.target.value,
                      checkValues: checkValues,
                      callback: saveState,
                    }
                  )
                }}
                onBlur = {(evt)=>{
                  Validator(
                    {
                      fieldElement: "fieldEmail",
                      event: evt.target.value,
                      checkValues: checkValues,
                      callback: saveState,
                    }
                  )
                }}
                className = {
                    
                    (!checkValues.fieldEmail.valid && checkValues.fieldEmail.touched)
                    ?
                        Styles.error
                    :
                        (checkValues.fieldEmail.valid)
                        ?
                          Styles.succes
                        :
                          Styles.form_input
                }
                checkValues = {checkValues.fieldEmail}

            />

            <InputText 
                type="password" 
                placeholder="Введите пароль"
                onChange = {(evt)=>{
                  Validator(
                    {
                      fieldElement: "fieldPassword",
                      event: evt.target.value,
                      checkValues: checkValues,
                      callback: saveState,
                    }
                  )
                }}
                onBlur = {(evt)=>{
                  Validator(
                    {
                      fieldElement: "fieldPassword",
                      event: evt.target.value,
                      checkValues: checkValues,
                      callback: saveState,
                    }
                  )
                }}
                    className = {
                    
                        (!checkValues.fieldPassword.valid && checkValues.fieldPassword.touched)
                        ?
                            Styles.error
                        :
                            (checkValues.fieldPassword.valid)
                            ?
                                Styles.succes
                            :
                                Styles.form_input
                    }
                    
                checkValues = {checkValues.fieldPassword}
            />
            <div className={Styles.buttonfield}>
              <div className={Styles.openAccess}>
                  
                  <Button 
                  
                  onClick={onLogin}
                  >
                      Войти
                  </Button>
              </div>
            </div>
          </div>   
        </div>

      </div>
    );
  }
      
  export default Login;
  

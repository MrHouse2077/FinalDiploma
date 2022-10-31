import { useState } from "react";
import Requests from "../../Requests";
import Button from "../../UI/Button/Button";
import InputText from "../../UI/InputText/InputText";
import Styles from "./Login.module.scss";
import Validator from "./Validator";





function Login(props) {
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

    function onLogin(){

        Requests(
            {
                method:'post', 
                url: "/login",
                data: {email: "admin@mail.ru", password: "123"},
                callback: props.setAuthData
            }
        )
            
    }

    

    return (
      <Validator onLogin={onLogin} onLk={onLk}/>
    );
  }
  
  export default Login;
  
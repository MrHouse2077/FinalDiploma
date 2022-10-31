import { useState } from "react";
import Requests from "../../Requests";
import Button from "../../UI/Button/Button";
import InputText from "../../UI/InputText/InputText";
import Styles from "./Login.module.scss";
import Validator from "./Validator";





function Login(props) {

    let stateApp = props.stateApp;
    let [auth, setAuth] = useState(stateApp);
    
    let setAuthData = (data)=>{
        let copy = Object.assign([], auth);
        
        copy.token = data.token;
        copy.email = data.email;
        copy.name = data.name;

        setAuth(copy);
        console.log(copy);
    }


    function onLk(){
      console.log('onLk');
        // Requests(
        //   {
        //       method:'post', 
        //       url: "/lk",
        //       data: {token: auth.token},
        //       callback: access
        //   }
        // )
      }
  
      function access(data){
        console.log(data);
      } 

    function onLogin(){
      console.log('onLogin');
        // Requests(
        //     {
        //         method:'post', 
        //         url: "/login",
        //         data: {email: "admin@mail.ru", password: "123"},
        //         callback: setAuthData
        //     }
        // )
            
    }

    

    return (
      <Validator onLogin={onLogin} onLk={onLk}/>
    );
  }
  
  export default Login;
  
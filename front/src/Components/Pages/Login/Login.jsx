import { useState } from "react";
import Requests from "../../Requests";
import Button from "../../UI/Button/Button";
import InputText from "../../UI/InputText/InputText";
import Styles from "./Login.module.scss";





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
                callback: setAuthData
            }
        )
            
    }

    

    return (
      <div className="Login">
        
        <InputText type="text" placeholder="Введите email"/>
        <InputText type="password" placeholder="Введите пароль"/>

        <div onClick={onLogin} className={Styles.field}>
            <Button>Log-in</Button>
        </div>
        
        <button onClick={onLk}>войти в лк</button>
      </div>
    );
  }
  
  export default Login;
  
import Requests from "../../Request"
import Button from "../../UI/Button/Button"
import InputText from "../../UI/InputText/InputText"
import Styles from "./Login.module.scss"
function Login(){

  function onLogin(){
    Request(
      {
        method: "get",
        url: "/main-menu",
      }
    )
  }

  return(
    <div className={Styles.Login}>

      <InputText type="text" placeholder="Введите имя"/>
      <InputText type="password" placeholder="Введите пароль"/>
      <div onClick={onLogin} className={Styles.field}>
        <Button >Log-in</Button>
      </div>
    </div>
  )
}
export default Login
import Styles from "./InputText.module.scss"
function InputText(props){
let placeholder = props.placeholder;
let type = props.type;
  return(
    <div className="InputText">
      <input type={type} placeholder={placeholder}/>
    </div>
  )
}
export default InputText
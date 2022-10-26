
import Styles from "./InputText.module.scss";

function InputText(props) {
    
    let type = props.type;
    let placeholder = props.placeholder;

    return (
      <div className="InputText">
        
        <input type={type} placeholder={placeholder}/>
        
      </div>
    );
  }
  
  export default InputText;
  
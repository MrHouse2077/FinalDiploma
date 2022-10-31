
import Styles from "./InputText.module.scss";

function InputText(props) {
    
    let type = props.type;
    let placeholder = props.placeholder;
    let onChange = props.onChange;
    let className = props.className;
    let onBlur = props.onBlur;

    return (
      <div className="InputText">
        
        <input 
          type={type} 
          placeholder={placeholder}
          onChange = {onChange}
          className= {className}
          onBlur = {onBlur}
        />
        
      </div>
    );
  }
  
  export default InputText;

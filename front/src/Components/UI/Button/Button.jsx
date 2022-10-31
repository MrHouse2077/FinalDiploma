
import Styles from "./Button.module.scss";

function Button(props) {
    
  let disabled = props.disabled
  let onClick = props.onClick

    return (
      <div className="Button">
        
        <button 
          disabled = {disabled}
          onClick = {onClick}
        >
          {props.children}
           
        </button>
        
      </div>
    );
  }
  
  export default Button;
  
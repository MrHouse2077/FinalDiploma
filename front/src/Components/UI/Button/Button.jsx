
import Styles from "./Button.module.scss";

function Button(props) {
    
  let onClick = props.onClick

    return (
      <div className="Button">
        
        <button 
          onClick = {onClick}
        >
          {props.children}
           
        </button>
        
      </div>
    );
  }
  
  export default Button;
  

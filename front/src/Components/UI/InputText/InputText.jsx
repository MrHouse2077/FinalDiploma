
import Styles from "./InputText.module.scss";

function InputText(props) {
    
    let type = props.type;
    let placeholder = props.placeholder;
    let onChange = props.onChange;
    let className = props.className;
    let onBlur = props.onBlur;
    let checkValues = props.checkValues;
    // let msgFaildFlag = props.msgFaildFlag;

    function checkProperty(){
      if(!checkValues.valid)
      console.log (checkValues.valid);
      return false;
    }
    return (
      <div className={Styles.InputText}>
        
        <input 
          type={type} 
          placeholder={placeholder}
          onChange = {onChange}
          className= {className}
          onBlur = {onBlur}
        />
        <p
          className={

            (checkValues.msgFaild === null)
            ?
              Styles.nonActive
            :
              (!checkValues.valid)
              ?
                Styles.active
              :
                Styles.nonActive

          }  
        >
          {checkValues.msgFaild}
        </p>
        
      </div>
    );
  }
  
  export default InputText;
  

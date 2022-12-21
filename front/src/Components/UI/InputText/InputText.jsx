
import { useEffect } from "react";
import { useState } from "react";
import Styles from "./InputText.module.scss";

function InputText(props) {
    let[defaultValue, setdefault] = useState("")
    let type = props.type;
    let placeholder = props.placeholder;
    let onChange = props.onChange;
    let className = props.className;
    let onBlur = props.onBlur;
    let checkValues = props.checkValues;
    function defInt(){
      if(props.defaultValue != undefined){
          let copy = Object.assign({}, defaultValue);
          copy = props.defaultValue;
          setdefault(copy);
      }
    }
    

    useEffect(() => {
      defInt();
    }, []);
    return (
      <div className={Styles.InputText}>
        
        <input 
          type={type} 
          placeholder={placeholder}
          onChange = {onChange}
          className= {className}
          onBlur = {onBlur}
          defaultValue={defaultValue}
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
  

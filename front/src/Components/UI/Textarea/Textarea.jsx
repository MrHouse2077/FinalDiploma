import Styles from "./Textarea.module.scss";

function Textarea(props) {
    
    let placeholder = props.placeholder;
    let onChange = props.onChange;
    let className = props.className;
    let onBlur = props.onBlur;
    let checkValues = props.checkValues;
   

  
    return (
      <div className={Styles.Textarea}>
        
        <textarea
          placeholder={placeholder}
          onChange = {onChange}
          className= {className}
          onBlur = {onBlur}
        ></textarea>
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
  
  export default Textarea;
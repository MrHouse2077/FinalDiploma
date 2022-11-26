
import Styles from "./Select.module.scss";

function Select(props) {
    
    let selected = props.selected;
    let className = props.className;
    let selectList = props.selectList;
    let checkValues = props.checkValues;
  
    return (
      <div className={Styles.small_select}>
        
        <select
          className= {className}
        ></select>
        
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
  
  export default Select;
  

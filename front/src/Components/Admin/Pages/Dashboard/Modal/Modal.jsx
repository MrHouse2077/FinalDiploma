import Styles from "./Modal.module.scss";



function Modal(props){

    return(
        <div className={props.active ? Styles.modalActive : Styles.modal } onClick={() => props.setActive(false)}>
            <div className={Styles.modal_content} onClick={(evt) => evt.stopPropagation()}>
                {props.children}
            </div>
        </div>
    );
}

export default Modal;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import Styles from "./Element.module.scss";
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro'
function Element(props){
    let product = props.product;
    return (
        <div className={Styles.Element}>
            <div className={Styles.image}>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEUAXEdZzPuxAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC" alt="" />
            </div>
            <div className={Styles.wrap_bottom}>
                <div className={Styles.product_info}>
                    <NavLink className={Styles.product_link}>
                        <h5 className={Styles.product_name}>{product.name}</h5>
                    </NavLink>

                </div>
                <div 
                    className={Styles.button}
                    data-id = {product.id}    
                >
                    <NavLink className={Styles.product_link}>
                        <span>Read more</span>
                    </NavLink>
                    <FontAwesomeIcon className={Styles.btnArrows} icon={solid('angles-right')} />
                </div>
            </div>
        </div>
    );
}
export default Element;
import { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Styles from "./Product.module.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import ProductImage from "../../../../images/product/product-5.jpg"

function Product(props){

    let product = props.product;
    let addProductToCart = props.addProductToCart

    function sendProductToCard(){
        addProductToCart(product.id);
    }

    return (

        <div className={Styles.Product}>
            <NavLink className={Styles.image_link}>
                <div className={Styles.image}>
                    <img src={ProductImage} alt="" />
                </div>
            </NavLink>
            {(product.tag != null)?
                <div className={Styles.tag}>
                    {product.tag}
                </div>
                :""
            }
            <div className={Styles.wrap_bottom}>
                <div className={Styles.product_info}>
                    <NavLink to={'/shop/'+ product.id} className={Styles.product_link}>
                        <h5 className={Styles.product_name}>{product.name}</h5>
                    </NavLink>
                    <h6 className={Styles.price}>{product.price} руб</h6>

                </div>
                <div 
                    className={Styles.button}
                    onClick={sendProductToCard}
                    data-id = {product.id}    
                >
                    <span>Add to cart</span>
                    <FontAwesomeIcon className={Styles.btnArrows} icon={solid('angles-right')} />
                </div>
            </div>
        </div>

    );
}

export default Product;
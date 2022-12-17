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
        addProductToCart(product.id, product.count);
    }
    function sendProductToWish(){
        
    }
    return (

        <div className={Styles.Product}>
            <div className={Styles.Favorite} onClick={sendProductToWish}>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className={Styles.bi+" "+Styles.bi_heart} viewBox="0 0 16 16">
                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                </svg>
            </div>
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
                    <div className={Styles.price_count}>
                        <h6 className={Styles.price}>₽ {product.price}</h6>
                        <span>Available to order: {product.count}</span>
                    </div>

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
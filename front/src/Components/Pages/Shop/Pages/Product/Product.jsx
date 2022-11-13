import { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Styles from "./Product.module.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import ProductImage from "../../../../images/product/product-5.jpg"

function Product(){


    return (

        <div className={Styles.Product}>
            <NavLink className={Styles.image_link}>
                <div className={Styles.image}>
                    <img src={ProductImage} alt="" />
                </div>
            </NavLink>

            <div className={Styles.tag}>
                Tag
            </div>
            <div className={Styles.wrap_bottom}>
                <div className={Styles.product_info}>
                    <NavLink className={Styles.product_link}>
                        <h5 className={Styles.product_name}>Prodct name</h5>
                    </NavLink>
                    <h6 className={Styles.price}>Price</h6>

                </div>
                <div className={Styles.button}>
                    <span>Buy Now </span>
                    <FontAwesomeIcon className={Styles.btnArrows} icon={solid('angles-right')} />
                </div>
            </div>
        </div>

    );
}

export default Product;
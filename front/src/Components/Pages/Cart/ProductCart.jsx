import { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Styles from "./Cart.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import MainPhoto from '../../../Components/images/product/product-5.jpg'

function ProductCart(props){

    let product = props.product;
    return (
        <tr className={Styles.ProductCart}>
            <td>1</td>
            <td className={Styles.imgProduct}><img src={MainPhoto} width="150" height="150" alt=""/></td>
            <td className={Styles.nameProduct}>{product.name}</td>
            <td className={Styles.paramProduct}>Parameters</td>
            <td className={Styles.unitPriceProduct}>{(product.price != undefined )? product.price : product.old_price} ₽</td>
            <td className={Styles.imgProduct}>
                <span className={Styles.deletCount}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className={Styles.bi_dash_square} viewBox="0 0 16 16">
                        <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                        <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
                    </svg>
                </span> 
                <span>{1}</span> 
                <span className={Styles.addCount}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className={Styles.bi_plus_square} viewBox="0 0 16 16">
                        <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                    </svg>
                </span> 
            </td>
            <td className={Styles.imgProduct}>{1000} ₽</td>
            <td className={Styles.imgProduct}>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className={Styles.bi_x_lg} viewBox="0 0 16 16">
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
            </svg>
            </td> 
        </tr>

    );
}

export default ProductCart;
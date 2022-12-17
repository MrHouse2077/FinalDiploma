import { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Styles from "./Cart.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro'

function ProductCart(props){

    // let product = props.product;
    // let addProductToCart = props.addProductToCart

    // function sendProductToCard(){
    //     addProductToCart(product.id);
    // }

    return (

        <tr>
            {/* <td>1</td>
            <td>{product.main_photo}</td>
            <td>{product.name}</td>
            <td>Parameters</td>
            <td>{(product.price != undefined )? product.price : product.old_price} ₽</td>
            <td><button>+</button> <span>{1}</span> <button>+</button></td>
            <td>{1000} ₽</td>
            <td>x</td> */}
        </tr>

    );
}

export default ProductCart;
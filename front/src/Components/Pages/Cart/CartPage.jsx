import { useState } from "react";
import { useParams } from "react-router-dom";
import DefaultLayout from "../../Layouts/DefaultLayout/DefaultLayout";
import Styles from "./Cart.module.scss";
function CartPage(props){
    let [dataCart, setCart] = useState({
        products: []
    });
    return (
        <div>
            <DefaultLayout title="Cart">
                <div className={Styles.CartPage}>
                   Элементов: {props.dataApp.cart.counItem}
                </div>
            </DefaultLayout>
        </div>
    );
}
export default CartPage;
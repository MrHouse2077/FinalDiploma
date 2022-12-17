import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DefaultLayout from "../../Layouts/DefaultLayout/DefaultLayout";
import Styles from "./Cart.module.scss";
import Table from 'react-bootstrap/Table';
import ProductCart from "./Product";
import Requests from "../../Requests";
function CartPage(props){
    let dataApp = props.dataApp;
    let [dataCart, setCart] = useState({
        products: [],
        loader: true,
    });
    function renderCart(serverRequest){
        let copy = Object.assign([], dataCart);
            copy.products = serverRequest.data;
            copy.loader = false;
            setCart(copy);
            console.log(dataApp);
    }
    //UseEffect for get products from DB using array with params products from StateApp Cart
    useEffect(() => {
        Requests({
            method: 'post', 
            url: '/cart',
            data: props.dataApp.cart.products,
            callback:renderCart 
        });
    }, []);
    return (
        <div>
            <DefaultLayout title="Cart">
                <div className={Styles.CartPage+" wrap"}>
                    Элементов: {props.dataApp.cart.counItem}
                    <div className={Styles.tableWrap}>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Images</th>
                                <th>Product</th>
                                <th>Parameters</th>
                                <th>Unit Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                                <th>Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            
                                <ProductCart />
                        </tbody>
                        </Table>
                    </div>
                </div>
            </DefaultLayout>
        </div>
    );
}
export default CartPage;
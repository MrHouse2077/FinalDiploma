import { useEffect, useState } from "react";
import { json, useParams } from "react-router-dom";
import DefaultLayout from "../../Layouts/DefaultLayout/DefaultLayout";
import Styles from "./Cart.module.scss";
import Table from 'react-bootstrap/Table';
import ProductCart from "./ProductCart";
import Requests from "../../Requests";
import Loader from "../../Loader/Loader";
function CartPage(props){
    let [dataCart, setCart] = useState({
        loader: true,
        productsObj: [],
        status: "",
    });
    function render(){
        if(dataCart.status === "201"){

            let copy = Object.assign([], dataCart);
            copy.loader = false;
            setCart(copy);
            console.log("sucss")
        }
        if(dataCart.loader){
            sendRequestCart();
            console.log("here")
            console.log(props.dataApp);
        }
    }
    //save data about product in cart from server
    function renderCart(serverRequest){
        if(serverRequest.data != null){
            let copy = Object.assign([], dataCart);
            copy.productsObj = [];
            copy.loader = false;
            copy.status = serverRequest.code;
            copy.productsObj = serverRequest.data;
            setCart(copy);
            console.log(dataCart);
        }
    }
    //function for send Requests to server with data Cart
    function sendRequestCart(){
        console.log(props.dataApp);
        Requests({
            method: 'post', 
            url: '/cart',
            data: ["products", props.dataApp.cart.products],
            callback:renderCart 
        });
        console.log(dataCart);
    }
    //UseEffect for get products from DB using array with params products from StateApp Cart
    useEffect(() => {
        sendRequestCart();
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
                        </tbody>
                        </Table>
                        {(Number(localStorage.getItem("CartCount")) != 0)? <div className={Styles.wrapLoader}><Loader/></div>: "cart empty"} 
                    </div> 
                </div>
            </DefaultLayout>
        </div>
    );
}
export default CartPage;
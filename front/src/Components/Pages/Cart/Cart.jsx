import Styles from "./Cart.module.scss";

import { NavLink } from "react-router-dom";
import DefaultLayout from "../../Layouts/DefaultLayout/DefaultLayout";
import React, { useState, useEffect } from 'react';

function Cart(props){
    //Заглушка данных для filter 
    let [dataCart, setCard] = useState({

    });
    let chengeStatusFilter = null;
    let filterParams = {
        minPriceProduct: null,
        maxPriceProduct: null,
        secelctPriceProduct: null,
    };
    return (
        <div>
             <DefaultLayout filterShow={false} filterParams={filterParams} chengeStatusFilter={chengeStatusFilter}>
                <div className={Styles.Cart}>
                    cart wrapper
                    <form action="">
                        <div>
                            wrapper for table hidden
                                <table>
                                       <tr className={Styles.tr}>
                                          <th className={Styles.th}>Images</th>
                                          <th className={Styles.th}>Product</th>
                                          <th className={Styles.th}>Unit Price</th>
                                          <th className={Styles.th}>Quantity</th>
                                          <th className={Styles.th}>Remove</th>
                                       </tr>
                                       <tr className={Styles.tr}>
                                          <td className={Styles.td}>
                                            
                                            <img src="https://themepure.net/template/futexo-prev/futexo/index.html" alt=""/>
                                          
                                          </td>
                                          <td className={Styles.td}>
                                            Weight Trump
                                          </td>
                                          <td className={Styles.td}>
                                            <span className={Styles.td}>$10.50</span>
                                          </td>
                                          <td className={Styles.td}>
                                                <div class="cart-plus-minus cdcart-plus-minus"><div class="dec qtybutton">-</div><div class="inc qtybutton">+</div><div class="dec qtybutton">-</div><div class="inc qtybutton">+</div></div>
                                          </td>
                                          <td className={Styles.td}>
                                            <button>x</button>
                                          </td>
                                       </tr>
                              </table>
                        </div>
                        <div>
                            functions for cart

                        </div>
                        <div>
                            wrapper for total price 
                            <div>
                                cart total 
                            </div>
                        </div>
                    </form>
                </div>
             </DefaultLayout>
        </div>
    );
}

export default Cart;
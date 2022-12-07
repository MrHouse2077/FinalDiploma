import { useParams } from "react-router-dom";
import DefaultLayout from "../../Layouts/DefaultLayout/DefaultLayout";
import Styles from "./Cart.module.scss";
function CartPage(){
    let paramsData =  useParams();
    let data = paramsData.data;
    return (
        <div>
            <DefaultLayout title="Cart">
                <div className={Styles.CartPage}>
                   Элементов: {data.itemInCart}
                </div>
            </DefaultLayout>
        </div>
    );
}
export default CartPage;
import DefaultLayout from "../../Layouts/DefaultLayout/DefaultLayout";
import Styles from "./Cart.module.scss";
function CartPage(){
    return (
        <div>
            <DefaultLayout title="Cart">
                <div className={Styles.CartPage}>
                   cart 
                </div>
            </DefaultLayout>
        </div>
    );
}
export default CartPage;
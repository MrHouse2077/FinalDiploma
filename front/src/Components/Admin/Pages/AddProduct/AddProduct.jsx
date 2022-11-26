import Dashboard from "../Dashboard/Dashboard";
import Styles from "./AddProduct.module.scss";

function AddPrduct(){
    return(
        <div>
            <Dashboard></Dashboard>
            
            <div className={Styles.AddProduct}>Add Product</div>
            
        </div>
    )

}
export default AddPrduct;
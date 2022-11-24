import DefaultLayout from "../../Layouts/DefaultLayout/DefaultLayout";
import { NavLink } from "react-router-dom";
import Footer from "../../Layouts/Footer/Footer";
import Styles from "./Infor.module.scss";


function Infor() {
    return (
        <div className={Styles.Infor}>
            <DefaultLayout>
                <div className="wrap">
                    <h1>Наши проекты</h1>
                </div>
                
            </DefaultLayout>
        </div>
    );
}
export default Infor;
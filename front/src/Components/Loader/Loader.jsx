import { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import Styles from "./Loader.module.scss";

import classNames from 'classnames';




function Loader(){


    return (
        <div className={Styles.Loader}>
            <div className={Styles.content}>
                <div className={Styles.loading}>
                    <p>loading</p>
                    <span></span>
                </div>
            </div>
        </div>
    );
}

export default Loader;
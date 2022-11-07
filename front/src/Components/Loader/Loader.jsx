import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Styles from "./Loader.module.scss";

import classNames from 'classnames';




function Loader(){


    return (
        <div className={Styles.Loader}>
            {/* <div className={Styles.pencil}>
                <div className={Styles.pencil__ball_point}></div>
                <div className={Styles.pencil__cap}></div>
                <div className={Styles.pencil__cap_base}></div>
                <div className={Styles.pencil__middle}></div>
                <div className={Styles.pencil__eraser}></div>
            </div>
            <div className={Styles.line}></div>
            <h2>Page Loading...Please Wait</h2> */}


            <div class='tetrominos'>
                <div className={classNames(Styles.tetromino, Styles.box1)}></div>
                <div className={classNames(Styles.tetromino, Styles.box2)}></div>
                <div className={classNames(Styles.tetromino, Styles.box3)}></div>
                <div className={classNames(Styles.tetromino, Styles.box4)}></div>
            </div>
        </div>
    );
}

export default Loader;
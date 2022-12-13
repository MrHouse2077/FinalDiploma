import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

import Requests from "../../../Requests";
// import './Style.css';

import classNames from 'classnames';
import AddCategory from "./AddCategory";
import Loader from "../../../Loader/Loader";
import Styles from "./Dashboard.module.scss";
import Nina from "../../../../images/Nina.jpg";
import Logo from "../../../../images/brand-white.svg"


// import { FontAwesomeIcon } from '@fortawesomereact-fontawesome';
// import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import Graph from "../Graph/Graph";

import UsersMap from "./UsersMap";
import AdminTemplate from "../AdminTemplate/AdminTemplate";


function Dashboard(props){
   return(
    <div>
        <AdminTemplate></AdminTemplate>
    </div>
    
   )
}

export default Dashboard;
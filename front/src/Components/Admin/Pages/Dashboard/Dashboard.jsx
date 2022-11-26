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



function Dashboard(props){
    const navigate = useNavigate();
    useEffect(() => {     
        let token = localStorage.getItem('token');

        if(!token){
            navigate('/login');
        }

    });

    return (

        <div>
            <div className={Styles.HeaderTop}>
                <div className="container-fluid">
                    <div className="d-flex justify-content-between">
                        <div className="d-flex justify-content-between">
                            <button type = "button" className={Styles.BtnSearch1}>X</button>
                            <input type = "text" className = {Styles.Search}/>
                            <button type = "button" className={Styles.BtnSearch2}>O</button>
                            <div className={Styles.Links}>
                                <NavLink className = {Styles.HeaderNavlinks}>
                                    <span>Notification</span>
                                    <span className = {classNames(Styles.Badge, "bg-danger")}>3</span>
                                    {/* <FontAwesomeIcon icon={regular('bell')} /> */}
                                </NavLink>
                                <NavLink className = {Styles.HeaderNavlinks}>
                                    <span>Chat</span>
                                    <span className = {classNames(Styles.Badge, "bg-success")}>3</span>
                                    <i></i>
                                </NavLink>
                                <NavLink className = {Styles.HeaderNavlinks}>
                                    
                                    <span>+</span>
                                </NavLink>
                                <NavLink className = {Styles.HeaderNavlinks}>
                                    <span>grid</span>
                                    <i></i>
                                </NavLink>
                                <NavLink className = {Styles.HeaderNavlinks}>
                                    <img src = {Nina} className = {Styles.Avatar}/>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={classNames(Styles.AppSidebar, Styles.colored)}>
                <div className={Styles.SidebarHeader}>
                    <NavLink className={Styles.HeaderBrand}>
                        <div className={Styles.LogoImg}>
                            <img src={Logo} className={Styles.HeaderBrandImg} alt="lavalite"/>
                        </div>
                        <span className={Styles.Text}>ThemeKit</span>
                    </NavLink>
                    <button type="button" className = {Styles.NavToggle}><i></i></button>
                    <button type="button" className = {Styles.NavClose}><i></i></button>

                </div>

                <div className={Styles.SidebarContent}>
                    <div className={Styles.NavContainer}>
                        <nav className={Styles.NavigationMain}>
                            <div className={Styles.NavLavel}>Navigation</div>
                            <div className={Styles.NavItem}>
                                <NavLink to = "/admin/addcategory">
                                    <span>Добавление категорий</span>
                                </NavLink>
                            </div>
                            <div className={Styles.NavItem}>
                                <NavLink to = "/admin/addproduct">
                                    <span>Добавление товаров</span>
                                </NavLink>
                            </div>
                            <div className={Styles.NavItem}>
                                <NavLink>
                                    <span>Виджеты</span>
                                </NavLink>
                            </div>
                            <div className={Styles.NavLavel}>Support</div>
                            <div className={Styles.NavItem}>
                                <NavLink>
                                    <span>Documentation</span>
                                </NavLink>
                            </div>
                            <div className={Styles.NavItem}>
                                <NavLink>
                                    <span>Submit Issue</span>
                                </NavLink>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default Dashboard;
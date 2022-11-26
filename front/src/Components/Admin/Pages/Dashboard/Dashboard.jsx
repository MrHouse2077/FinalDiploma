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

        //Requests()

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

                {/* <header class="header-top">
                    <div class="container-fluid">
                        <div class="d-flex justify-content-between">
                            <div class="top-menu d-flex align-items-center">
                                <button type="button" class="btn-icon mobile-nav-toggle d-lg-none"><span></span></button>
                                <div class="header-search">
                                    <div class="input-group">
                                        <span class="input-group-addon search-close"><i class="ik ik-x"></i></span>
                                        <input type="text" class="form-control"/>
                                        <span class="input-group-addon search-btn"><i class="ik ik-search"></i></span>
                                    </div>
                                </div>
                                <button type="button" id="navbar-fullscreen" class="nav-link"><i class="ik ik-maximize"></i></button>
                            </div>
                            <div class="top-menu d-flex align-items-center">
                                <div class="dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" id="notiDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="ik ik-bell"></i><span class="badge bg-danger">3</span></a>
                                    <div class="dropdown-menu dropdown-menu-right notification-dropdown" aria-labelledby="notiDropdown">
                                        <h4 class="header">Notifications</h4>
                                        <div class="notifications-wrap">
                                            <a href="#" class="media">
                                                <span class="d-flex">
                                                    <i class="ik ik-check"></i> 
                                                </span>
                                                <span class="media-body">
                                                    <span class="heading-font-family media-heading">Invitation accepted</span> 
                                                    <span class="media-content">Your have been Invited ...</span>
                                                </span>
                                            </a>
                                            <a href="#" class="media">
                                                <span class="d-flex">
                                                    <img src="../img/users/1.jpg" class="rounded-circle" alt=""/>
                                                </span>
                                                <span class="media-body">
                                                    <span class="heading-font-family media-heading">Steve Smith</span> 
                                                    <span class="media-content">I slowly updated projects</span>
                                                </span>
                                            </a>
                                            <a href="#" class="media">
                                                <span class="d-flex">
                                                    <i class="ik ik-calendar"></i> 
                                                </span>
                                                <span class="media-body">
                                                    <span class="heading-font-family media-heading">To Do</span> 
                                                    <span class="media-content">Meeting with Nathan on Friday 8 AM ...</span>
                                                </span>
                                            </a>
                                        </div>
                                        <div class="footer"><a href="javascript:void(0);">See all activity</a></div>
                                    </div>
                                </div>
                                <button type="button" class="nav-link ml-10 right-sidebar-toggle"><i class="ik ik-message-square"></i><span class="badge bg-success">3</span></button>
                                <div class="dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" id="menuDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="ik ik-plus"></i></a>
                                    <div class="dropdown-menu dropdown-menu-right menu-grid" aria-labelledby="menuDropdown">
                                        <a class="dropdown-item" href="#" data-toggle="tooltip" data-placement="top" title="Dashboard"><i class="ik ik-bar-chart-2"></i></a>
                                        <a class="dropdown-item" href="#" data-toggle="tooltip" data-placement="top" title="Message"><i class="ik ik-mail"></i></a>
                                        <a class="dropdown-item" href="#" data-toggle="tooltip" data-placement="top" title="Accounts"><i class="ik ik-users"></i></a>
                                        <a class="dropdown-item" href="#" data-toggle="tooltip" data-placement="top" title="Sales"><i class="ik ik-shopping-cart"></i></a>
                                        <a class="dropdown-item" href="#" data-toggle="tooltip" data-placement="top" title="Purchase"><i class="ik ik-briefcase"></i></a>
                                        <a class="dropdown-item" href="#" data-toggle="tooltip" data-placement="top" title="Pages"><i class="ik ik-clipboard"></i></a>
                                        <a class="dropdown-item" href="#" data-toggle="tooltip" data-placement="top" title="Chats"><i class="ik ik-message-square"></i></a>
                                        <a class="dropdown-item" href="#" data-toggle="tooltip" data-placement="top" title="Contacts"><i class="ik ik-map-pin"></i></a>
                                        <a class="dropdown-item" href="#" data-toggle="tooltip" data-placement="top" title="Blocks"><i class="ik ik-inbox"></i></a>
                                        <a class="dropdown-item" href="#" data-toggle="tooltip" data-placement="top" title="Events"><i class="ik ik-calendar"></i></a>
                                        <a class="dropdown-item" href="#" data-toggle="tooltip" data-placement="top" title="Notifications"><i class="ik ik-bell"></i></a>
                                        <a class="dropdown-item" href="#" data-toggle="tooltip" data-placement="top" title="More"><i class="ik ik-more-horizontal"></i></a>
                                    </div>
                                </div>
                                <button type="button" class="nav-link ml-10" id="apps_modal_btn" data-toggle="modal" data-target="#appsModal"><i class="ik ik-grid"></i></button>
                                <div class="dropdown">
                                    <a class="dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><img class="avatar" src="../img/user.jpg" alt=""/></a>
                                    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">
                                        <a class="dropdown-item" href="profile.html"><i class="ik ik-user dropdown-icon"></i> Profile</a>
                                        <a class="dropdown-item" href="#"><i class="ik ik-settings dropdown-icon"></i> Settings</a>
                                        <a class="dropdown-item" href="#"><span class="float-right"><span class="badge badge-primary">6</span></span><i class="ik ik-mail dropdown-icon"></i> Inbox</a>
                                        <a class="dropdown-item" href="#"><i class="ik ik-navigation dropdown-icon"></i> Message</a>
                                        <a class="dropdown-item" href="login.html"><i class="ik ik-power dropdown-icon"></i> Logout</a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </header> 
                */}

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



                {/* <div class="app-sidebar colored">
                    <div class="sidebar-header">
                        <a class="header-brand" href="index.html">
                            <div class="logo-img">
                               <img src="../src/img/brand-white.svg" class="header-brand-img" alt="lavalite"/> 
                            </div>
                            <span class="text">ThemeKit</span>
                        </a>
                        <button type="button" class="nav-toggle"><i data-toggle="expanded" class="ik ik-toggle-right toggle-icon"></i></button>
                        <button id="sidebarClose" class="nav-close"><i class="ik ik-x"></i></button>
                    </div>
                    
                    <div class="sidebar-content">
                        <div class="nav-container">
                            <nav id="main-menu-navigation" class="navigation-main">
                                <div class="nav-lavel">Navigation</div>
                                <div class="nav-item">
                                    <a href="../index.html"><i class="ik ik-bar-chart-2"></i><span>Добавление категорий</span></a>
                                </div>
                                <div class="nav-item">
                                    <a href="navbar.html"><i class="ik ik-menu"></i><span>Добавление товаров</span> <span class="badge badge-success">New</span></a>
                                </div>
                                <div class="nav-item has-sub">
                                    <a href="javascript:void(0)"><i class="ik ik-layers"></i><span>Виджеты</span> <span class="badge badge-danger">150+</span></a>
                                    <div class="submenu-content">
                                        <a href="widgets.html" class="menu-item">Basic</a>
                                        <a href="widget-statistic.html" class="menu-item">Statistic</a>
                                        <a href="widget-data.html" class="menu-item">Data</a>
                                        <a href="widget-chart.html" class="menu-item">Chart Widget</a>
                                    </div>
                                </div>
                                <div class="nav-lavel">Support</div>
                                <div class="nav-item">
                                    <a href="javascript:void(0)"><i class="ik ik-monitor"></i><span>Documentation</span></a>
                                </div>
                                <div class="nav-item">
                                    <a href="javascript:void(0)"><i class="ik ik-help-circle"></i><span>Submit Issue</span></a>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div> */}
            
                
                
            </div>
    );
}

export default Dashboard;
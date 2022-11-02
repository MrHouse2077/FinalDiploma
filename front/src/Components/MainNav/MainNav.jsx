import Styles from "./MainNav.module.scss";
import { NavLink } from 'react-router-dom';

import Search from "../Search/Search";


function MainNav(){
    return(
            <div className={Styles.MainNav}>
                <nav>
                    <ul>
                        <li>
                            <NavLink
                                to="/home"
                                className={Styles.nav_link}
                                style={({ isActive }) =>
                                isActive ? Styles.active : undefined
                                }
                            >
                            home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" className={Styles.nav_link}>
                                {({ isActive }) => (
                                <span
                                    className={
                                    isActive ? Styles.active : undefined
                                    }
                                >
                                    about
                                </span>
                                )}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/pages" className={Styles.nav_link}>
                                {({ isActive }) => (
                                <span
                                    className={
                                    isActive ? Styles.active : undefined
                                    }
                                >
                                    pages+
                                    <ul class={Styles.SubMenu}>
                                       <li>
                                            <NavLink to="/classes" className={Styles.nav_link}>
                                                {({ isActive }) => (
                                                <span
                                                    className={
                                                    isActive ? Styles.active : undefined
                                                    }
                                                >
                                                    classes
                                                </span>
                                                )}
                                            </NavLink>
                                       </li>
                                       <li>
                                            <NavLink to="/ClassesDetails" className={Styles.nav_link}>
                                                {({ isActive }) => (
                                                <span
                                                    className={
                                                    isActive ? Styles.active : undefined
                                                    }
                                                >
                                                    Classes Details
                                                </span>
                                                )}
                                            </NavLink>
                                       </li>
                                       <li>
                                            <NavLink to="/TeamDetails" className={Styles.nav_link}>
                                                {({ isActive }) => (
                                                <span
                                                    className={
                                                    isActive ? Styles.active : undefined
                                                    }
                                                >
                                                    Team Details
                                                </span>
                                                )}
                                            </NavLink>
                                       </li>
                                       <li>
                                            <NavLink to="/Team" className={Styles.nav_link}>
                                                {({ isActive }) => (
                                                <span
                                                    className={
                                                    isActive ? Styles.active : undefined
                                                    }
                                                >
                                                    Team
                                                </span>
                                                )}
                                            </NavLink>
                                       </li>
                                       <li>
                                            <NavLink to="/PricingPlan" className={Styles.nav_link}>
                                                {({ isActive }) => (
                                                <span
                                                    className={
                                                    isActive ? Styles.active : undefined
                                                    }
                                                >
                                                    Pricing Plan
                                                </span>
                                                )}
                                            </NavLink>
                                       </li>
                                       <li>
                                            <NavLink to="/Cart" className={Styles.nav_link}>
                                                {({ isActive }) => (
                                                <span
                                                    className={
                                                    isActive ? Styles.active : undefined
                                                    }
                                                >
                                                    Cart
                                                </span>
                                                )}
                                            </NavLink>
                                       </li>
                                       <li>
                                            <NavLink to="/Checkout" className={Styles.nav_link}>
                                                {({ isActive }) => (
                                                <span
                                                    className={
                                                    isActive ? Styles.active : undefined
                                                    }
                                                >
                                                    Checkout
                                                </span>
                                                )}
                                            </NavLink>
                                       </li>
                                       <li>
                                            <NavLink to="/Wishlist" className={Styles.nav_link}>
                                                {({ isActive }) => (
                                                <span
                                                    className={
                                                    isActive ? Styles.active : undefined
                                                    }
                                                >
                                                    Wishlist
                                                </span>
                                                )}
                                            </NavLink>
                                       </li>
                                    </ul>
                                </span>
                                )}
                                
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/shop" className={Styles.nav_link}>
                                {({ isActive }) => (
                                <span
                                    className={
                                    isActive ? Styles.active : undefined
                                    }
                                >
                                    shop+
                                    <ul class={Styles.SubMenu}>
                                       <li>
                                            <NavLink to="/Shop" className={Styles.nav_link}>
                                                {({ isActive }) => (
                                                <span
                                                    className={
                                                    isActive ? Styles.active : undefined
                                                    }
                                                >
                                                    shop
                                                </span>
                                                )}
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/ShopDetails" className={Styles.nav_link}>
                                                {({ isActive }) => (
                                                <span
                                                    className={
                                                    isActive ? Styles.active : undefined
                                                    }
                                                >
                                                    shop details
                                                </span>
                                                )}
                                            </NavLink>
                                       </li>
                                    </ul>
                                </span>
                                )}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/portfolio" className={Styles.nav_link}>
                                {({ isActive }) => (
                                <span
                                    className={
                                    isActive ? Styles.active : undefined
                                    }
                                >
                                    portfolio+
                                    <ul class={Styles.SubMenu}>
                                       <li>
                                            <NavLink to="/Portfolio" className={Styles.nav_link}>
                                                {({ isActive }) => (
                                                <span
                                                    className={
                                                    isActive ? Styles.active : undefined
                                                    }
                                                >
                                                    portfolio
                                                </span>
                                                )}
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/ShopDetails" className={Styles.nav_link}>
                                                {({ isActive }) => (
                                                <span
                                                    className={
                                                    isActive ? Styles.active : undefined
                                                    }
                                                >
                                                    portfolio details
                                                </span>
                                                )}
                                            </NavLink>
                                       </li>
                                    </ul>
                                </span>
                                )}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/blog" className={Styles.nav_link}>
                                {({ isActive }) => (
                                <span
                                    className={
                                    isActive ? Styles.active : undefined
                                    }
                                >
                                    Blog+
                                    <ul class={Styles.SubMenu}>
                                       <li>
                                            <NavLink to="/Blog" className={Styles.nav_link}>
                                                {({ isActive }) => (
                                                <span
                                                    className={
                                                    isActive ? Styles.active : undefined
                                                    }
                                                >
                                                    Blog
                                                </span>
                                                )}
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/BlogDetails" className={Styles.nav_link}>
                                                {({ isActive }) => (
                                                <span
                                                    className={
                                                    isActive ? Styles.active : undefined
                                                    }
                                                >
                                                    Blog details
                                                </span>
                                                )}
                                            </NavLink>
                                       </li>
                                    </ul>
                                </span>
                                )}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/contacts" className={Styles.nav_link}>
                                {({ isActive }) => (
                                <span
                                    className={
                                    isActive ? Styles.active : undefined
                                    }
                                >
                                    Contact
                                </span>
                                )}
                            </NavLink>
                        </li>
                        <li>
                            <Search />
                        </li>
                    </ul>
                    
                    </nav>
                    
            </div>
        );
}

export default MainNav;
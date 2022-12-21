import Styles from "./MainNav.module.scss";
import { NavLink } from 'react-router-dom';

import Search from "../Search/Search";
import CartIcon from "../Pages/Cart/Cart";
import Cart from "../Pages/Cart/Cart";
import ProfileIcon from "../Client/Page/Profile/ProfileIcon";


function MainNav(){
    return(
            <div className={Styles.MainNav}>
                <nav>
                    <ul>
                        <li>
                            <NavLink
                                to="/home"
                                className={Styles.nav_link}>
                                {({ isActive }) => (
                                <span
                                    className={
                                    isActive ? Styles.active : undefined
                                    }
                                >
                                    home
                                </span>
                                )}
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
                            <NavLink to="/shop" className={Styles.nav_link}>
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
                        <li className={Styles.profil_search_cart}>
                            <Search />
                            <Cart />
                            <ProfileIcon/>
                        </li>

                    </ul>
                    
                    </nav>
                    
            </div>
        );
}

export default MainNav;
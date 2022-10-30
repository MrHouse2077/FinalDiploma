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
                            <NavLink to="about" className={Styles.nav_link}>
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
                            <NavLink to="shop" className={Styles.nav_link}>
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
                            <NavLink to="blog" className={Styles.nav_link}>
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
                            <NavLink to="contacts" className={Styles.nav_link}>
                                {({ isActive }) => (
                                <span
                                    className={
                                    isActive ? Styles.active : undefined
                                    }
                                >
                                    Contacts
                                </span>
                                )}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="search" className={Styles.nav_link}>
                                <Search />
                            </NavLink>
                        </li>
                    </ul>
                    </nav>
            </div>
        );
}

export default MainNav;
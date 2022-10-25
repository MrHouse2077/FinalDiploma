import Styles from "./MainNav.module.scss";
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

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
                    </ul>
                    </nav>
            </div>
        );
}

export default MainNav;
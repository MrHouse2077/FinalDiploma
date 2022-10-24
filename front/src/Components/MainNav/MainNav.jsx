import Styles from "./MainNav.module.scss";
import { NavLink } from 'react-router-dom';

function MainNav(){
    return(
            <div className={Styles.MainNav}>
                <nav>
                    <ul>
                        <li>
                            <NavLink
                                to="/home"
                                style={({ isActive }) =>
                                isActive ? Styles.active : undefined
                                }
                            >
                            home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="shop"
                                className={({ isActive }) =>
                                isActive ? Styles.active : undefined
                                }
                            >
                                shop
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="blog">
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
                            <NavLink to="contacts">
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
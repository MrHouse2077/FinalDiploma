import Styles from "./MainNav.module.scss";
import { NavLink } from 'react-router-dom';

function MainNav(){
    return(
            <div className={Styles.MainNav}>
                <nav>
                    <ul>
                        <li>
                            <NavLink
                                to="messages"
                                style={({ isActive }) =>
                                isActive ? Styles.active : undefined
                                }
                            >
                            Messages
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="tasks"
                                className={({ isActive }) =>
                                isActive ? Styles.active : undefined
                                }
                            >
                                Tasks
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="tasks">
                                {({ isActive }) => (
                                <span
                                    className={
                                    isActive ? Styles.active : undefined
                                    }
                                >
                                    Tasks
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
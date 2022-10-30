import Styles from "../../MainNav/MainNav.module.scss";
import { NavLink } from 'react-router-dom';
function ContactUs() {
    return (
      <div className="ContactUs">
            <NavLink to="contacts" className={Styles.nav_link}>
                                {({ isActive }) => (
                                <span
                                    className={
                                    isActive ? Styles.active : undefined
                                    }
                                >
                                    Contact Us
                                </span>
                                )}
                            </NavLink>
      </div>
    );
  }
  
  export default ContactUs;
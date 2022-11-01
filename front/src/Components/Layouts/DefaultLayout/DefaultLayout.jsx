import Styles from './DefaultLayout.module.scss';

import { NavLink } from 'react-router-dom';

import MainNav from '../../MainNav/MainNav';
import SiteInfo from '../../SiteInfo/SiteInfo';


function DefaultLayout(props) {

    return (
        <div className={Styles.DefaultLayout}>
            <header>
                <div class = {Styles.HeaderFon}>
                    
                </div>
                <div className='header_content'>
                    <div className='wrap'>
                        <div className='logo_info'>
                            <img src="/logo.png" className='logo' />
                            <SiteInfo />
                        </div>
                        <MainNav />
                        
                        <div className='Login'>
                            <NavLink
                                to="/login"
                                className='loginBtn'
                            >
                                Login
                            </NavLink>
                        </div>
                    </div>

                    
                </div>
                
            </header>

            <section>
                {props.children}
            </section>

            {/* <footer>
                подвал
            </footer> */}
        </div>
    );

}

export default DefaultLayout;

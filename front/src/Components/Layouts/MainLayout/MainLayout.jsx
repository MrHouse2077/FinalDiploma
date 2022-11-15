import Styles from "./MainLayout.module.scss";

import { NavLink } from 'react-router-dom';

import SiteInfo from '../../SiteInfo/SiteInfo';
import Slider from '../../Slider/Slider';
import MainNav from '../../MainNav/MainNav';
import Search from '../../Search/Search';
import classNames from 'classnames';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function MainLayout(props) {

    return (
        <div className="MainLayout">
            <header>
                <div className='header_fon'>
                    <Slider />
                </div>
                <div className='header_content'>
                    <div className='wrap'>
                        <div className='logo_info'>
                            <NavLink to="/">
                            <img src="/logo.png" className='logo' />
                            </NavLink>
                            <SiteInfo />
                        </div>
                        <div className={Styles.NavBar}>
                            <MainNav />
                            
                            <div className='Login'>
                                <NavLink
                                    to="/login"
             
                                    //</div></div>className={'loginBtn'+(localStorage.getItem('bgc'))? ' '+localStorage.getItem('bgc'):'' }
                                    className={classNames(Styles.login, localStorage.getItem('bgc'))}
                                
                                >
                                    Login
                                    <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-double-right" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z"/>
                                        <path fill-rule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z"/>
                                    </svg>
                                    </span>
                                </NavLink>
                            </div>
                        </div>
                    </div>

                    <div>
                        {props.children}
                    </div>

                </div>

            </header>

            

        </div>
    );

}

export default MainLayout;

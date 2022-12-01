import Styles from './DefaultLayout.module.scss';

import { NavLink } from 'react-router-dom';


import MainNav from '../../MainNav/MainNav';
import SiteInfo from '../../SiteInfo/SiteInfo';

import Filter from '../../UI/Filter/Filter';
import classNames from 'classnames';

function DefaultLayout(props) {
    let titlePage = props.title;
    return (
        <div className={Styles.DefaultLayout}>
            <header>
                <div className = {Styles.HeaderFon}>
                    
                </div>
                <div className='header_content'>
                    <div className='wrap'>
                        <div className='logo_info'>
                            <img src="/logo.png" className='logo' />
                            <SiteInfo />
                        </div>
                        <div className={Styles.NavBar}>
                        <MainNav />
                        <div className='Login'>
                                <NavLink
                                    to="/login"
                                    className={classNames(Styles.login, localStorage.getItem('bgc'))}
                                
                                >
                                    Login
                                    <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-double-right" viewBox="0 0 16 16">
                                        <path d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z"/>
                                        <path d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z"/>
                                    </svg>
                                    </span>
                                </NavLink>
                        </div>
                        </div>
                        <div className = {Styles.BlockTitle}>
                            <h3>{titlePage}</h3>
                            <ul>
                                <li>
                                    <NavLink to="/home"
                                            className={Styles.nav_link}
                                            style={({ isActive }) =>
                                            isActive ? Styles.active : undefined
                                            }
                                        >
                                        <span>
                                            Home 
                                        </span>

                                    </NavLink>
                                </li>
                                <li>
                                    <span>
                                        {titlePage}
                                    </span>
                                </li>
                            </ul>
                    </div>
                    </div>

                    
                </div>
                
            </header>
            
            <main>
                {props.children}
            </main>

            {/* <footer>
                подвал
            </footer> */}
        </div>
    );

}

export default DefaultLayout;


   
  

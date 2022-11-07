import Styles from "./MainLayout.module.scss";

import { NavLink } from 'react-router-dom';

import SiteInfo from '../../SiteInfo/SiteInfo';
import Slider from '../../Slider/Slider';
import MainNav from '../../MainNav/MainNav';
import Search from '../../Search/Search';
import classNames from 'classnames';


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
                            <img src="/logo.png" className='logo' />
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

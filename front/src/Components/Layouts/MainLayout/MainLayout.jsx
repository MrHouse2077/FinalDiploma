import './MainLayout.module.scss';

import { NavLink } from 'react-router-dom';

import SiteInfo from '../../SiteInfo/SiteInfo';
import Slider from '../../Slider/Slider';
import MainNav from '../../MainNav/MainNav';



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

                    <div>
                        {props.children}
                    </div>

                </div>

            </header>

            

        </div>
    );

}

export default MainLayout;

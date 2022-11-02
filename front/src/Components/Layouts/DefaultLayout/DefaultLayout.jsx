import Styles from './DefaultLayout.module.scss';

import { NavLink } from 'react-router-dom';

import MainNav from '../../MainNav/MainNav';
import SiteInfo from '../../SiteInfo/SiteInfo';
import Filter from '../../UI/Filter/Filter';


function DefaultLayout(props) {

    let chengeStatusFilter = props.chengeStatusFilter;

    let filter = {
                minPriceProduct: props.filterParams.minPriceProduct,
                maxPriceProduct: props.filterParams.maxPriceProduct,
                secelctPriceProduct: props.filterParams.secelctPriceProduct
            }

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

                <aside>
                    {
                        (props.filterShow)?
                            <Filter filterParams={filter} chengeStatusFilter={chengeStatusFilter}/>
                        :
                            ''
                    }
                </aside>
                
                {props.children}
            </section>

            {/* <footer>
                подвал
            </footer> */}
        </div>
    );

}

export default DefaultLayout;

import Styles from './DefaultLayout.module.scss';

import { NavLink } from 'react-router-dom';


import MainNav from '../../MainNav/MainNav';
import SiteInfo from '../../SiteInfo/SiteInfo';

import Filter from '../../UI/Filter/Filter';
import classNames from 'classnames';

function DefaultLayout(props) {
    
   
    let chengeStatusFilter = props.chengeStatusFilter;
    let onFilterResult = props.onFilterResult;
 

    let filter = {
                minPriceProduct: props.filterParams.minPriceProduct,
                maxPriceProduct: props.filterParams.maxPriceProduct,
                secelctMinPriceProduct: props.filterParams.secelctMinPriceProduct,
                secelctMaxPriceProduct: props.filterParams.secelctMaxPriceProduct,
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
                        <div className={Styles.NavBar}>
                        <MainNav />
                        <div className='Login'>
                                <NavLink
                                    to="/login"
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

                    
                </div>
                
            </header>
            
            <section>

                <aside>
                    {
                        (props.filterShow)?
                            <Filter filterParams={filter} 
                            chengeStatusFilter={chengeStatusFilter}
                            onFilterResult={onFilterResult}/>
                           
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


   
  

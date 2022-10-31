import Styles from './DefaultLayout.module.scss';

import { NavLink } from 'react-router-dom';


function DefaultLayout(props) {

    return (
        <div className="DefaultLayout">
            <header>
                шапка
            </header>

            <section>
                {props.children}
            </section>

            <footer>
                подвал
            </footer>
        </div>
    );

}

export default DefaultLayout;

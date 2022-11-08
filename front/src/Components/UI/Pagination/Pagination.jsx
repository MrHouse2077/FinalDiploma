import Styles from './Pagination.module.scss';
import classNames from 'classnames';
function Pagination(props){

    let quantity = props.quantity;
    return(
        <div className={Styles.Pagination}>

            <ul>

                <li>

                    <div className={classNames(Styles.page_number, Styles.active)}>
                        <span>1</span>
                    </div>
                    
                </li>

                <li>

                    <div className={Styles.page_number}>
                        2
                    </div>
                
                </li>

                <li>

                    <div className={Styles.page_number}>
                        23
                    </div>
                
                </li>

            </ul>

        </div>
    );

}
export default Pagination;
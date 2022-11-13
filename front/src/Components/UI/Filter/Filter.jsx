import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { useEffect } from 'react';
import Styles from './Filter.module.scss';
import RangedSlider from '../../RangedSlider/RangedSlider'

function Filter(props) {


    let minPriceProduct = props.filterParams.minPriceProduct;
    let maxPriceProduct = props.filterParams.maxPriceProduct;
    let filter = props.filterParams;


    return (
        <div className={Styles.Filter}>

                <RangedSlider 
                    filterParams={filter} 
                    changeStatus={props.chengeStatusFilter}
                />




            <div className={Styles.valuePrice}>
                <p>{minPriceProduct} руб.</p>
                <p>{maxPriceProduct} руб.</p>
            </div>

            <button onClick={()=>{
                props.onFilterResult();
            }}>Подобрать</button>
        </div>
    );
}

export default Filter;
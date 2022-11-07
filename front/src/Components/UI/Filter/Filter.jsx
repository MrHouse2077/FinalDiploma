import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { useEffect } from 'react';
import Styles from './Filter.module.scss';


function Filter(props) {


    let minPriceProduct = props.filterParams.minPriceProduct;
    let maxPriceProduct = props.filterParams.maxPriceProduct;
    let secelctPriceProduct = props.filterParams.secelctPriceProduct;


    function switchFilter(newValue) {
        props.chengeStatusFilter(newValue);
    }


    return (
        <div className={Styles.Filter}>

            <p>{secelctPriceProduct} руб.</p>

            {/* <Slider 
                min={minPriceProduct} 
                max={maxPriceProduct} 
                valueDefault={secelctPriceProduct} 
            /> */}

            <input type="range"
                min={minPriceProduct} max={maxPriceProduct}
                step="1"
                /*value={secelctPriceProduct}*/
                onChange={(evt) => {
                    switchFilter(Number(evt.target.value));
                }}
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
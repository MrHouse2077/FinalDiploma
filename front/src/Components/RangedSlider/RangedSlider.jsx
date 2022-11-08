import * as React from 'react';
import { Slider } from '@mui/material';
import Box from '@mui/material/Box';


function RangedSlider(props){
    function valuetext(value) {
        return value;
      }
      
    const [value, setValue] = React.useState([props.filterParams.secelctMinPriceProduct, props.filterParams.secelctMaxPriceProduct]);
   
    const handleChange = (event, newValue) => {
    setValue(newValue);
    props.changeStatus(event.target.value[0], event.target.value[1]);
    };
   
    return(
    <Box sx={{ width: 300 }}>
        <Slider name="priceSlider"
        getAriaLabel={() => 'Temperature range'}
        value={value}
        min={props.filterParams.minPriceProduct}
        max={props.filterParams.maxPriceProduct}
        onChange={handleChange}
        valueLabelDisplay="on"
        getAriaValueText={valuetext}
        />

   
    </Box>
    );

}

export default RangedSlider;


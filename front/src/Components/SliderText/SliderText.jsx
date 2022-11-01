import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import Styles from "./SliderText.module.scss";
function SliderText(){
  
    return(

          <div className={Styles.textWrap}>
          <span className={Styles.title}>Fitness Area</span>
          <h2 className={Styles.subTitle}>Fitness Made</h2>
          <p className={Styles.mainText}>Hardest part is walking out in the front door</p>
          <div> 
            <NavLink
                to="/about"
                className={Styles.exploreBtn}
            >
             Explore more
            </NavLink>
            <NavLink
                to="/about"
                className={Styles.roundBtn}
            >
            <FontAwesomeIcon className={Styles.IconAlign} icon={solid('play')} />
            </NavLink>
          </div>
          </div>
      
    )
}

export default SliderText;
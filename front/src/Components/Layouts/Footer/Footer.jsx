import Styles from "./Footer.module.scss";
import classNames from 'classnames';
import { NavLink } from "react-router-dom";
import Logo from "../../../images/logo.png";





function Footer(props){
    
    return(
        <div className={Styles.Footer}>
            <div className={Styles.FooterTopInfo}>
                <div className={classNames("container", Styles.customeContainer)}>
                    <div className={Styles.NewsLetterArea}>
                        <div className={classNames("row align-items-center")}>
                            <div className="col-lg-5">
                                <h5 className={Styles.NewsLetterTitle}>Subscribe Newsletter</h5>
                            </div>

                            <div className="col-lg-7">
                                <form action="#">
                                    <div className={Styles.NewsLetterInfo}>
                                        <div className={Styles.NewsLetterSearch}>
                                            <input type="text" placeholder="Email Address |"/>
                                        </div>
                                        <div className={Styles.SubscriveButton}>
                                            <button type="submit" className={Styles.BtnNewsLetter}>Subscribe now 
                                                <i className="fal fa-chevron-double-right"></i>
                                            </button>
                                        </div>
                                </div>
                                </form>
                            </div>


                        </div>

                    </div>
                </div>

            </div>

            <div className={Styles.FooterContent}>
                <div className={classNames("container", Styles.customeContainer)}>
                    <div className={classNames("row", "g-0")}>
                        <div className={classNames("col-lg-4 col-md-8 col-sm-8")}>
                            <div className={Styles.FooterWidget}>

                                <div className={Styles.FooterLogo}>
                                    <NavLink to = "#">
                                        <img src={Logo} />
                                    </NavLink>
                                </div>


                                <p className = {Styles.Text}>Consequat lacinia into gravida nisie facils porto lorem ultricies vivamus maecenas one iaculis</p>

                                <div className={Styles.FooterSocialLinks}>
                                        <NavLink to = "#">
                                            <i>F</i>

                                        </NavLink>
                                        <NavLink to = "#">
                                            <i>T</i>

                                        </NavLink>
                                        <NavLink to = "#">
                                            <i>LI</i>

                                        </NavLink>
                                        <NavLink to = "#">
                                            <i>G</i>

                                        </NavLink>
                                </div>

                            </div>
                        </div>



                        <div className={classNames("col-lg-2 col-md-4 col-sm-4")}>
                            <div className={Styles.FooterWidget}>

                                <h5 className= {Styles.FooterWidgetTitle}>Projects</h5>

                                <ul className={Styles.FooterProjectLists}>
                                    <li>
                                        <NavLink to = "#">February - 2020</NavLink>
                                    </li>

                                    <li>
                                        <NavLink to = "#">March - 2020</NavLink>
                                    </li>

                                    <li>
                                        <NavLink to = "#">October - 2020</NavLink>
                                    </li>

                                    <li>
                                        <NavLink to = "#">November - 2020</NavLink>
                                    </li>

                                    <li>
                                        <NavLink to = "#">January - 2021</NavLink>
                                    </li>

                                    <li>
                                        <NavLink to = "#">February - 2021</NavLink>
                                    </li>

                                </ul>

                                

                            </div>
                        </div>


                        <div className={classNames("col-lg-3 col-md-6 col-sm-6")}>
                            <div className={Styles.FooterWidget}>

                                <h5 className= {Styles.FooterWidgetTitle}>Contact Info</h5>

                                <ul className={Styles.FooterInfo}>
                                    <li className = {classNames("d-flex align-items-start pt-5 mb-20")}>
                                        <div ClassName = {Styles.FooterInfoIcon}>
                                            <i classNmae="fas fa-map-marker-alt"></i>
                                        </div>

                                        <div className={Styles.FooterInfoText}>
                                            <NavLink target="_blank" to="https://www.google.com/maps/place/Dhaka/@23.7806207,90.3492859,12z/data=!3m1!4b1!4m5!3m4!1s0x3755b8b087026b81:0x8fa563bbdd5904c2!8m2!3d23.8104753!4d90.4119873">25/A, Brokelyn <br/> Square Circle, New York</NavLink>
                                        </div>
                                    </li>

                                    <li className = {classNames("d-flex align-items-start pt-5 mb-20")}>
                                        <div ClassName = {Styles.FooterInfoIcon}>
                                            <i classNmae="fas fa-map-marker-alt"></i>
                                        </div>

                                        <div className={Styles.FooterInfoText}>
                                            <span>Email:</span>
                                            <NavLink target="_blank" to="mailto:support@gmail.com">support@gmail.com</NavLink>
                                        </div>
                                    </li>

                                    <li className = {classNames("d-flex align-items-start pt-5 mb-20")}>
                                        <div ClassName = {Styles.FooterInfoIcon}>
                                            <i classNmae="fas fa-map-marker-alt"></i>
                                        </div>

                                        <div className={Styles.FooterInfoText}>
                                            <span>Phone:</span>
                                            <NavLink target="_blank" to="tel:+012-345-6789">+012 (344) 678 99</NavLink>
                                        </div>
                                    </li>

                                    

                                </ul>

                                

                            </div>
                        </div>


                        <div className={classNames("col-lg-3 col-md-6 col-sm-6")}>
                            <div className={Styles.FooterWidget}>

                                <h5 className= {Styles.FooterWidgetTitle}>Recent Post</h5>
                                <div className={Styles.FooterBlog}>

                                    <ul>
                                        <li>
                                            <div ClassName = {classNames(Styles.FooterBlogSm,"d-flex align-items-center")}>
                                                <div className={Styles.FooterBlogSmThumb}>
                                                    <NavLink to="#">
                                                        <img/>
                                                    </NavLink>

                                                </div>

                                                <div className={Styles.FooterBlogSmContent}>
                                                    <h6 className={Styles.FooterBlogSmTitle}>
                                                        <NavLink to="#">Malesuada bagittis introc dolor curabitur</NavLink>
                                                    </h6>

                                                    <div className={Styles.FooterBlogSmMeta}>
                                                        <p>
                                                            <span>
                                                                25 nov 2021
                                                            </span>
                                                        </p>
                                                    </div>

                                                </div>
                                            </div>
                                        </li>


                                        <li>
                                            <div ClassName = {classNames(Styles.FooterBlogSm,"d-flex align-items-center")}>
                                                <div className={Styles.FooterBlogSmThumb}>
                                                    <NavLink to="#">
                                                        <img/>
                                                    </NavLink>

                                                </div>

                                                <div className={Styles.FooterBlogSmContent}>
                                                    <h6 className={Styles.FooterBlogSmTitle}>
                                                        <NavLink to="#">Introc bagittis curabitur malesuada dolor</NavLink>
                                                    </h6>

                                                    <div className={Styles.FooterBlogSmMeta}>
                                                        <p>
                                                            <span>
                                                                25 nov 2021
                                                            </span>
                                                        </p>
                                                    </div>

                                                </div>
                                            </div>
                                        </li>

                                    

                                        

                                    </ul>




                                </div>

                                

                                

                            </div>
                        </div>



                    
                    </div>
                </div>
            </div>

            <div className={Styles.CopyRightArea}>
                <div className={classNames("container", Styles.customeContainer)}>
                    <div className={Styles.CopyRightInfo}>
                        <div className={Styles.OwnerName}>
                            <p>
                                Copyright
                                <NavLink to = "#">Futexo</NavLink>
                                ©2022. All Rights Reserved
                            </p>
                        </div>

                        <div className={Styles.CopyRightUsefulLinks}>
                            <NavLink to = "#">Terms & Conditions</NavLink>
                            <NavLink to = "#">. Services</NavLink>
                            <NavLink to = "#">. Privacy</NavLink>
                        </div>
                    </div>



                </div>
            </div>

            <div className={Styles.FooterShape}>
                <img />
            </div>

            <div className={Styles.FooterShapeTwo}>
                <img />
            </div>

            <div className={Styles.FooterCurve}>
                <img />
            </div>
      </div>
    )
}

export default Footer;
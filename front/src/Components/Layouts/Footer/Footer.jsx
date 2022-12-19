import Styles from "./Footer.module.scss";
import classNames from 'classnames';
import { NavLink } from "react-router-dom";
import Logo from "../../../images/logo.png";
import FooterLogo1 from "../../../images/footer-blog.jpg";
import FooterLogo2 from "../../../images/footer-blog2.jpg";







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
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className={classNames(Styles.IconsLink,"bi bi-facebook")} viewBox="0 0 16 16">
                                                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                                            </svg>
                                        </NavLink>
                                        <NavLink to = "#">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className={classNames(Styles.IconsLink,"bi bi-twitter")} viewBox="0 0 16 16">
                                                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                                            </svg>
                                        </NavLink>
                                        <NavLink to = "#">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className={classNames(Styles.IconsLink,"bi bi-google")} viewBox="0 0 16 16">
                                                <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"/>
                                            </svg>

                                        </NavLink>
                                        <NavLink to = "#">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className={classNames(Styles.IconsLink,"bi bi-instagram")} viewBox="0 0 16 16">
                                                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                                            </svg>

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
                                        <div className = {Styles.FooterInfoIcon}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className={classNames(Styles.IconsContact,"bi bi-geo-alt-fill")} viewBox="0 0 16 16">
                                                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                                            </svg>
                                        </div>

                                        <div className={Styles.FooterInfoText}>
                                            {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className={classNames(Styles.IconsContact,"bi bi-geo-alt-fill")} viewBox="0 0 16 16">
                                                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                                            </svg> */}
                                            <NavLink target="_blank" to="https://www.google.com/maps/place/Dhaka/@23.7806207,90.3492859,12z/data=!3m1!4b1!4m5!3m4!1s0x3755b8b087026b81:0x8fa563bbdd5904c2!8m2!3d23.8104753!4d90.4119873">25/A, Brokelyn <br/> Square Circle, New York</NavLink>
                                        </div>
                                    </li>

                                    <li className = {classNames("d-flex align-items-start pt-5 mb-20")}>
                                        <div className = {Styles.FooterInfoIcon}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className={classNames(Styles.IconsContact,"bi bi-envelope-open")} viewBox="0 0 16 16">
                                                <path d="M8.47 1.318a1 1 0 0 0-.94 0l-6 3.2A1 1 0 0 0 1 5.4v.817l5.75 3.45L8 8.917l1.25.75L15 6.217V5.4a1 1 0 0 0-.53-.882l-6-3.2ZM15 7.383l-4.778 2.867L15 13.117V7.383Zm-.035 6.88L8 10.082l-6.965 4.18A1 1 0 0 0 2 15h12a1 1 0 0 0 .965-.738ZM1 13.116l4.778-2.867L1 7.383v5.734ZM7.059.435a2 2 0 0 1 1.882 0l6 3.2A2 2 0 0 1 16 5.4V14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5.4a2 2 0 0 1 1.059-1.765l6-3.2Z"/>
                                            </svg>
                                        </div>

                                        <div className={Styles.FooterInfoText}>
                                            
                                            <span>Email:</span>
                                            <br/>
                                            <NavLink target="_blank" to="mailto:support@gmail.com">support@gmail.com</NavLink>
                                        </div>
                                    </li>

                                    <li className = {classNames("d-flex align-items-start pt-5 mb-20")}>
                                        <div className = {Styles.FooterInfoIcon}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className={classNames(Styles.IconsContact,"bi bi-telephone-fill")} viewBox="0 0 16 16">
                                                <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                                            </svg>
                                        </div>

                                        <div className={Styles.FooterInfoText}>
                                            
                                            <span>Phone:</span>
                                            <br/>
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
                                            <div className = {classNames(Styles.FooterBlogSm,"d-flex align-items-center")}>
                                                <div className={Styles.FooterBlogSmThumb}>
                                                    <NavLink to="#">
                                                        <img src = {FooterLogo1}/>
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
                                            <div className = {classNames(Styles.FooterBlogSm,"d-flex align-items-center")}>
                                                <div className={Styles.FooterBlogSmThumb}>
                                                    <NavLink to="#">
                                                    <img src = {FooterLogo2}/>

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
                                <NavLink to = "#"> Futexo </NavLink>
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
      </div>
    )
}

export default Footer;
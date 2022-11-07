import { NavLink } from "react-router-dom";
import DefaultLayout from "../../Layouts/DefaultLayout/DefaultLayout";
import Styles from "./Contacts.module.scss";

import AboutShape from "../../../images/about-shape2.png";
import ContactShape3 from "../../../images/contact-shape3.png";
import CsSupport from "../../../images/cs-supporot-2.jpg";



import classNames from 'classnames';




function Contacts() {
    return (
        <div>
      
            <DefaultLayout>
            
                <div className = {Styles.BlockTitle}>
                    <h3>Contact us</h3>
                    <ul>
                        <li>
                            <NavLink to="/home"
                                    className={Styles.nav_link}
                                    style={({ isActive }) =>
                                    isActive ? Styles.active : undefined
                                    }
                                >
                                <span>
                                    Home 
                                </span>

                            </NavLink>
                        </li>
                        <li>
                            <span>
                                Contact 
                            </span>
                        </li>
                    </ul>
                </div>
                    
                    
            </DefaultLayout>

            <section>
                <div className = {Styles.MapArea}>
                    
                    <div className={Styles.ContactMap}>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d99370.14184006557!2d-77.0846156762382!3d38.89386718919168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b7bcdecbb1df%3A0x715969d86d0b76bf!2sThe%20White%20House!5e0!3m2!1sen!2sbd!4v1640853420661!5m2!1sen!2sbd" allowfullscreen="" loading="lazy"></iframe>
                    </div>
                </div>

                <div className = {Styles.ContactsInfo}>
                    <div className={classNames("container", Styles.customeContainer)}>
                        <div className="row">
                            <div className="col-md-4">
                                <div className={classNames(Styles.ContactInfo, "mb-40")}>
                                    <div className={Styles.svInner}>
                                        <div className={Styles.servicesIcon}>
                                            <i class="fas fa-map-marker-alt"></i>
                                        </div>
                                    </div>
                                    <div className={Styles.ContactInfoText}>
                                        <h4 className={Styles.ContactInfoTitle}>Adress</h4>
                                        <p>
                                            <NavLink to = "https://goo.gl/maps/5x6EBHqoxu7xShyZ8" target="_blank" className={Styles.navLink}>
                                                <span>
                                                    752 Settler, California
                                                </span>

                                            </NavLink>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className={classNames(Styles.ContactInfo, "mb-40")}>
                                    <div className={Styles.svInner}>
                                        <div className={Styles.servicesIcon}>
                                            <i class="fas fa-map-marker-alt"></i>
                                        </div>
                                    </div>
                                    <div className={Styles.ContactInfoText}>
                                        <h4 className={Styles.ContactInfoTitle}>Phone</h4>
                                        <p>
                                            <NavLink to = "tel:333888200" target="_blank" className={Styles.navLink}>
                                                <span>
                                                02 (365) 365 3625
                                                </span>

                                            </NavLink>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className={classNames(Styles.ContactInfo, "mb-40")}>
                                    <div className={Styles.svInner}>
                                        <div className={Styles.servicesIcon}>
                                            <i class="fas fa-map-marker-alt"></i>
                                        </div>
                                    </div>
                                    <div className={Styles.ContactInfoText}>
                                        <h4 className={Styles.ContactInfoTitle}>Email</h4>
                                        <p>
                                            <NavLink to = "mailto:info@feoxe4.com" target="_blank" className={Styles.navLink}>
                                                <span>
                                                    info@feoxe4.com
                                                </span>

                                            </NavLink>
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className={Styles.ContactShape}>
                        <img src = {AboutShape}/>
                    </div>
                </div> 

                <div className={classNames(Styles.supportArea)}>
                    <div className={classNames(Styles.customeContainer, "container")}>
                        <div className={classNames("row align-items-center")}>
                            <div className="col-lg-6">
                                <div className={classNames(Styles.SupImage)}>
                                    <img src = {CsSupport}/>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className={classNames(Styles.supportInfoTwo, "mb-35")}>
                                    <div className={classNames(Styles.SectionWrap, "mb-35")}>
                                        <span className={classNames(Styles.TpsubTitle)}>Customer support</span>
                                        <h3 className={classNames(Styles.SectionTitle, "mb-20")}>Dedicated supporting team ready for help you</h3>
                                        <span className={classNames(Styles.SectionBorder, "mb-30")}>
                                            <i className="far fa-circle"></i>
                                        </span>
                                    </div>
                                    <form action = "#">
                                        <div className={classNames(Styles.SupportFormField, "mb-20")}>
                                            <input type="text" placeholder="Full name"/>
                                        </div>
                                        <div className={classNames(Styles.SupportFormField, "mb-20")}>
                                            <input type="email" placeholder="Email Address"/>
                                        </div>
                                        <div className={classNames(Styles.SupportFormField, "mb-20")}>
                                            <textarea placeholder="Your Message"></textarea>
                                        </div>

                                        <div className={Styles.SupportBtn}>
                                            <NavLink to = "#" className={Styles.TpBtnRound}>
                                                Get Estimate
                                                <i className="fal fa-chevron-double-right"></i>
                                            </NavLink>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        

                        </div>

                    </div>
                    <div className={Styles.SupportShape}>
                        <img src = {ContactShape3}/>
                    </div>


                </div>


            </section>
        </div>
      
    );
  }
  
  export default Contacts;
  
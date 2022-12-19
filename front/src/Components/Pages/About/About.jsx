import Styles from "./About.module.scss";


import AboutShape from "../../../images/about-shape.png";
import AboutOne from "../../../images/about-1.jpg";
import Quote from "../../../images/quote.png";
import Author from "../../../images/author.jpg";
import AuthorPNG from "../../../images/about-bg-png.png";
import DefaultLayout from "../../Layouts/DefaultLayout/DefaultLayout";
import { NavLink } from "react-router-dom";
import Footer from "../../Layouts/Footer/Footer";

import classNames from 'classnames';


function About() {
    let titlePage = "About us"
    return (
        <div>
            <DefaultLayout title={titlePage}>
                
                
            </DefaultLayout>

            <section className={Styles.ContentAbout}>
                <div className={Styles.About}>
                        <div className={Styles.ContainerWrap}>
                            <div className={Styles.AboutImage}>
                                <img src={AboutOne} className={Styles.ImageFluid} />
                                <div className={Styles.AboutShape}>
                                    <img src={AboutShape} alt="" />
                                    <div className={Styles.Content}>
                                        <h4>25 + Year</h4>
                                        <span>Work Experience</span>
                                    </div>
                                </div>
                            </div>

                            <div className={Styles.AboutUs}>
                                <div className={Styles.AboutInfo}>
                                    <span className={Styles.AboutTitle}>About us</span>
                                    <h3 className={Styles.SectionTitle}>Make yourself stronger than your best excuses</h3>
                                    <span className={Styles.SectionBorder}><i></i></span>
                                    <p className={Styles.SectionDescription}>Duis nunc sodales conubia a laoreet aliquet on nostra eleifend lacinia prasent hendrerit quisque penatibus erat a pulvina integer semper ridiculus lectus con dimentum obor tise verodar capmtaso morin</p>
                                    <div className={Styles.BlockQuote}>
                                        <span>Push harder than yesterday if you want on the different tomorrow.</span>
                                        <div className={Styles.Quote}>
                                            <img src={Quote} alt="" />
                                        </div>
                                    </div>

                                    <div className={Styles.AuthorInfo}>
                                        <div className={Styles.AuthorData}>
                                            <div className={Styles.AuthorImg}>
                                                <a href="#">
                                                    <img src={Author} alt="" />
                                                </a>
                                            </div>
                                            <div className={Styles.AuthorDegination}>
                                                <h4>Mark Hander</h4>
                                                <span>CEO - Fetoxe</span>
                                            </div>
                                        </div>
                                        <div className={Styles.AboutPlay}>
                                            <a className={Styles.AbPlayBtn} href="https://www.youtube.com/watch?v=ZoZSp-wy8h8">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className={classNames("bi bi-play-fill", Styles.PLay)} viewBox="0 0 16 16">
                                                    <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
                                                </svg>
                                            </a>
                                            <span>Intro Video</span>
                                        </div>
                                        <div className={Styles.AboutBgShape}>
                                            <img src={AuthorPNG} alt="" className={Styles.ImageFluid} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </section>

            <Footer>
                
            </Footer>
        </div>
    )
}
export default About;
import Styles from "./Pages.module.scss";
import AboutShape from "./about-shape.png";
import AboutOne from "./about-1.jpg";
import Quote from "./quote.png";
import Author from "./author.jpg";
import AuthorPNG from "./about-bg-png.png";






function About(){
    return(

        <div className = {Styles.About}>
            <div className = {Styles.Container}>
                <div className = {Styles.AboutImage}>
                    <img src = {AboutOne} className = {Styles.ImageFluid}/>
                    <div className = {Styles.AboutShape}>
                        <img src={AboutShape} alt="" />
                        <div className={Styles.Content}>
                            <h4>25 + Year</h4>
                            <span>Work Experience</span>
                        </div>
                    </div>
                </div>

                <div className = {Styles.AboutUs}>
                    <div className = {Styles.AboutInfo}>
                        <span className={Styles.AboutTitle}>About us</span>
                        <h3 className={Styles.SectionTitle}>Make yourself stronger than your best excuses</h3>
                        <span className={Styles.SectionBorder}><i className="far fa-circle"></i></span>
                        <p className={Styles.SectionDescription}>Duis nunc sodales conubia a laoreet aliquet on nostra eleifend lacinia prasent hendrerit quisque penatibus erat a pulvina integer semper ridiculus lectus con dimentum obor tise verodar capmtaso morin</p>
                        <div className = {Styles.BlockQuote}>
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
                                    <i className="fas fa-play"></i>
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

        // <div className={Styles.About}>
        //         <div className="container">
        //         <div className="row">
        //             <div className="col-xl-5 col-lg-6">
        //                 <div className={Styles.aboutImage} data-wow-delay=".4s" >
        //                     <img src={AboutOne} alt="" className="img-fluid" />
        //                     <div className={Styles.aboutShape}>
        //                     <img src={AboutShape} alt="" />
        //                     <div className={Styles.content}>
        //                         <h4>25 + Year</h4>
        //                         <span>Work Experience</span>
        //                     </div>
        //                     </div>
        //                 </div>
        //             </div>
        //             <div className="col-xl-7 col-lg-6 ">
        //                 <div className={Styles.aboutInfo } data-wow-delay=".7s">
        //                     <div className={Styles.sectionWrap}>
        //                     <span className={Styles.tpsubTitle}>About us</span>
        //                     <h3 className={Styles.sectionTitle}>Make yourself stronger than
        //                     your best excuses</h3>
        //                     <span className={Styles.sectionBorder}><i className="far fa-circle"></i></span>
        //                     <p className={Styles.sectionDescription}>Duis nunc sodales conubia a laoreet aliquet on nostra eleifend lacinia prasent hendrerit quisque penatibus erat a pulvina integer semper ridiculus lectus con dimentum obor tise verodar capmtaso morin</p>
        //                     </div>
        //                     <blockquote className={Styles.abBquote}>
        //                     <span>Push harder than yesterday if you want on
        //                         the different tomorrow.</span>
        //                     <div className={Styles.quote}>
        //                         <img src={Quote} alt="" />
        //                     </div>
        //                     </blockquote>
        //                     <div className={Styles.authorInfo}>
        //                     <div className={Styles.authorData}>
        //                         <div className="author_img mb-30"><a href="#"><img src={Author} alt="" /></a></div>
        //                         <div className={Styles.authorDegination}>
        //                             <h4>Mark Hander</h4>
        //                             <span>CEO - Fetoxe</span>
        //                         </div>
        //                     </div>
        //                     <div className={Styles.aboutPlay}>
        //                         <a className={Styles.abPlayBtn} href="https://www.youtube.com/watch?v=ZoZSp-wy8h8">
        //                             <i className="fas fa-play"></i>
        //                         </a>
        //                         <span>Intro Video</span>
        //                     </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //         </div>
        //         <div className={Styles.aboutBgShape}>
        //         <img src={AuthorPNG} alt="" className="img-fluid" />
        //         </div>
        // </div>
    )
}
export default About;
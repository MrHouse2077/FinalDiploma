import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import MainLayout from '../../Layouts/MainLayout/MainLayout';
import SliderText from '../../SliderText/SliderText';
import Styles from "./About.module.scss";


import AboutShape from "../../../images/about-shape.png";
import AboutOne from "../../../images/about-1.jpg";
import Quote from "../../../images/quote.png";
import Author from "../../../images/author.jpg";
import AuthorPNG from "../../../images/about-bg-png.png";
import DefaultLayout from "../../Layouts/DefaultLayout/DefaultLayout";
import Footer from "../../Layouts/Footer/Footer";

function Home() {
  return (
    <div>
      <MainLayout>
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
                </section> 
      </MainLayout>
    </div>
  );
}

export default Home;

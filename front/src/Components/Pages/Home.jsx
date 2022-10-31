
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import Slider from '../Slider/Slider';
import SiteInfo from '../SiteInfo/SiteInfo';
import MainNav from '../MainNav/MainNav';
import MainLayout from '../Layouts/MainLayout/MainLayout';


// import StateApp from './State';
// import SiteInfo from './Components/SiteInfo/SiteInfo';
// import Shop from './Components/Pages/Shop';
// import Contacts from './Components/Pages/Contacts';
// import Blog from './Components/Pages/Blog';
// import MainNav from './Components/MainNav/MainNav';
// import SearchModal from './Components/Search/SearchModal';
// import Search from './Components/Search/Search';
// import Login from './Components/Pages/Login/Login';
// import Background_glare from './Components/Background_glare/Background_glare';
// import Slider from './Components/Slider/Slider';
// import About from './Components/Pages/About';
// import Pages from './Components/Pages/Pages';
// import Portfolio from './Components/Pages/Portfolio';
// import ContactUs from './Components/UI/Button/ContactUs';


function Home() {
  return (
    <div className="Home">

      <MainLayout>

        <div>
          <span>Fitness Area</span>
          <h2>Fitness Made</h2>
          <p>Hardest part is walking out in the front door</p>
          <div>
            <a>explore More</a>
          </div>
        </div>

      </MainLayout>

      <section className='content'>
        123
      </section>
    </div>
  );
}

export default Home;

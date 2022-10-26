
import './App.css';

import SiteInfo from './Components/SiteInfo/SiteInfo';
import { Route, Routes } from 'react-router-dom';
import ImageGallery from 'react-image-gallery';
import Home from './Components/Pages/Home';
import Shop from './Components/Pages/Shop';
import Contacts from './Components/Pages/Contacts';
import Blog from './Components/Pages/Blog';
import MainNav from './Components/MainNav/MainNav';
import SearchModal from './Components/Search/SearchModal';
import React, {useState, useEffect} from 'react';
import Search from './Components/Search/Search';

import { NavLink } from 'react-router-dom';
import Login from './Components/Pages/Login/Login';
import stateApp from './State';

import Background_glare from './Components/Background_glare/Background_glare';
import Slider from './Components/Slider/Slider';

function App() {

  return (
    <div className="App">
      <header>
        <div className='header_fon'>
			      <Slider/>
        </div>
        <div className='header_content'>
          <div className='wrap'>
            <div className='logo_info'>
              <img src="/logo.png" className='logo'/>
              <SiteInfo/>
            </div>
            <MainNav/>
            <div className='Login'>
              <NavLink
                  to="/login"
                  className='loginBtn'
              >
              Login
              </NavLink>
            </div>
          </div>
        </div>
        


        {/* <div className='header_content'>

          
          <img src="/logo.png" className='logo'/>
          <SiteInfo/>

          <div className='header_wrap_content'>
            <MainNav/>


            <div className='Login'>
              <NavLink
                  to="/login"
                  className='loginBtn'
              >
              Login
              </NavLink>
            </div>
          </div>
          
        </div> */}

      </header>

      <section className='content'>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="shop" element={<Shop stateApp={stateApp.auth}/>}>

            

          </Route>
          <Route path="blog" element={<Blog />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="login" element={<Login stateApp={stateApp.auth}/>}/>
          {/* <Route path="search" element={<Search />} /> */}
        </Routes>
        
        
      </section> 
    </div>
  );
}

export default App;

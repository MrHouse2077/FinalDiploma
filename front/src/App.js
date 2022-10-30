
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
import StateApp from './State';

import Background_glare from './Components/Background_glare/Background_glare';
import Slider from './Components/Slider/Slider';
import About from './Components/Pages/About';

function App(props) {
	let stateApp = StateApp;
	let [dataApp, setAuth] = useState(stateApp );
		
	function setAuthData(data){
		let copy = Object.assign([], dataApp);
			
		copy.auth.token = data.token;
		copy.auth.email = data.email;
		copy.auth.name = data.name;

		setAuth(copy);
	}
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
              				<NavLink to="/login" className='loginBtn'> Login </NavLink>
            			</div>
          			</div>
        		</div>

      		</header>

			<section className='content'>
				<Routes>
					<Route path="/" element={<Home startImage = {Home}/>}/>
					<Route path="about" element={<About startImage = {About}/>}/>
					<Route path="shop" element={<Shop auth={dataApp.auth} startImage = {Shop}/>}/>
					<Route path="blog" element={<Blog startImage = {Blog}/>} />
					<Route path="contacts" element={<Contacts startImage = {Contacts}/>} />
					<Route path="login" element={<Login
													startImage = {Login} 
													auth={dataApp.auth} 
													setAuthData={setAuthData}
												/>}
					/>
					{/* <Route path="search" element={<Search />} /> */}
				</Routes>
			</section> 
    	</div>
  	);
}

export default App;

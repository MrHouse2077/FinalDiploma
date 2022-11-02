
import './App.css';

import { Route, Routes, useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import StateApp from './State';
import Home from './Components/Pages/Home';
import About from './Components/Pages/About/About';
import Contacts from './Components/Pages/Contacts/Contacts';

import Login from './Components/Pages/Login/Login';
import Dashboard from './Components/Admin/Pages/Dashboard/Dashboard';
import ListProducts from './Components/Pages/Shop/Pages/ListProducts/ListProducts';
import Search from './Components/Search/Search';

function App(props) {
  const navigate = useNavigate();

  let stateApp = StateApp;
  let [dataApp, setAuth] = useState(stateApp );
  	
  function setAuthData(data){
    let copy = Object.assign([], dataApp);
    	
    copy.auth.token = data.token;
    copy.auth.email = data.email;
    copy.auth.name = data.name;

    setAuth(copy);

    localStorage.setItem('token', dataApp.auth.token);

    navigate('/admin/dashboard');
  }
  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home startImage={Home} />} />
  
        <Route path="about" element={<About startImage={About} />} />
        <Route path="login" element={<Login
          startImage={Login}
          auth={dataApp.auth}
          setAuthData={setAuthData}
        />} />
        <Route path="admin/dashboard" element={<Dashboard
          startImage={Login}
          auth={dataApp.auth}
          setAuthData={setAuthData}
        />} />

        <Route path="shop" element={<ListProducts/>} />

        {/* <Route path="shop" element={<Shop auth={dataApp.auth} startImage={Shop} />} />
        <Route path="blog" element={<Blog startImage={Blog} />} />*/
        <Route path="contacts" element={<Contacts/>} />
        // <Route path="search" element={<Search />} />

        
        /*<Route path="login" element={<Login
          startImage={Login}
          auth={dataApp.auth}
          setAuthData={setAuthData}
        />} /> */}
      </Routes>

    </div>
  );

}

export default App;

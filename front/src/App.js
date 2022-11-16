
import './App.css';

import { Route, Routes, useNavigate, Navigate  } from 'react-router-dom';
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
import Product from './Components/Pages/Shop/Pages/Product/Product';
import SearchPage from './Components/Search/SearchPage';
import Infor from './Components/Pages/Infor/Infor';

function App(props) {
  const navigate = useNavigate();

  let stateApp = StateApp;
  let [dataApp, setAuth] = useState(stateApp );
  	
  function setAuthData(data){
    let copy = Object.assign([], dataApp);
    	
    copy.auth.token = data.data.token;
    copy.auth.email = data.data.email;
    copy.auth.name = data.data.name;

    localStorage.setItem('token', data.data.token);
   
    setAuth(copy);

    

    navigate('/admin/dashboard');
  }
  
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={ <Navigate to="/home" /> }/>
        <Route path="/home" element={<Home startImage={SearchPage}/>} />
        <Route path="/search/:request" element={<SearchPage startImage={SearchPage} />} />
  
        <Route path="/about" element={<About startImage={About} />} />
        <Route path="/login" element={<Login
          startImage={Login}
          auth={dataApp.auth}
          setAuthData={setAuthData}
        />} />
        <Route path="/admin/dashboard" element={<Dashboard
          startImage={Login}
          auth={dataApp.auth}
          setAuthData={setAuthData}
        />} />

        <Route path="/shop" element={<ListProducts/>} />
        <Route path="/infor" element={<Infor/>} />
        <Route path="/shop/:indexProduct" element={<Product/>} />

        {/* <Route path="shop" element={<Shop auth={dataApp.auth} startImage={Shop} />} />
        <Route path="blog" element={<Blog startImage={Blog} />} />*/
        <Route path="/contacts" element={<Contacts/>} />
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

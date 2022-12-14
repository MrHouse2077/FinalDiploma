//css
import './App.css';
//npm
import { Route, Routes, useNavigate, Navigate  } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import StateApp from './State';
//Components
import Home from './Components/Pages/Home';
import About from './Components/Pages/About/About';
import Contacts from './Components/Pages/Contacts/Contacts';
import Login from './Components/Pages/Login/Login';
import Dashboard from './Components/Admin/Pages/Dashboard/Dashboard';
import ListProducts from './Components/Pages/Shop/Pages/ListProducts/ListProducts';
import Product from './Components/Pages/Shop/Pages/Product/Product';
import SearchPage from './Components/Search/SearchPage';
import CartPage from './Components/Pages/Cart/CartPage';

function App(props) {
    const navigate = useNavigate();
    let stateApp = StateApp;
    let [dataApp, setAuth] = useState(stateApp);
    //function set data login users
    function setAuthData(data){
        let copy = Object.assign([], dataApp);
            
        copy.auth.token = data.data.token;
        copy.auth.email = data.data.email;
        copy.auth.name = data.data.name;

        localStorage.setItem('token', data.data.token);

        setAuth(copy);

        navigate('/admin/dashboard');
    }
    //function for update dataApp 
    function updateStateItemCart(){
        let copy = Object.assign([], dataApp);
        copy.cart.counItem = Number(localStorage.getItem("CartCount"));
        copy.cart.products = JSON.parse(localStorage.getItem("CartProducts"));
        setAuth(copy);
        console.log(dataApp);
    }
    //function for added product in AppState Cart
    function addProductToCart(product){
        let copy = Object.assign([], dataApp);
        if(findInArr(product, copy.cart.products).status === true){
            console.log(findInArr(product, copy.cart.products));
            copy.cart.products[findInArr(product, copy.cart.products).index].count++;
        }
        if(findInArr(product, copy.cart.products).status === false){
            copy.cart.products.push({id: product, count: 1, param: []});
        }
        copy.cart.counItem++;
        setAuth(copy);
        sessionCartSetUpdate();
    }
    //{id: 1, count: 1, param: []}
    function findInArr(value, array){
        for (let i = 0; i < array.length; i++) {
            if(value === array[i].id){
                return {status: true, index: i};
            }
        }
        return {status: false, index: null};
    }
    //function for 
    function sessionCartSetUpdate(){
        localStorage.setItem("CartCount", dataApp.cart.counItem);
        localStorage.setItem("CartProducts", JSON.stringify(dataApp.cart.products));
    }
    //function for update AppState.Cart if localstorage not underfined or null
    function UpdateStateFromLocalStorage(){
        if((localStorage.getItem("CartCount") != undefined && localStorage.getItem("CartCount") >= 0) &&
             (localStorage.getItem("CartProducts") != undefined && localStorage.getItem("CartProducts").length >= 0)){
            updateStateItemCart();
        }
    }
    //Update AppState Cart from localstorage useing useEffect
    useEffect(()=>{
        UpdateStateFromLocalStorage();
    }, []);


    return (
        <div className="App">
            <Routes>
                <Route path='/' element={ <Navigate to="/home" /> }/>
                <Route path="/home" element={<Home startImage={SearchPage}/>} />
                <Route path="/cart" element={<CartPage 
                                                startImage={SearchPage} 
                                                dataApp={dataApp}
                                            />
                                            } />
                <Route path="/search/:request" element={<SearchPage startImage={SearchPage} />} />
        
                <Route path="/about" element={<About startImage={About} />} />
                <Route path="/shop" element={<ListProducts 
                                                addProductToCart={addProductToCart}
                                            />
                                            } 
                />
                <Route path="/shop/:indexProduct" element={<Product/>} />
                <Route path="/contacts" element={<Contacts/>} />
                <Route path="/login" element={<Login
                                                    startImage={Login}
                                                    auth={dataApp.auth}
                                                    setAuthData={setAuthData}
                                            />} 
                />
                <Route path="/admin/dashboard" element={<Dashboard
                    startImage={Login}
                    auth={dataApp.auth}
                    setAuthData={setAuthData}
                />} />
            </Routes>
        </div>
    );

}

export default App;

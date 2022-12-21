//css
import './App.css';
//npm
import { Route, Routes, useNavigate, Navigate  } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import StateApp from './State';
//Components
import Home from './Components/Pages/Home/Home';
import About from './Components/Pages/About/About';
import Contacts from './Components/Pages/Contacts/Contacts';
import Login from './Components/Pages/Login/Login';
import Dashboard from './Components/Admin/Pages/Dashboard/Dashboard';
import ListProducts from './Components/Pages/Shop/Pages/ListProducts/ListProducts';
import Product from './Components/Pages/Shop/Pages/Product/Product';
import SearchPage from './Components/Search/SearchPage';
import CartPage from './Components/Pages/Cart/CartPage';
import AddProduct from './Components/Admin/Pages/AddProduct/AddProduct';
import AddCategory from './Components/Admin/Pages/Dashboard/AddCategory';
import Requests from './Components/Requests';
import LoginClient from './Components/Client/Page/Login/Login';
import Profile from './Components/Client/Page/Profile/Profile';

function App(props) {
    const navigate = useNavigate();
    let stateApp = StateApp;
    let [dataApp, setAuth] = useState(stateApp);
    //function set data login admin
    function setAuthData(data){
        let copy = Object.assign([], dataApp);
            
        copy.auth.token = data.data.token;
        copy.auth.email = data.data.email;
        copy.auth.name = data.data.name;

        localStorage.setItem('token', data.data.token);

        setAuth(copy);
        if(data.code == 200){
            navigate('/admin/dashboard');
        }
    }
    //function set data login client
    function setAuthClientData(data){
        let copy = Object.assign([], dataApp);
            
        copy.client.token = data.data.token;
        copy.client.email = data.data.email;
        copy.client.name = data.data.name;

        localStorage.setItem('tokenClient', data.data.token);

        setAuth(copy);
        if(data.code == 200){
            navigate("/profile/user/"+dataApp.client.token);
        }
    }
    //function for logout user from Client zone
    function logoutClient(){
        let copy = Object.assign([], dataApp);
            
        copy.client.token = null;
        copy.client.email = null;
        copy.client.name = null;
        setAuth(copy);
        localStorage.removeItem('tokenClient');
        navigate("/");
    }
    //function for logout user from Admin zone
    function logoutAdmin(){
        let copy = Object.assign([], dataApp);
            
        copy.auth.token = null;
        copy.auth.email = null;
        copy.auth.name = null;
        setAuth(copy);
        localStorage.removeItem('token');
        navigate("/admin/login");
    }
    //function for added product in AppState Cart
    function addProductToCart(prodID, prodCount){
        let copy = Object.assign([], dataApp);
        if(findInArr(prodID, copy.cart.products).status === true){
            copy.cart.products[findInArr(prodID, copy.cart.products).index].count++;
        }
        if(findInArr(prodID, copy.cart.products).status === false){
            copy.cart.products.push({id: prodID, count: 1, param: []});
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
    //function for check localstorage and update dataApp 
    function updateStateItemCart(){
        if(localStorage.getItem("CartCount") !== undefined && 
                localStorage.getItem("CartProducts") !== undefined && 
                Number(localStorage.getItem("CartCount")) >= 0 && 
                Array.isArray(JSON.parse(localStorage.getItem("CartProducts")))){
            let copy = Object.assign([], dataApp);
            copy.cart.counItem = Number(localStorage.getItem("CartCount"));
            copy.cart.products = JSON.parse(localStorage.getItem("CartProducts"));
            setAuth(copy);
        }
        else{
            sessionCartSetUpdate();
        } 
    }
    //function for update AppState.Cart if localstorage not underfined or null
    function UpdateStateFromLocalStorage(){
        if((localStorage.getItem("CartCount") != undefined && localStorage.getItem("CartCount") >= 0) &&
             (localStorage.getItem("CartProducts") != undefined && localStorage.getItem("CartProducts").length >= 0)){
            updateStateItemCart();
        }
        else{
            sessionCartSetUpdate();
        }
    }
    //Update AppState Cart from localstorage useing useEffect
    useEffect(()=>{
        UpdateStateFromLocalStorage();
    }, []);

    return (
        <div className="App">
            <Routes>
                {/*Client Zone's routes */ }
                <Route path='/' element={ <Navigate to="/home" /> }/>
                <Route path="/home" element={<Home startImage={SearchPage}/>} />
                <Route path="/cart" element={<CartPage 
                                                startImage={SearchPage} 
                                                dataApp={dataApp}
                                                addProductToCart={addProductToCart}
                                            />
                                            } />
                <Route path="/search/:request" element={<SearchPage startImage={SearchPage} />} />
        
                <Route path="/about" element={<About startImage={About} />} />
                <Route path="/shop" element={<ListProducts 
                                                addProductToCart={addProductToCart}
                                            />
                                            } 
                />
                {/* <Route path="/shop/:indexProduct" element={<ProductPage/>} /> */}
                <Route path="/contacts" element={<Contacts/>} />
                <Route path="/user/login" element={<LoginClient
                                                startImage={Login}
                                                auth={dataApp.client}
                                                setAuthData={setAuthClientData}
                                            />}
                />
                <Route path='/profile/user/:user' element={<Profile
                                                            logoutClient={logoutClient}
                                                    />} />
                {/*Admin Zone's routes */ }
                <Route path='/admin' element={ <Navigate to="/admin/login" /> }/>
                <Route path="/admin/login" element={<Login
                                                startImage={Login}
                                                auth={dataApp.auth}
                                                setAuthData={setAuthData}
                                            />}
                />
                <Route path="/admin/dashboard" element={<Dashboard
                                                            startImage={Login}
                                                            auth={dataApp.auth}
                                                            setAuthData={setAuthData}
                                                        />} 
                />
                <Route path="/admin/add-product" element={<AddProduct
                                                            auth={dataApp.auth}
                                                            setAuthData={setAuthData}
                                                        />} 
                /> 
                <Route path="/admin/addcategory" element={<AddCategory
                                                            auth={dataApp.auth}
                                                            setAuthData={setAuthData}
                                                        />} 
                />
            </Routes>
        </div>
    );

}
export default App;

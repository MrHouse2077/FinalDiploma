
import './App.css';
import SiteInfo from './Components/SiteInfo/SiteInfo';
import ImageGallery from 'react-image-gallery';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Pages/Home';
import Shop from './Components/Pages/Shop';
import Contacts from './Components/Pages/Contacts';
import Blog from './Components/Pages/Blog';
import MainNav from './Components/MainNav/MainNav';
import SearchModal from './Components/Search/SearchModal';
import React, {useState, useEffect} from 'react';


function App() {

  const images = [
    {
      original: 'https://picsum.photos/id/1018/1000/600/',
      thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1015/1000/600/',
      thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1019/1000/600/',
      thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
  ];


  const [show, setShow] = useState(false)



  return (
    <div className="App">
      <div className='wrap'>
        <header>

          <div className='header_fon'>
            <ImageGallery items={images} />
          </div>
          


          <div className='header_content'>
            
            <img src="/logo.png" className='logo'/>
            <SiteInfo/>


            <MainNav/>
          </div>

        </header>

        <section className='content'>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="shop" element={<Shop />}>

              {/* <Route
                path="messages"
                element={<category1/>}
              /> */}
              {/* <Route
                path="messages"
                element={<category2/>}
              /> */}

            </Route>
            <Route path="blog" element={<Blog />} />
            <Route path="contacts" element={<Contacts />} />
          </Routes>
          
        </section> 
        <div className='search'>
          <button onClick = {()=>setShow(true)}>
            Лупа
          </button>
          <SearchModal onClose={()=>setShow(false)} show = {show}/>
        </div>
      </div>
    </div>
  );
}

export default App;

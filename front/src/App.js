
import './App.css';
import SiteInfo from './Components/SiteInfo/SiteInfo';
import { Route, Routes } from 'react-router-dom';
import ImageGallery from 'react-image-gallery';
import Home from './Components/Pages/Home';
import Shop from './Components/Pages/Shop';
import Contacts from './Components/Pages/Contacts';
import Blog from './Components/Pages/Blog';
import MainNav from './Components/MainNav/MainNav';
import Slider from './Components/Slider/Slider';


function App() {
  return (
    <div className="App">
      <header>
        <Slider/>
        


        {/* <div className='header_content'>
          
          <img src="/logo.png" className='logo'/>
          <SiteInfo/>


          <MainNav/>
        </div> */}
      </header>

      <section className='content'>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="shop" element={<Shop />}>

            

          </Route>
          <Route path="blog" element={<Blog />} />
          <Route path="contacts" element={<Contacts />} />
        </Routes>
      </section>
    </div>
  );
}

export default App;

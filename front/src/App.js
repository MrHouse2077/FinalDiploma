
import './App.css';
import SiteInfo from './Components/SiteInfo/SiteInfo';
import ImageGallery from 'react-image-gallery';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Pages/Home';
import Shop from './Components/Pages/Shop';
import Contacts from './Components/Pages/Contacts';
import Blog from './Components/Pages/Blog';
import MainNav from './Components/MainNav/MainNav';
import Background_glare from './Components/Background_glare/Background_glare';


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

  return (
    <div className="App">

      <header>

        <div className='header_fon'>
          <ImageGallery items={images} />
          <Background_glare/>
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
      
    
    </div>
  );
}

export default App;

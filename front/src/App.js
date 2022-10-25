
import './App.css';
import SiteInfo from './Components/SiteInfo/SiteInfo';
import ImageGallery from 'react-image-gallery';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Pages/Home';
import Shop from './Components/Pages/Shop';
import Contacts from './Components/Pages/Contacts';
import Blog from './Components/Pages/Blog';
import MainNav from './Components/MainNav/MainNav';


function App() {

  const images = [
    {
      original: 'https://themepure.net/template/futexo-prev/futexo/assets/img/bg/hero-3.jpg',
      //thumbnail: 'https://picsum.photos/id/1018/250/150/',
      originalClass: "slider_div slid_1",
    },
    {
      original: 'https://themepure.net/template/futexo-prev/futexo/assets/img/bg/hero-2.jpg',
      //thumbnail: 'https://picsum.photos/id/1015/250/150/',
      originalClass: "slider_div slid_2",
    },
    {
      original: 'https://themepure.net/template/futexo-prev/futexo/assets/img/bg/hero-1.jpg',
      //thumbnail: 'https://picsum.photos/id/1019/250/150/',
      originalClass: "slider_div slid_3",
    },
  ];

  return (
    <div className="App">
      <header>

        <div className='header_fon'>
          <ImageGallery items={images} showFullscreenButton={false} showPlayButton={false} autoPlay={true} showThumbnails={false}/>
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

            

          </Route>
          <Route path="blog" element={<Blog />} />
          <Route path="contacts" element={<Contacts />} />
        </Routes>
      </section>
      
    <div><p>dhffffffffffffffffffffffffffffffdbo;jbv;bsv
      fdinnnnnnnnnnnnnnnnnnnnnnnnnnnnn
      ro</p></div>
      <div><p>dhffffffffffffffffffffffffffffffdbo;jbv;bsv
      fdinnnnnnnnnnnnnnnnnnnnnnnnnnnnn
      ro</p></div>
      <div><p>dhffffffffffffffffffffffffffffffdbo;jbv;bsv
      fdinnnnnnnnnnnnnnnnnnnnnnnnnnnnn
      ro</p></div>
      <div><p>dhffffffffffffffffffffffffffffffdbo;jbv;bsv
      fdinnnnnnnnnnnnnnnnnnnnnnnnnnnnn
      ro</p></div>
    </div>
  );
}

export default App;

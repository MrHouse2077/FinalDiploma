import ImageGallery from 'react-image-gallery';
import "./Slider.css";

function Slider(){
    const images = [
        {
          original: 'https://themepure.net/template/futexo-prev/futexo/assets/img/bg/hero-3.jpg',
          thumbnail: 'https://picsum.photos/id/1018/250/150/',
          originalClass: "slider_div slid_1",
        },
        {
          original: 'https://themepure.net/template/futexo-prev/futexo/assets/img/bg/hero-2.jpg',
          thumbnail: 'https://picsum.photos/id/1015/250/150/',
          originalClass: "slider_div slid_2",
        },
        {
          original: 'https://themepure.net/template/futexo-prev/futexo/assets/img/bg/hero-1.jpg',
          thumbnail: 'https://picsum.photos/id/1019/250/150/',
          originalClass: "slider_div slid_3",
        },
      ];
    return (
        <div className="header_fon">
            <ImageGallery className="header_fone_slider" items={images} showNav={false} showFullscreenButton={false} showPlayButton={false} autoPlay={true} showThumbnails={true}/>
          
        </div>
        
    );
}
export default Slider;
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import image1 from "./../assets/img1.png";
import image2 from "./../assets/img2.png";
import image3 from "./../assets/img3.jpg";
import image4 from "./../assets/img4.png";
import image5 from "./../assets/img5.png";
import image6 from "./../assets/img6.jpg";
import image7 from "./../assets/img7.jpg";
import image8 from "./../assets/img8.jpg";
import image9 from "./../assets/img9.jpg";
import image10 from "./../assets/img10.jpg";
import image11 from "./../assets/img11.jpg";
import gif1 from "./../assets/gif1.gif";
import gif2 from "./../assets/gif2.gif";
import gif3 from "./../assets/gif3.gif";
import gif4 from "./../assets/gif4.gif";

import "./../styles/carousel.css"


function MyCarousel(){

    const imageList =[
        image1,
        image2,
        image3,
        image4,
        image5,
        image6,
        image7,
        image8,
        image9,
        image10,
        image11,
        gif1,
        gif2,
        gif3,
        gif4
        ];

    const settings ={
        dots:true,
        infinite:true,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }

                }
            ]
     };

     return (
        <div>
           <Slider {...settings}>
             {imageList.map((image, index) => (
               <div key={index}>
                 <img src={image} alt={`Slide ${index}`} />
               </div>
             ))}
           </Slider>
        </div>
      );

}

export default MyCarousel;
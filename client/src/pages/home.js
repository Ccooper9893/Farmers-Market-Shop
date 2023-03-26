import React from "react";
import Hero from "../components/Hero";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar, A11y, Autoplay} from 'swiper';
import AboutUs from "../Images/aboutUs.png";
import Products from "../Images/VegetableImage1.png";
import Merchants from "../Images/Merchant1.png";
import 'swiper/css';
import 'swiper/css/autoplay'
import { Link } from 'react-router-dom';
import SlideMenu from "..//components/slideMenu";

function Home() {
  return (
    <>
       <Hero />
       <div className="p-6">
       <SlideMenu />
       </div>
      
       {/* <Swiper
      // install Swiper modules
      modules={[Navigation, Scrollbar, A11y, Autoplay]}
      spaceBetween={80}
      slidesPerView={3}
      autoplay={{delay: 5000}}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
  
       <SwiperSlide>
           <div
        className="hero h-40 w-full bg-opacity-60 rounded-lg"
        style={{
          backgroundImage: `url(${Products})` ,
        }}
      > 
      <div className= "hero-overlay bg-opacity-60 text-center" >
         <p>Shop</p>
         </div>
      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div
        className="hero h-40 w-full bg-opacity-60 rounded-lg"
        style={{
          backgroundImage: `url(${Merchants})`,
        }}
      > 
      <div className= "hero-overlay bg-opacity-60 text-center items-center p-6" >
      <Link 
                    className="text-white  "
              to={`/merchants}`}
      >
      Merchants
      </Link>
        
         </div>
      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div
        className="hero h-40 w-full bg-opacity-60 rounded-lg"
        style={{
          backgroundImage: `url(${AboutUs})`,
        }}
      > 
      <div className= "hero-overlay bg-opacity-60 text-center color-white" >
         <p>Shop</p>
         </div>
      </div>
      </SwiperSlide>
      <SwiperSlide>
           <div
        className="hero h-40 w-full bg-opacity-60 rounded-lg"
        style={{
          backgroundImage: `url(${Products})` ,
        }}
      > 
      <div className= "hero-overlay bg-opacity-60 text-center color-white" >
         <p>Shop</p>
         </div>
      </div>
      </SwiperSlide>
   
    </Swiper> */}

    </>
  );
}

export default Home;

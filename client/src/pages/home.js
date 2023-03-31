import React from "react";
import Hero from "../components/Hero";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, A11y, Autoplay } from "swiper";
import AboutUs from "../Images/aboutUs.png";
import Products from "../Images/VegetableImage1.png";
import Merchants from "../Images/Merchant1.png";
import "swiper/css";
import "swiper/css/autoplay";
import SlideMenu from "..//components/slideMenu";

function Home() {
  return (
    <>
      <Hero />
      <div className="p-8 lg:p-24 lg:block hidden text-xs text-center lg:block">
        <Swiper
          // install Swiper modules
          modules={[Navigation, Scrollbar, A11y, Autoplay]}
          spaceBetween={80}
          slidesPerView={3}
         autoplay={{ delay: 5000 }}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
       
          
        >
          <SwiperSlide>
    
              <SlideMenu
                backgroundImg={`url(${AboutUs})`}
                toLink={"/"}
                text={" About us"}
              />
   
          </SwiperSlide>

          <SwiperSlide>
          
              <SlideMenu
                backgroundImg={`url(${Products})`}
                toLink={"/shop"}
                text={"Start shopping"}
              />
      
          </SwiperSlide>

          <SwiperSlide>
      
              <SlideMenu
                backgroundImg={`url(${Merchants})`}
                toLink={"/merchants"}
                text={"Merchants"}
              />
       
          </SwiperSlide>

          <SwiperSlide>
    
              <SlideMenu
                backgroundImg={`url(${Products})`}
                toLink={"/merchants"}
                text={"Something else"}
              />
          
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

export default Home;

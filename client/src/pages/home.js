import React from "react";
import Hero from "../components/Hero";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, A11y, Autoplay } from "swiper";
import Products from "../Images/VegetableImage1.png";
import Merchants from "../Images/Merchant1.png";
import Products2 from "../Images/shop.jpg"; 
import Merchants2 from "../Images/merchant.jpg"; 
import "swiper/css";
import "swiper/css/autoplay";
import SlideMenu from "..//components/slideMenu";

function Home() {
  return (
    <>
      <Hero />
      <div>
      <div className="p-16 block text-xl text-center">
        <Swiper
          // install Swiper modules // 
          modules={[Navigation, Scrollbar, A11y, Autoplay]}
          spaceBetween={80}
          slidesPerView={3}
         autoplay={{ delay: 5000 }}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          // creates viewport breakpoints // 
          breakpoints={{
            380: {
              slidesPerView: 1,
              spaceBetween: 2
            }, 
            768: {
              slidesPerView: 2,
              spaceBetween: 80
            },
            1100: {
              slidesPerView: 3,
              spaceBetween: 80
            }
          }}
          
        >
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
            backgroundImg={`url(${Products2})`}
            toLink={"/shop"}
            text={"Start shopping"}
          />
  
      </SwiperSlide>

      <SwiperSlide>
  
          <SlideMenu
            backgroundImg={`url(${Merchants2})`}
            toLink={"/merchants"}
            text={"Merchants"}
          />
   
      </SwiperSlide>

        </Swiper>
      </div>
      </div>

   
      
  
    </>
  );

 
}

export default Home;

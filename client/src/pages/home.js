import React from "react";
import Hero from "../components/Hero";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, A11y, Autoplay } from "swiper";
import Products from "../Images/product1.JPG";
import Products2 from "../Images/product2.JPG"; 
import Merchants from "../Images/merchant1.JPG";
import Merchants2 from "../Images/merchant2.JPG"; 
import darkwoodbg from "../Images/darkwood.png";

import "swiper/css";
import "swiper/css/autoplay";
import SlideMenu from "..//components/slideMenu";

function Home() {
  return (
    <>

      <div style={{
      backgroundImage: `url(${darkwoodbg})`,
      backgroundSize: '25 rem',
      backgroundRepeat: 'repeat',
    }}>
            <Hero />
      <div className="p-16 hidden md:block text-xl text-center">
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

      <div className="p-16 py-3 p-3 block text-xl text-center md:hidden">
      <SlideMenu
                backgroundImg={`url(${Products})`}
                toLink={"/shop"}
                text={"Start shopping"}
              />
                 <SlideMenu
                backgroundImg={`url(${Merchants})`}
                toLink={"/merchants"}
                text={"Merchants"}
              />
                      <SlideMenu
            backgroundImg={`url(${Products2})`}
            toLink={"/shop"}
            text={"Start shopping"}
          />
       <SlideMenu
            backgroundImg={`url(${Merchants2})`}
            toLink={"/merchants"}
            text={"Merchants"}
          />
      </div>
</div>
   
      
  
    </>
  );

 
}

export default Home;

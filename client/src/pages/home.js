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
      <div className="p-24">
        <Swiper
          // install Swiper modules
          modules={[Navigation, Scrollbar, A11y, Autoplay]}
          spaceBetween={80}
          slidesPerView={3}
         autoplay={{ delay: 5000 }}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <div>
              <SlideMenu
                backgroundImg={`url(${AboutUs})`}
                toLink={"/"}
                text={" About us"}
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div>
              <SlideMenu
                backgroundImg={`url(${Products})`}
                toLink={"/shop"}
                text={"Click here to start shopping"}
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div>
              <SlideMenu
                backgroundImg={`url(${Merchants})`}
                toLink={"/merchants"}
                text={"Merchants"}
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div>
              <SlideMenu
                backgroundImg={`url(${Products})`}
                toLink={"/merchants"}
                text={"Something else"}
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

export default Home;

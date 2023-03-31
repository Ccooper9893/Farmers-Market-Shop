import React from "react";
import { Link } from "react-router-dom";

//slide cards
function SlideMenu({ backgroundImg, toLink, text }) {
  return (
    <>
      {/* <Swiper
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
        <SwiperSlide> */}
        <div>
          <div
            className="hero h-50 w-45 bg-opacity-60 rounded-lg "
            style={{
              backgroundImage: backgroundImg,
            }}
          >
            <div className="hero-overlay bg-opacity-60 text-center  p-14 hover:bg-opacity-80">
              <Link
                className="text-slate-300 font-semibold text-l lg:text-2xl"
                to={toLink}
              >
                {text}
              </Link>
            </div>
          </div>
          </div>
        {/* </SwiperSlide>
      </Swiper> */}
    </>
  );
}

export default SlideMenu;

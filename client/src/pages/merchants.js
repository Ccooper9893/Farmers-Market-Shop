import React from "react";
import Hero from "../components/Hero";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, A11y, Autoplay } from "swiper";
import AboutUs from "../Images/aboutUs.png";
import Products from "../Images/VegetableImage1.png";
import Merchants from "../Images/Merchant1.png";
import "swiper/css";
import "swiper/css/autoplay";
import SlideMenu from "../components/slideMenu";
import { useQuery } from "@apollo/client";
import { GET_MERCHANTS } from "../utils/queries";

function MerchantPage() {

  const { loading, data } = useQuery(GET_MERCHANTS);

  return (
    <div className="flex justify-center my-8">

      <div className="hero bg-base-200 w-3/4">
        <div className="hero-content flex-col lg:flex-row">
          <img src="https://preview.redd.it/ynak2cpu3v371.jpg?width=937&format=pjpg&auto=webp&v=enabled&s=bdacc9e1936618d4632c41f232d6d8b06872a429" className="max-w-sm rounded-lg shadow-2xl" alt="Ranch gate"/>
          <div>
            <h1 className="text-3xl font-bold">Horse Prairie Ranch</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
        </div>
      </div>

      </div>
  );
}

export default MerchantPage;

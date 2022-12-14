import React from "react";
import Swiper from "react-id-swiper";
import heroSliderData from "./hero-slider-one.json";
import HeroSliderOneSingle from "./HeroSliderOneSingle";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";



const HeroSliderOne = () => {
  const params = {
    effect: "fade",
    loop: true,
    speed: 1000,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    watchSlidesVisibility: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    renderPrevButton: () => (
      <button className="swiper-button-prev ht-swiper-button-nav">
        <FiChevronLeft />
      </button>
    ),
    renderNextButton: () => (
      <button
       className="swiper-button-next ht-swiper-button-nav"
      >
        <FiChevronRight />
      </button>
    )
  };

  return (
    <div className="slider-area">
      <div className="slider-active nav-style-1">
        <Swiper {...params}>
          {heroSliderData &&
            heroSliderData.map((single, key) => {
              return (
                <HeroSliderOneSingle
                  sliderClassName="swiper-slide"
                  data={single}
                  key={key}
                />
              );
            })}
        </Swiper>
      </div>
    </div>
  );
};

export default HeroSliderOne;

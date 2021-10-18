import React from 'react';

import SwiperCore, {Pagination, Autoplay} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';

import Slide1 from './slide1/slide1';
import Slide2 from './slide2/slide2';
import Slide3 from './slide3/slide3';

import 'swiper/swiper.scss';
import './slider.scss';

SwiperCore.use([Pagination, Autoplay]);

function Slider() {
  return (
    <div className="slider">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        autoplay={{delay: 4000, disableOnInteraction: false}}
        loop
        pagination
      >
        <SwiperSlide><Slide1 /></SwiperSlide>
        <SwiperSlide><Slide2 /></SwiperSlide>
        <SwiperSlide><Slide3 /></SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Slider;

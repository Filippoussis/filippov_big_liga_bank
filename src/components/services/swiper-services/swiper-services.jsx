import React from 'react';

import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Pagination} from 'swiper';

import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';

import Deposits from '../deposits/deposits';
import Credits from '../credits/credits';
import Insurance from '../insurance/insurance';
import OnlineServices from '../online-services/online-services';

SwiperCore.use([Pagination]);

function SwiperServices() {
  return (
    <Swiper
      slidesPerView={1}
      loop
      pagination
    >
      <SwiperSlide><Deposits /></SwiperSlide>
      <SwiperSlide><Credits /></SwiperSlide>
      <SwiperSlide><Insurance /></SwiperSlide>
      <SwiperSlide><OnlineServices /></SwiperSlide>
    </Swiper>
  );
}

export default SwiperServices;

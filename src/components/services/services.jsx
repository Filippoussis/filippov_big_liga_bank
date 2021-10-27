import React from 'react';
import {useMediaQuery} from 'react-responsive';

import TabServices from './tab-services/tab-services';
import SwiperServices from './swiper-services/swiper-services';

import './services.scss';
import './tab.scss';

function Services() {

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1024px)',
  });

  return (
    <div className="services">
      {isDesktopOrLaptop ? <TabServices /> : <SwiperServices />}
    </div>
  );
}

export default Services;

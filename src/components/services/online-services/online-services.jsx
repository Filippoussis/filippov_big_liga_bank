import React from 'react';
import {Link} from 'react-router-dom';

import onlineServicesDesktop2xWebp from './online-services-desktop2x.webp';
import onlineServicesDesktop1xWebp from './online-services-desktop1x.webp';
import onlineServicesDesktop2xJpg from './online-services-desktop2x.jpg';
import onlineServicesDesktop1xJpg from './online-services-desktop1x.jpg';
import onlineServicesTablet2xWebp from './online-services-tablet2x.webp';
import onlineServicesTablet1xWebp from './online-services-tablet1x.webp';
import onlineServicesTablet2xJpg from './online-services-tablet2x.jpg';
import onlineServicesTablet1xJpg from './online-services-tablet1x.jpg';
import onlineServicesMobile2xWebp from './online-services-mobile2x.webp';
import onlineServicesMobile1xWebp from './online-services-mobile1x.webp';
import onlineServicesMobile2xJpg from './online-services-mobile2x.jpg';
import onlineServicesMobile1xJpg from './online-services-mobile1x.jpg';

function OnlineServices() {
  return (
    <section className="tab">
      <div className="tab__wrapper tab__wrapper--online-services">
        <div className="tab__content">
          <h2 className="tab__title">Лига Банк — это огромное количество онлайн-сервисов для вашего удобства</h2>
          <ul className="tab__list tab__list--online-services">
            <li>Мобильный банк, который всегда под рукой</li>
            <li>Приложение Лига-проездной позволит вам оплачивать билеты по всему миру</li>
          </ul>
          <Link to="#" className="tab__link">Узнать подробнее</Link>
        </div>
        <picture className="tab__picture">
          <source type="image/webp" media="(max-width: 767px)" srcSet={`${onlineServicesMobile1xWebp} 1x, ${onlineServicesMobile2xWebp} 2x`} />
          <source type="image/jpeg" media="(max-width: 767px)" srcSet={`${onlineServicesMobile1xJpg} 1x, ${onlineServicesMobile2xJpg} 2x`} />
          <source type="image/webp" media="(max-width: 1023px)" srcSet={`${onlineServicesTablet1xWebp} 1x, ${onlineServicesTablet2xWebp} 2x`} />
          <source type="image/jpeg" media="(max-width: 1023px)" srcSet={`${onlineServicesTablet1xJpg} 1x, ${onlineServicesTablet2xJpg} 2x`} />
          <source type="image/webp" srcSet={`${onlineServicesDesktop1xWebp} 1x, ${onlineServicesDesktop2xWebp} 2x`} />
          <img className="tab__image" src={onlineServicesDesktop1xJpg} srcSet={onlineServicesDesktop2xJpg} alt="Изображен смартфон" width="440" height="290"></img>
        </picture>
      </div>
    </section>
  );
}

export default OnlineServices;

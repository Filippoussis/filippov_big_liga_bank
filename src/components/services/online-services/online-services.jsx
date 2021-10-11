import React from 'react';
import {Link} from 'react-router-dom';

import onlineServicesDesktop2xWebp from './online-services-desktop2x.webp';
import onlineServicesDesktop1xWebp from './online-services-desktop1x.webp';
import onlineServicesTablet2xWebp from './online-services-tablet2x.webp';
import onlineServicesTablet1xWebp from './online-services-tablet1x.webp';
import onlineServicesMobile2xWebp from './online-services-mobile2x.webp';
import onlineServicesMobile1xWebp from './online-services-mobile1x.webp';

function OnlineServices() {
  return (
    <section className="tab__item">
      <div className="tab__wrapper">
        <div className="tab__content">
          <h3 className="tab__title">Лига Банк — это огромное количество онлайн-сервисов для вашего удобства</h3>
          <ul className="tab__list tab__list--online-services">
            <li>Мобильный банк, который всегда под рукой</li>
            <li>Приложение Лига-проездной позволит вам оплачивать билеты по всему миру</li>
          </ul>
          <Link to="#" className="tab__link">Узнать подробнее</Link>
        </div>
        <picture className="tab__picture">
          <source type="image/webp" media="(max-width: 767px)" srcSet={`${onlineServicesMobile1xWebp} 1x, ${onlineServicesMobile2xWebp} 2x`} />
          <source type="image/webp" media="(max-width: 1023px)" srcSet={`${onlineServicesTablet1xWebp} 1x, ${onlineServicesTablet2xWebp} 2x`} />
          <img className="tab__image" src={onlineServicesDesktop1xWebp} srcSet={onlineServicesDesktop2xWebp} alt="Изображен смартфон" width="440" height="290"></img>
        </picture>
      </div>
    </section>
  );
}

export default OnlineServices;

import React from 'react';
import {Link} from 'react-router-dom';

import insuranceDesktop2xWebp from './insurance-desktop2x.webp';
import insuranceDesktop1xWebp from './insurance-desktop1x.webp';
import insuranceTablet2xWebp from './insurance-tablet2x.webp';
import insuranceTablet1xWebp from './insurance-tablet1x.webp';
import insuranceMobile2xWebp from './insurance-mobile2x.webp';
import insuranceMobile1xWebp from './insurance-mobile1x.webp';

function Insurance() {
  return (
    <section className="tab">
      <div className="tab__wrapper">
        <div className="tab__content">
          <h2 className="tab__title">Лига Страхование — застрахуем все что захотите</h2>
          <ul className="tab__list">
            <li>Автомобильное страхование</li>
            <li>Страхование жизни и здоровья</li>
            <li>Страхование недвижимости</li>
          </ul>
          <Link to="#" className="tab__link">Узнать подробнее</Link>
        </div>
        <picture className="tab__picture">
          <source type="image/webp" media="(max-width: 767px)" srcSet={`${insuranceMobile1xWebp} 1x, ${insuranceMobile2xWebp} 2x`} />
          <source type="image/webp" media="(max-width: 1023px)" srcSet={`${insuranceTablet1xWebp} 1x, ${insuranceTablet2xWebp} 2x`} />
          <img className="tab__image" src={insuranceDesktop1xWebp} srcSet={insuranceDesktop2xWebp} alt="Изображен навесной замок" width="440" height="290"></img>
        </picture>
      </div>
    </section>
  );
}

export default Insurance;

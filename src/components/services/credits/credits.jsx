import React from 'react';

import creditsDesktop2xWebp from './credits-desktop2x.webp';
import creditsDesktop1xWebp from './credits-desktop1x.webp';
import creditsTablet2xWebp from './credits-tablet2x.webp';
import creditsTablet1xWebp from './credits-tablet1x.webp';
import creditsMobile2xWebp from './credits-mobile2x.webp';
import creditsMobile1xWebp from './credits-mobile1x.webp';

function Credits() {
  return (
    <section className="tab__item">
      <div className="tab__wrapper">
        <div className="tab__content">
          <h3 className="tab__title">Лига Банк выдает кредиты<br></br>под любые цели</h3>
          <ul className="tab__list">
            <li>Ипотечный кредит</li>
            <li>Автокредит</li>
            <li>Потребительский кредит</li>
          </ul>
          <p className="tab__description">Рассчитайте ежемесячный платеж и ставку по кредиту воспользовавшись нашим <span className="tab__description__link">кредитным калькулятором</span></p>
        </div>
        <picture className="tab__picture">
          <source type="image/webp" media="(max-width: 767px)" srcSet={`${creditsMobile1xWebp} 1x, ${creditsMobile2xWebp} 2x`} />
          <source type="image/webp" media="(max-width: 1023px)" srcSet={`${creditsTablet1xWebp} 1x, ${creditsTablet2xWebp} 2x`} />
          <img className="tab__image" src={creditsDesktop1xWebp} srcSet={creditsDesktop2xWebp} alt="Изображены модель автомобиля на стопке монет" width="440" height="290"></img>
        </picture>
      </div>
    </section>
  );
}

export default Credits;

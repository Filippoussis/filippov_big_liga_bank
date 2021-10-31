import React from 'react';

import creditsDesktop2xWebp from './credits-desktop2x.webp';
import creditsDesktop1xWebp from './credits-desktop1x.webp';
import creditsDesktop2xJpg from './credits-desktop2x.jpg';
import creditsDesktop1xJpg from './credits-desktop1x.jpg';
import creditsTablet2xWebp from './credits-tablet2x.webp';
import creditsTablet1xWebp from './credits-tablet1x.webp';
import creditsTablet2xJpg from './credits-tablet2x.jpg';
import creditsTablet1xJpg from './credits-tablet1x.jpg';
import creditsMobile2xWebp from './credits-mobile2x.webp';
import creditsMobile1xWebp from './credits-mobile1x.webp';
import creditsMobile2xJpg from './credits-mobile2x.jpg';
import creditsMobile1xJpg from './credits-mobile1x.jpg';

function Credits() {
  return (
    <section className="tab">
      <div className="tab__wrapper">
        <div className="tab__content">
          <h2 className="tab__title">Лига Банк выдает кредиты<br></br>под любые цели</h2>
          <ul className="tab__list">
            <li>Ипотечный кредит</li>
            <li>Автокредит</li>
            <li>Потребительский кредит</li>
          </ul>
          <p className="tab__description">Рассчитайте ежемесячный платеж и ставку по кредиту воспользовавшись нашим <span className="tab__description__link">кредитным калькулятором</span></p>
        </div>
        <picture className="tab__picture">
          <source type="image/webp" media="(max-width: 767px)" srcSet={`${creditsMobile1xWebp} 1x, ${creditsMobile2xWebp} 2x`} />
          <source type="image/jpeg" media="(max-width: 767px)" srcSet={`${creditsMobile1xJpg} 1x, ${creditsMobile2xJpg} 2x`} />
          <source type="image/webp" media="(max-width: 1023px)" srcSet={`${creditsTablet1xWebp} 1x, ${creditsTablet2xWebp} 2x`} />
          <source type="image/jpeg" media="(max-width: 1023px)" srcSet={`${creditsTablet1xJpg} 1x, ${creditsTablet2xJpg} 2x`} />
          <source type="image/webp" srcSet={`${creditsDesktop1xWebp} 1x, ${creditsDesktop2xWebp} 2x`} />
          <img className="tab__image" src={creditsDesktop1xJpg} srcSet={creditsDesktop2xJpg} alt="Изображены модель автомобиля на стопке монет" width="440" height="290"></img>
        </picture>
      </div>
    </section>
  );
}

export default Credits;

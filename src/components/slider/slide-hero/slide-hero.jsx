import React from 'react';
import {Link} from 'react-router-dom';

import cardsDesktop1xWebp from './cards-desktop1x.webp';
import cardsDesktop2xWebp from './cards-desktop2x.webp';
import cardsMobile1xWebp from './black-card1x.webp';
import cardsMobile2xWebp from './black-card2x.webp';
import cardsTablet1xWebp from './cards-tablet1x.webp';
import cardsTablet2xWebp from './cards-tablet2x.webp';

import './slide-hero.scss';

function SlideHero() {
  return (
    <section className="slide-hero">
      <div className="slide-hero__wrapper">
        <div className="slide-hero__header">
          <h1 className="slide-hero__title">Лига Банк</h1>
          <p className="slide-hero__description">Кредиты на любой случай</p>
          <Link to="#" className="slide-hero__link">Рассчитать кредит</Link>
        </div>
        <picture className="slide-hero__picture">
          <source type="image/webp" media="(min-width: 1024px)" srcSet={`${cardsDesktop1xWebp} 1x, ${cardsDesktop2xWebp} 2x`} />
          <source type="image/webp" media="(min-width: 768px)" srcSet={`${cardsTablet1xWebp} 1x, ${cardsTablet2xWebp} 2x`} />
          <img className="slide-hero__image" src={cardsMobile1xWebp} srcSet={cardsMobile2xWebp} alt="Изображение кредитных карт" width="211" height="135"></img>
        </picture>
      </div>
    </section>
  );
}

export default SlideHero;

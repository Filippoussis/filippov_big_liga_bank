import React from 'react';

import slide2desktop1xWebp from './slide2desktop1x.webp';
import slide2desktop2xWebp from './slide2desktop2x.webp';
import slide2tablet1xWebp from './slide2tablet1x.webp';
import slide2tablet2xWebp from './slide2tablet2x.webp';
import slide2mobile1xWebp from './slide2mobile1x.webp';
import slide2mobile2xWebp from './slide2mobile2x.webp';

function Slide2() {
  return (
    <section className="slide">
      <div className="slide__wrapper">
        <div className="slide__header">
          <h1 className="slide__title">Лига Банк</h1>
          <p className="slide__description slide__description--slide-2">Ваша уверенность в завтрашнем дне</p>
        </div>
        <picture className="slide__picture">
          <source type="image/webp" media="(min-width: 1024px)" srcSet={`${slide2desktop1xWebp} 1x, ${slide2desktop2xWebp} 2x`} />
          <source type="image/webp" media="(min-width: 768px)" srcSet={`${slide2tablet1xWebp} 1x, ${slide2tablet2xWebp} 2x`} />
          <img className="slide__image" src={slide2mobile1xWebp} srcSet={slide2mobile2xWebp} alt="Изображение на слайде №2 мужчины в костюме" width="234" height="226"></img>
        </picture>
      </div>
    </section>
  );
}

export default Slide2;

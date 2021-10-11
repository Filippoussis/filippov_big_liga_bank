import React from 'react';
import {Link} from 'react-router-dom';

import slide3desktop1xWebp from './slide3desktop1x.webp';
import slide3desktop2xWebp from './slide3desktop2x.webp';
import slide3tablet1xWebp from './slide3tablet1x.webp';
import slide3tablet2xWebp from './slide3tablet2x.webp';
import slide3mobile1xWebp from './slide3mobile1x.webp';
import slide3mobile2xWebp from './slide3mobile2x.webp';

function Slide3() {
  return (
    <section className="slide slide--3">
      <div className="slide__wrapper">
        <div className="slide__header">
          <h1 className="slide__title">Лига Банк</h1>
          <p className="slide__description">Всегда рядом</p>
          <Link to="#" className="slide__link">Найти отделение</Link>
        </div>
        <picture className="slide__picture">
          <source type="image/webp" media="(min-width: 1024px)" srcSet={`${slide3desktop1xWebp} 1x, ${slide3desktop2xWebp} 2x`} />
          <source type="image/webp" media="(min-width: 768px)" srcSet={`${slide3tablet1xWebp} 1x, ${slide3tablet2xWebp} 2x`} />
          <img className="slide__image" src={slide3mobile1xWebp} srcSet={slide3mobile2xWebp} alt="Изображение на слайде №3 улыбающейся девушки" width="234" height="226"></img>
        </picture>
      </div>
    </section>
  );
}

export default Slide3;

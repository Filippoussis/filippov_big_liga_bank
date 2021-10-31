import React from 'react';
import {Link} from 'react-router-dom';

import depositsDesktop2xWebp from './deposits-desktop2x.webp';
import depositsDesktop1xWebp from './deposits-desktop1x.webp';
import depositsDesktop2xJpg from './deposits-desktop2x.jpg';
import depositsDesktop1xJpg from './deposits-desktop1x.jpg';
import depositsTablet2xWebp from './deposits-tablet2x.webp';
import depositsTablet1xWebp from './deposits-tablet1x.webp';
import depositsTablet2xJpg from './deposits-tablet2x.jpg';
import depositsTablet1xJpg from './deposits-tablet1x.jpg';
import depositsMobile2xWebp from './deposits-mobile2x.webp';
import depositsMobile1xWebp from './deposits-mobile1x.webp';
import depositsMobile2xJpg from './deposits-mobile2x.jpg';
import depositsMobile1xJpg from './deposits-mobile1x.jpg';

function Deposits() {
  return (
    <section className="tab">
      <div className="tab__wrapper">
        <div className="tab__content">
          <h2 className="tab__title">Вклады Лига Банка – это выгодная инвестиция в свое будущее</h2>
          <ul className="tab__list">
            <li>Проценты по вкладам до 7%</li>
            <li>Разнообразные условия</li>
            <li>Возможность ежемесячной капитализации или вывод процентов на банковскую карту</li>
          </ul>
          <Link to="#" className="tab__link">Узнать подробнее</Link>
        </div>
        <picture className="tab__picture">
          <source type="image/webp" media="(max-width: 767px)" srcSet={`${depositsMobile1xWebp} 1x, ${depositsMobile2xWebp} 2x`} />
          <source type="image/jpeg" media="(max-width: 767px)" srcSet={`${depositsMobile1xJpg} 1x, ${depositsMobile2xJpg} 2x`} />
          <source type="image/webp" media="(max-width: 1023px)" srcSet={`${depositsTablet1xWebp} 1x, ${depositsTablet2xWebp} 2x`} />
          <source type="image/jpeg" media="(max-width: 1023px)" srcSet={`${depositsTablet1xJpg} 1x, ${depositsTablet2xJpg} 2x`} />
          <source type="image/webp" srcSet={`${depositsDesktop1xWebp} 1x, ${depositsDesktop2xWebp} 2x`} />
          <img className="tab__image" src={depositsDesktop1xJpg} srcSet={depositsDesktop2xJpg} alt="Изображены копилка в виде свинки и стопка монет" width="440" height="290"></img>
        </picture>
      </div>
    </section>
  );
}

export default Deposits;

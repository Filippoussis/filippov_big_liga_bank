import React from 'react';
import PropTypes from 'prop-types';

import {getCostString} from '../../../utils';

import './bid.scss';

const purposeMap = {
  'ипотеки': {
    labelFirst: 'Ипотека',
    labelSecond: 'недвижимости',
  },
  'автокредита': {
    labelFirst: 'Автокредит',
    labelSecond: 'автомобиля',
  },
};

function Bid({data}) {

  const {label, sum, payment, period} = data;

  return (
    <form className="bid">
      <h3>Шаг 3. Оформление заявки</h3>
      <dl>
        <div className="bid__item">
          <dt>Номер заявки</dt>
          <dd>№ 0010</dd>
        </div>
        <div className="bid__item">
          <dt>Цель кредита</dt>
          <dd>{purposeMap[label].labelFirst}</dd>
        </div>
        <div className="bid__item">
          <dt>{`Стоимость ${purposeMap[label].labelSecond}`}</dt>
          <dd>{getCostString(sum)}</dd>
        </div>
        <div className="bid__item">
          <dt>Первоначальный взнос</dt>
          <dd>{getCostString(payment)}</dd>
        </div>
        <div className="bid__item">
          <dt>Срок кредитования</dt>
          <dd>{period}</dd>
        </div>
      </dl>
      <div className="bid__control">
        <label className="bid__control-name" htmlFor="name">
          <input type="text" id="name" name="name" placeholder="ФИО" required />
        </label>
        <label className="bid__control-tel" htmlFor="tel">
          <input type="text" id="tel" name="tel" placeholder="Телефон" required />
        </label>
        <label className="bid__control-email" htmlFor="email">
          <input type="text" id="email" name="email" placeholder="E-mail" required />
        </label>
      </div>
      <button className="bid__button" type="submit">Отправить</button>
    </form>
  );
}

Bid.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Bid;

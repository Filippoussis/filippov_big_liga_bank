import React, {useState, useEffect, useCallback} from 'react';
import PropTypes from 'prop-types';

import SuccessMessage from '../success-message/success-message';

import {KEY_CODE_ESCAPE} from '../../../const';
import {getCostString, setBodyScroll, setNoBodyScroll} from '../../../utils';

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

  const [isModalActive, setModalActive] = useState(false);

  const handleKeyDownEsc = useCallback((event) => {
    if(event.keyCode === KEY_CODE_ESCAPE) {
      setBodyScroll();
      setModalActive(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDownEsc);

    return () => {
      document.removeEventListener('keydown', handleKeyDownEsc);
    };
  }, [handleKeyDownEsc]);

  const handleSubmit = (evt) => {
    evt.preventDefault();

    setNoBodyScroll();
    setModalActive(true);
  };

  return (
    <>
      <form className="bid" onSubmit={handleSubmit}>
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
            <input type="text" id="name" name="name" placeholder="ФИО" autoFocus required />
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
      {isModalActive && <SuccessMessage onActive={setModalActive} />}
    </>
  );
}

Bid.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Bid;

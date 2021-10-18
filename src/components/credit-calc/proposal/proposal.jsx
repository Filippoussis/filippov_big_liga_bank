import React from 'react';
import PropTypes from 'prop-types';

import {getCostString} from '../../../utils';
import './proposal.scss';

function Proposal({label, sum, rate, payment, period, income, onShowBid}) {

  const rateFormatted = String(rate.toFixed(2)).replace('.', ',');

  const handleClickButton = () => onShowBid({label, sum, payment, period});

  return (
    <section className="proposal">
      <h3>Наше предложение</h3>
      <dl>
        <div>
          <dt>{getCostString(sum)}</dt>
          <dd>{`Сумма ${label}`}</dd>
        </div>
        <div>
          <dt>{`${rateFormatted}%`}</dt>
          <dd>Процентная ставка</dd>
        </div>
        <div>
          <dt>{getCostString(payment)}</dt>
          <dd>Ежемесячный платеж</dd>
        </div>
        <div>
          <dt>{getCostString(income)}</dt>
          <dd>Необходимый доход</dd>
        </div>
      </dl>
      <button className="proposal__button" type="button" onClick={handleClickButton}>Оформить заявку</button>
    </section>
  );
}

Proposal.propTypes = {
  label: PropTypes.string.isRequired,
  sum: PropTypes.number.isRequired,
  rate: PropTypes.number.isRequired,
  payment: PropTypes.number.isRequired,
  period: PropTypes.string.isRequired,
  income: PropTypes.number.isRequired,
  onShowBid: PropTypes.func.isRequired,
};

export default Proposal;

import React, {useState} from 'react';

import GoalSelection from './goal-selection/goal-selection';
import Mortgage from './mortgage/mortgage';
import Autocredit from './autocredit/autocredit';
import Bid from './bid/bid';

import './credit-calc.scss';

const Goals = {
  MORTGAGE: 'mortgage',
  AUTOCREDIT: 'autocredit',
};

function CreditCalc() {

  const [goal, selectGoal] = useState('');
  const [bidData, setBidData] = useState(null);

  const handleSelectGoal = (value) => {
    if (value === goal) {
      return;
    }

    selectGoal(value);

    if (bidData) {
      setBidData(null);
    }
  };

  const handleShowBid = (data) => setBidData(data);

  const parametersClassMod = goal !== '' ? 'credit-calc__parameters--show' : '';

  return (
    <section className="credit-calc">
      <div className="credit-calc__wrapper">
        <h2>Кредитный калькулятор</h2>
        <div className="credit-calc__purpose">
          <fieldset>
            <legend>Шаг 1. Цель кредита</legend>
            <GoalSelection onSelectGoal={handleSelectGoal} />
          </fieldset>
          <fieldset className={`credit-calc__parameters ${parametersClassMod}`}>
            <legend>Шаг 2. Введите параметры кредита</legend>
            {goal === Goals.MORTGAGE && <Mortgage onShowBid={handleShowBid} />}
            {goal === Goals.AUTOCREDIT && <Autocredit onShowBid={handleShowBid} />}
          </fieldset>
        </div>
        {bidData && <Bid data={bidData} />}
      </div>
    </section>
  );
}

export default CreditCalc;

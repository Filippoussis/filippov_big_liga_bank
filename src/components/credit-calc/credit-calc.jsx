import React, {useState} from 'react';

import GoalSelection from './goal-selection/goal-selection';
import Mortgage from './mortgage/mortgage';
import Autocredit from './autocredit/autocredit';

import './credit-calc.scss';

const Goals = {
  MORTGAGE: 'mortgage',
  AUTOCREDIT: 'autocredit',
};

function CreditCalc() {

  const [goal, selectGoal] = useState('');

  const handleSelectGoal = (value) => selectGoal(value);

  const parametersClassMod = goal !== '' ? 'credit-calc__parameters--show' : '';

  return (
    <section className="credit-calc">
      <div className="credit-calc__wrapper">
        <h2>Кредитный калькулятор</h2>
        <div className="credit-calc__purpose">
          <fieldset>
            <legend>Шаг 1. Цель кредита</legend>
            <GoalSelection selectGoal={handleSelectGoal} />
          </fieldset>
          <fieldset className={`credit-calc__parameters ${parametersClassMod}`}>
            <legend>Шаг 2. Введите параметры кредита</legend>
            {goal === Goals.MORTGAGE && <Mortgage />}
            {goal === Goals.AUTOCREDIT && <Autocredit />}
          </fieldset>
        </div>
      </div>
    </section>
  );
}

export default CreditCalc;

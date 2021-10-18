import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';

import InvalidMessage from '../invalid-message/invalid-message';
import RejectedMessage from '../rejected-message/rejected-message';
import Proposal from '../proposal/proposal';

import {
  getValueNumber, getCostString, getPeriodString,
  getSumAutocredit, getAutocreditRate, getMonthPayment, getIncome
} from '../../../utils';

const PurposeData = {
  LABEL: 'автокредита',
  LIMIT: 200000,
  DEFAULT_COST: 2000000,
  MIN_COST: 500000,
  MAX_COST: 5000000,
  STEP_COST: 50000,
  MIN_PERCENT: 20,
  MAX_PERCENT: 100,
  STEP_PERCENT: 5,
  MIN_PERIOD: 1,
  MAX_PERIOD: 5,
  STEP_PERIOD: 1,
};

function Autocredit({onShowBid}) {

  const [cost, setCost] = useState(getCostString(PurposeData.DEFAULT_COST));
  const [initialPercent, setInitialPercent] = useState(PurposeData.MIN_PERCENT);
  const [initialPayment, setInitialPayment] = useState(getCostString(PurposeData.DEFAULT_COST * initialPercent / 100));
  const [creditPeriod, setCreditPeriod] = useState(getPeriodString(PurposeData.MIN_PERIOD));
  const [rangeCreditPeriod, setRangeCreditPeriod] = useState(PurposeData.MIN_PERIOD);
  const [isСarInsurance, setСarInsurance] = useState(true);
  const [isLifeInsurance, setLifeInsurance] = useState(true);
  const [isValidCost, setValidCost] = useState(true);

  useEffect(() => {
    const numericCost = getValueNumber(cost);

    if (numericCost < PurposeData.MIN_COST || numericCost > PurposeData.MAX_COST) {
      if (isValidCost) {
        setValidCost(false);
      }
    } else if (!isValidCost) {
      setValidCost(true);
    }
  }, [cost, isValidCost]);

  const handleFocusCost = (evt) => {
    setCost(getValueNumber(evt.target.value));
  };

  const handleBlurCost = () => {
    setCost(getCostString(cost));
  };

  const handleChangeCost = (evt) => {
    const newCost = getValueNumber(evt.target.value);
    setCost(newCost);
  };

  const handleClickDecCost = () => {
    let newCost = getValueNumber(cost) - PurposeData.STEP_COST;

    if (newCost < PurposeData.MIN_COST) {
      newCost = PurposeData.MIN_COST;
    }

    const newInitialPayment = newCost * initialPercent / 100;

    setCost(getCostString(newCost));
    setInitialPayment(getCostString(newInitialPayment));
  };

  const handleClickIncCost = () => {
    let newCost = getValueNumber(cost) + PurposeData.STEP_COST;

    if (newCost > PurposeData.MAX_COST) {
      newCost = PurposeData.MAX_COST;
    }

    const newInitialPayment = newCost * initialPercent / 100;

    setCost(getCostString(newCost));
    setInitialPayment(getCostString(newInitialPayment));
  };

  const handleFocusInitialPayment = (evt) => {
    setInitialPayment(getValueNumber(evt.target.value));
  };

  const handleBlurInitialPayment = () => {
    const minInitialPayment = getValueNumber(cost) * PurposeData.MIN_PERCENT / 100;

    if (initialPayment < minInitialPayment) {
      setInitialPayment(getCostString(minInitialPayment));
      setInitialPercent(PurposeData.MIN_PERCENT);
      return;
    }

    if (initialPayment > getValueNumber(cost)) {
      setInitialPayment(getCostString(getValueNumber(cost)));
      setInitialPercent(PurposeData.MAX_PERCENT);
      return;
    }

    setInitialPayment(getCostString(initialPayment));
  };

  const handleChangeInitialPayment = (evt) => {
    const newInitialPayment = getValueNumber(evt.target.value);
    const newInitialPercent = newInitialPayment / getValueNumber(cost) * 100;

    setInitialPayment(newInitialPayment);
    setInitialPercent(newInitialPercent);
  };

  const handleChangeInitialPercent = (evt) => {
    const newInitialPercent = evt.target.value;
    const newInitialPayment = getValueNumber(cost) * newInitialPercent / 100;

    setInitialPercent(newInitialPercent);
    setInitialPayment(getCostString(newInitialPayment));
  };

  const handleFocusCreditPeriod = (evt) => {
    setCreditPeriod(getValueNumber(evt.target.value));
  };

  const handleBlurCreditPeriod = () => {
    if (creditPeriod < PurposeData.MIN_PERIOD) {
      setCreditPeriod(getPeriodString(PurposeData.MIN_PERIOD));
      return;
    }

    if (creditPeriod > PurposeData.MAX_PERIOD) {
      setCreditPeriod(getPeriodString(PurposeData.MAX_PERIOD));
      return;
    }

    setCreditPeriod(getPeriodString(creditPeriod));
  };

  const handleChangeCreditPeriod = (evt) => {
    const newCreditPeriod = getValueNumber(evt.target.value);
    setCreditPeriod(newCreditPeriod);
    setRangeCreditPeriod(newCreditPeriod);
  };

  const handleChangeRangeCreditPeriod = (evt) => {
    const newRangeCreditPeriod = evt.target.value;
    setRangeCreditPeriod(newRangeCreditPeriod);
    setCreditPeriod(getPeriodString(newRangeCreditPeriod));
  };

  const handleChangeСarInsurance = () => setСarInsurance((state) => !state);
  const handleChangeLifeInsurance = () => setLifeInsurance((state) => !state);

  const sumAutocredit = getSumAutocredit(cost, initialPayment);
  const autocreditRate = getAutocreditRate(cost, isСarInsurance, isLifeInsurance);
  const monthPayment = getMonthPayment(sumAutocredit, autocreditRate, creditPeriod);
  const income = getIncome(monthPayment);

  const invalidInputCostClassMod = !isValidCost ? 'credit-calc__cost-input--invalid' : '';
  const invalidLabelCostClassMod = !isValidCost ? 'credit-calc__label-footer--invalid' : '';

  return (
    <>
      <label htmlFor="cost" className="credit-calc__cost">
        <span className="credit-calc__label-title">Стоимость автокредита</span>
        {!isValidCost && <InvalidMessage />}
        <div className="credit-calc__cost-control">
          <button
            className="credit-calc__cost-button credit-calc__cost-button--minus"
            type="button"
            onClick={handleClickDecCost}
          >-
          </button>
          <input
            className={`credit-calc__cost-input ${invalidInputCostClassMod}`}
            type="text"
            id="cost"
            name="cost"
            value={cost}
            onChange={handleChangeCost}
            onFocus={handleFocusCost}
            onBlur={handleBlurCost}
          />
          <button
            className="credit-calc__cost-button credit-calc__cost-button--plus"
            type="button"
            onClick={handleClickIncCost}
          >+
          </button>
        </div>
        <span className={`credit-calc__label-footer ${invalidLabelCostClassMod}`}>
          {`От ${PurposeData.MIN_COST.toLocaleString()} до ${PurposeData.MAX_COST.toLocaleString()} рублей`}
        </span>
      </label>
      <label htmlFor="initial-payment">
        <span className="credit-calc__label-title">Первоначальный взнос</span>
        <input
          type="text"
          id="initial-payment"
          name="initial-payment"
          value={initialPayment}
          onChange={handleChangeInitialPayment}
          onFocus={handleFocusInitialPayment}
          onBlur={handleBlurInitialPayment}
        />
        <input
          className="credit-calc__range"
          type="range"
          min={PurposeData.MIN_PERCENT}
          max={PurposeData.MAX_PERCENT}
          step={PurposeData.STEP_PERCENT}
          value={initialPercent}
          onChange={handleChangeInitialPercent}
        />
        <span className="credit-calc__label-footer">{`${initialPercent}%`}</span>
      </label>
      <label htmlFor="credit-period">
        <span className="credit-calc__label-title">Срок кредитования</span>
        <input
          type="text"
          id="credit-period"
          name="credit-period"
          value={creditPeriod}
          onChange={handleChangeCreditPeriod}
          onFocus={handleFocusCreditPeriod}
          onBlur={handleBlurCreditPeriod}
        />
        <input
          className="credit-calc__range"
          type="range"
          min={PurposeData.MIN_PERIOD}
          max={PurposeData.MAX_PERIOD}
          step={PurposeData.STEP_PERIOD}
          value={rangeCreditPeriod}
          onChange={handleChangeRangeCreditPeriod}
        />
        <div className="credit-calc__label-footer credit-calc__label-footer--credit-period">
          <span>{`${PurposeData.MIN_PERIOD} лет`}</span>
          <span>{`${PurposeData.MAX_PERIOD} лет`}</span>
        </div>
      </label>
      <label className="credit-calc__optional" htmlFor="car-insurance">
        <input
          type="checkbox"
          id="car-insurance"
          name="car-insurance"
          checked={isСarInsurance}
          onChange={handleChangeСarInsurance}
        />
        <span className="credit-calc__label-title">Оформить КАСКО в нашем банке</span>
      </label>
      <label className="credit-calc__optional" htmlFor="life-insurance">
        <input
          type="checkbox"
          id="life-insurance"
          name="life-insurance"
          checked={isLifeInsurance}
          onChange={handleChangeLifeInsurance}
        />
        <span className="credit-calc__label-title">Оформить Страхование жизни в нашем банке</span>
      </label>
      {
        sumAutocredit > PurposeData.LIMIT
          ? <Proposal label={PurposeData.LABEL} sum={sumAutocredit} rate={autocreditRate} payment={monthPayment} period={creditPeriod} income={income} onShowBid={onShowBid} />
          : <RejectedMessage label={PurposeData.LABEL} limit={PurposeData.LIMIT} />
      }
    </>
  );
}

Autocredit.propTypes = {
  onShowBid: PropTypes.func.isRequired,
};

export default Autocredit;

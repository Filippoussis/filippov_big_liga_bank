export const setNoBodyScroll = () => document.body.style.overflow = 'hidden';
export const setBodyScroll = () => document.body.style.overflow = 'scroll';

export const getValueNumber = (value) => +value.toString().replace(/[^\d]/g, '');
export const getCostString = (value) => `${value.toLocaleString()} рублей`;
export const getPeriodString = (value) => `${value} лет`;

const MONTHS_IN_YEAR = 12;
const MOTHER_CAPITAL = 470000;
const CAR_PRICE = 2000000;
const MIN_INCOME = 45;

const MortgageRate = {
  CONDITION: 15,
  MIN: 8.5,
  MAX: 9.4,
};

const AutocreditRate = {
  MAX1: 16,
  MAX2: 15,
  PART_INSURANCE: 8.5,
  TOTAL_INSURANCE: 3.5,
};

export const getSumMortgage = (cost, initialPayment, isMotherCapital) => {
  const motherCapital = isMotherCapital ? MOTHER_CAPITAL : 0;
  return getValueNumber(cost) - getValueNumber(initialPayment) - motherCapital;
};

export const getMortgageRate = (initialPercent) => initialPercent < MortgageRate.CONDITION ? MortgageRate.MAX : MortgageRate.MIN;

export const getMonthPayment = (cost, rate, period) => {
  const floatRate = rate / 100 / MONTHS_IN_YEAR;
  return Math.round(cost * (floatRate + floatRate / ((1 + floatRate) ** (getValueNumber(period) * MONTHS_IN_YEAR) - 1)));
};

export const getIncome = (monthPayment) => Math.round(monthPayment * 100 / MIN_INCOME);

export const getSumAutocredit = (cost, initialPayment) => getValueNumber(cost) - getValueNumber(initialPayment);

export const getAutocreditRate = (cost, isСarInsurance, isLifeInsurance) => {
  if (getValueNumber(cost) < CAR_PRICE && (!isСarInsurance && !isLifeInsurance)) {
    return AutocreditRate.MAX1;
  }

  if (getValueNumber(cost) >= CAR_PRICE && (!isСarInsurance && !isLifeInsurance)) {
    return AutocreditRate.MAX2;
  }

  if (isСarInsurance && isLifeInsurance) {
    return AutocreditRate.TOTAL_INSURANCE;
  }

  if (isСarInsurance || isLifeInsurance) {
    return AutocreditRate.PART_INSURANCE;
  }
};

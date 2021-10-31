import React, {useState} from 'react';

import GoalSelection from './goal-selection/goal-selection';
import Mortgage from './mortgage/mortgage';
import Autocredit from './autocredit/autocredit';
import Proposal from './proposal/proposal';
import Bid from './bid/bid';

import './credit-calc.scss';

const Goals = {
  MORTGAGE: 'mortgage',
  AUTOCREDIT: 'autocredit',
};

function CreditCalc() {

  const [goal, selectGoal] = useState('');
  const [proposalData, setProposalData] = useState({
    label: '',
    limit: 0,
    sum: 0,
    rate: 0,
    payment: 0,
    period: '',
    income: 0,
  });

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

  const handleShowProposal = (data) => setProposalData(data);
  const handleShowBid = (data) => setBidData(data);

  const {label, limit, sum, rate, payment, period, income} = proposalData;

  return (
    <section className="credit-calc">
      <div className="credit-calc__wrapper">
        <h2>Кредитный калькулятор</h2>
        <div className="credit-calc__purpose">
          <div className="credit-calc__purpose-col">
            <fieldset className="credit-calc__goal">
              <legend>Шаг 1. Цель кредита</legend>
              <GoalSelection onSelectGoal={handleSelectGoal} />
            </fieldset>
            <fieldset>
              {goal === Goals.MORTGAGE && <Mortgage onShowProposal={handleShowProposal} />}
              {goal === Goals.AUTOCREDIT && <Autocredit onShowProposal={handleShowProposal} />}
            </fieldset>
          </div>
          {
            goal !== '' && <div><Proposal label={label} limit={limit} sum={sum} rate={rate} payment={payment} period={period} income={income} onShowBid={handleShowBid} /></div>
          }
        </div>
        {bidData && <Bid data={bidData} />}
      </div>
    </section>
  );
}

export default CreditCalc;

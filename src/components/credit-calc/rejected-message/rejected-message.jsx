import React from 'react';
import PropTypes from 'prop-types';

import {getCostString} from '../../../utils';

import './rejected-message.scss';

const purposeMap = {
  'ипотеки': 'ипотечные кредиты',
  'автокредита': 'автокредиты',
};

function RejectedMessage({label, limit}) {
  return (
    <div className="rejected-message">
      <p className="rejected-message__header">{`Наш банк не выдаёт ${purposeMap[label]} меньше ${getCostString(limit)}.`}</p>
      <p className="rejected-message__footer">Попробуйте использовать другие<br></br>параметры для расчёта.</p>
    </div>
  );
}

RejectedMessage.propTypes = {
  label: PropTypes.string.isRequired,
  limit: PropTypes.number.isRequired,
};

export default RejectedMessage;

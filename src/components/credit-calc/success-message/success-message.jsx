import React from 'react';
import PropTypes from 'prop-types';

import {setBodyScroll} from '../../../utils';

import './success-message.scss';

function SuccessMessage({onActive}) {

  const handleClick = () => {
    setBodyScroll();
    onActive(false);
  };

  return (
    <div className="success-message" onClick={handleClick}>
      <div className="success-message__content" onClick={(evt) => evt.stopPropagation()}>
        <button type="button" className="success-message__close" onClick={handleClick} aria-label="Кнопка Закрыть">
          <svg width="16" height="16"><use xlinkHref="#close"/></svg>
        </button>
        <p className="success-message__header">Спасибо за обращение в наш банк.</p>
        <p className="success-message__footer">Наш менеджер скоро свяжется с вами по указанному номеру телефона.</p>
      </div>
    </div>
  );
}

SuccessMessage.propTypes = {
  onActive: PropTypes.func.isRequired,
};

export default SuccessMessage;

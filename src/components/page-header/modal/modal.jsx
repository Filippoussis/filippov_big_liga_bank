import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import FocusTrap from 'focus-trap-react';

import {setBodyScroll} from '../../../utils';

import Logo from '../../logo/logo';
import iconEye from './eye.svg';

import './modal.scss';

function Modal({onActive}) {

  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [isShowPassword, setShowPassword] = useState(false);

  const handleClick = () => {
    setBodyScroll();
    onActive(false);
  };

  const handleChange = (evt) => {
    const {name, value} = evt.target;

    setFormData((state) => ({
      ...state,
      [name]: value,
    }));
  };

  const handleButtonEyeChange = () => setShowPassword((state) => !state);

  const handleSubmit = (evt) => {
    evt.preventDefault();

    localStorage.setItem('formData', JSON.stringify(formData));
    setBodyScroll();
    onActive(false);
  };

  const typeInput = !isShowPassword ? 'password' : 'text';

  const {username, password} = formData;

  return (
    <FocusTrap>
      <div className="modal" onClick={handleClick}>
        <form className="modal__form" onClick={(evt) => evt.stopPropagation()} onSubmit={handleSubmit} onChange={handleChange}>
          <div className="modal__header">
            <Logo isFooter={false} />
            <button type="button" className="modal__close" onClick={handleClick} aria-label="Кнопка Закрыть">
              <svg width="16" height="16">
                <use xlinkHref="#close"/>
              </svg>
            </button>
          </div>
          <label htmlFor="username" className="modal__label">
            <span>Логин</span>
            <input type="text" id="username" name="username" className="modal__input" autoFocus defaultValue={username} required />
          </label>
          <label htmlFor="password" className="modal__label modal__label--password">
            <span>Пароль</span>
            <input id="password" name="password" type={typeInput} className="modal__input" defaultValue={password} required/>
            <button
              className="modal__icon-password"
              type="button"
              onMouseDown={handleButtonEyeChange}
              onMouseUp={handleButtonEyeChange}
              onTouchStart={handleButtonEyeChange}
              onTouchEnd={handleButtonEyeChange}
            >
              <img src={iconEye} alt="Иконка в виде глаза для открытия или скрытия пароля" width="22" height="12" />
            </button>
          </label>
          <Link to="#" className="modal__link">Забыли пароль?</Link>
          <button type="submit" className="modal__submit">Войти</button>
        </form>
      </div>
    </FocusTrap>
  );
}

Modal.propTypes = {
  onActive: PropTypes.func.isRequired,
};

export default Modal;

import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

import './user-block.scss';

function UserBlock({isOpenMenu, onEnter}) {

  const handleClick = (evt) => {
    evt.preventDefault();
    onEnter();
  };

  const classMod = isOpenMenu ? 'user-block--shown' : '';

  return (
    <Link to="#" className={`user-block ${classMod}`} aria-label="icon-enter" onClick={handleClick}>
      <svg width="20" height="22">
        <use xlinkHref="#enter"/>
      </svg>
      <span className="user-block__label">Войти в Интернет-банк</span>
    </Link>
  );
}

UserBlock.propTypes = {
  isOpenMenu: PropTypes.bool,
  onEnter: PropTypes.func,
};

export default UserBlock;

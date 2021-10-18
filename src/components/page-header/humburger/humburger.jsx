import React from 'react';
import PropTypes from 'prop-types';

import './humburger.scss';

function Humburger({isOpenMenu, openMenu}) {

  const handleClick = () => {
    if (isOpenMenu) {
      return;
    }
    openMenu();
  };

  return (
    <button className="humburger" type="button" onClick={handleClick}>
      <svg width="16" height="12">
        <use xlinkHref="#humburger"/>
      </svg>
    </button>
  );
}

Humburger.propTypes = {
  isOpenMenu: PropTypes.bool.isRequired,
  openMenu: PropTypes.func.isRequired,
};

export default Humburger;

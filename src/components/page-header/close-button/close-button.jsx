import React from 'react';
import PropTypes from 'prop-types';

import './close-button.scss';

function CloseButton({isOpenMenu, onCloseMenu}) {

  const handleClickButton = () => onCloseMenu();

  const classMod = isOpenMenu ? 'close-button--shown' : '';

  return (
    <button className={`close-button ${classMod}`} type="button" onClick={handleClickButton}>
      <svg width="14" height="14">
        <use xlinkHref="#close"/>
      </svg>
    </button>
  );
}

CloseButton.propTypes = {
  isOpenMenu: PropTypes.bool.isRequired,
  onCloseMenu: PropTypes.func.isRequired,
};

export default CloseButton;

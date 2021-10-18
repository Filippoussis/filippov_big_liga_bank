import React from 'react';
import PropTypes from 'prop-types';

import './logo.scss';

function Logo({isFooter}) {

  const classMod = isFooter ? 'logo--page-footer' : '';

  return (
    <div className={`logo ${classMod}`}>
      <svg width="28" height="25">
        <use xlinkHref="#logo"/>
      </svg>
      ЛИГА Банк
    </div>
  );
}

Logo.propTypes = {
  isFooter: PropTypes.bool.isRequired,
};

export default Logo;

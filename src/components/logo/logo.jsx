import React from 'react';
import './logo.scss';

function Logo() {
  return (
    <div className="logo logo--page-footer">
      <svg width="28" height="25">
        <use xlinkHref="#logo"/>
      </svg>
      ЛИГА Банк
    </div>
  );
}

export default Logo;

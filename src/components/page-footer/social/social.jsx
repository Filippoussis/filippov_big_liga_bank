import React from 'react';
import {Link} from 'react-router-dom';

import './social.scss';

function Social() {
  return (
    <ul className="social">
      <li>
        <Link to="#" className="social__link social__link--facebook" aria-label="icon-facebook">
          <svg width="9" height="16">
            <use xlinkHref="#facebook"/>
          </svg>
        </Link>
      </li>
      <li>
        <Link to="#" className="social__link social__link--instagram" aria-label="icon-instagram">
          <svg width="16" height="16">
            <use xlinkHref="#instagram"/>
          </svg>
        </Link>
      </li>
      <li>
        <Link to="#" className="social__link social__link--twitter" aria-label="icon-twitter">
          <svg width="16" height="13">
            <use xlinkHref="#twitter"/>
          </svg>
        </Link>
      </li>
      <li>
        <Link to="#" className="social__link social__link--youtube" aria-label="icon-youtube">
          <svg width="16" height="13">
            <use xlinkHref="#youtube"/>
          </svg>
        </Link>
      </li>
    </ul>
  );
}

export default Social;

import React from 'react';

import Logo from '../logo/logo';
import Official from './official/official';
import SiteSections from './site-sections/site-sections';
import ShortPhone from './short-phone/short-phone';
import FreePhone from './free-phone/free-phone';
import Social from './social/social';

import './page-footer.scss';

function Footer() {
  return (
    <footer className="page-footer">
      <div className="page-footer__wrapper">
        <div className="page-footer__col page-footer__col--1">
          <Logo isFooter />
          <Official />
          <SiteSections />
        </div>
        <div className="page-footer__col page-footer__col--2">
          <ShortPhone />
          <FreePhone />
          <Social />
        </div>
      </div>
    </footer>
  );
}

export default Footer;

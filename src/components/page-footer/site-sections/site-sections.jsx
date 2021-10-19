import React from 'react';
import {Link} from 'react-router-dom';
import {FOOTER_MENU_ITEMS} from '../../../const';

import './site-sections.scss';

function SiteSections() {

  const items = FOOTER_MENU_ITEMS.map((item) =><li key={item}><Link to="#" className="site-sections__link">{item}</Link></li>);

  return (
    <ul className="site-sections">
      {items}
    </ul>
  );
}

export default SiteSections;

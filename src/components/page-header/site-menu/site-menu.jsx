import React, {useState} from 'react';
import PropTypes from 'prop-types';

import SiteMenuItem from './site-menu-item/site-menu-item';

import './site-menu.scss';

import {SITE_MENU_HEADER} from '../../../const';

function SiteMenu({isOpenMenu}) {

  const [isActiveItem, setActiveItem] = useState(null);

  const classMod = isOpenMenu ? 'site-menu--shown' : '';

  const items = SITE_MENU_HEADER.map((item) => (
    <li key={item}>
      <SiteMenuItem item={item} isActiveItem={isActiveItem} setActiveItem={setActiveItem}/>
    </li>
  ));

  return (
    <ul className={`site-menu ${classMod}`}>
      {items}
    </ul>
  );
}

SiteMenu.propTypes = {
  isOpenMenu: PropTypes.bool,
};

export default SiteMenu;

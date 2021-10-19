import React, {useState} from 'react';
import PropTypes from 'prop-types';

import SiteMenuItem from './site-menu-item/site-menu-item';

import './site-menu.scss';

import {HEADER_MENU_ITEMS} from '../../../const';

function SiteMenu({isOpenMenu}) {

  const [isActiveItem, setActiveItem] = useState('');

  const classMod = isOpenMenu ? 'site-menu--shown' : '';

  const items = HEADER_MENU_ITEMS.map((item) => (
    <li key={item}>
      <SiteMenuItem item={item} isActiveItem={isActiveItem} onActiveItem={setActiveItem}/>
    </li>
  ));

  return (
    <ul className={`site-menu ${classMod}`}>
      {items}
    </ul>
  );
}

SiteMenu.propTypes = {
  isOpenMenu: PropTypes.bool.isRequired,
};

export default SiteMenu;

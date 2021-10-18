import React from 'react';
import PropTypes from 'prop-types';

import TabsNavItem from './tabs-nav-item/tabs-nav-item';

import {TABS_NAV_ITEMS} from '../../../../const';

import './tabs-nav.scss';

function TabsNav({activeTab, onSelectTab}) {

  const items = TABS_NAV_ITEMS.map((item) => (
    <li key={item} className="tabs-nav__item"><TabsNavItem label={item} activeTab={activeTab} onSelectTab={onSelectTab} /></li>
  ));

  return <ul className="tabs-nav">{items}</ul>;
}

TabsNav.propTypes = {
  activeTab: PropTypes.oneOf(TABS_NAV_ITEMS).isRequired,
  onSelectTab: PropTypes.func.isRequired,
};

export default TabsNav;

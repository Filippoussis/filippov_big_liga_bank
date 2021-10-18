import React from 'react';
import PropTypes from 'prop-types';

import {TABS_NAV_ITEMS} from '../../../../../const';

const MapTabsItem = {
  'Вклады': 'deposits',
  'Кредиты': 'credits',
  'Страхование': 'insurance',
  'Онлайн-сервисы': 'online-services',
};

function TabsNavItem({label, activeTab, onSelectTab}) {

  const classModActive = label === activeTab ? 'tabs-nav__control--active' : '';

  return (
    <button
      type="button"
      className={`tabs-nav__control ${classModActive}`}
      onClick={() => onSelectTab(label)}
    >
      <span className={`tabs-nav__label tabs-nav__label--${MapTabsItem[label]}`}>{label}</span>
    </button>
  );
}

TabsNavItem.propTypes = {
  label: PropTypes.oneOf(TABS_NAV_ITEMS).isRequired,
  activeTab: PropTypes.oneOf(TABS_NAV_ITEMS).isRequired,
  onSelectTab: PropTypes.func.isRequired,
};

export default TabsNavItem;

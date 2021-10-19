import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import './site-menu-item.scss';

function SiteMenuItem({item, onActiveItem, isActiveItem}) {

  const handleClick = (evt) => {
    evt.preventDefault();
    onActiveItem(evt.target.dataset.value);
  };

  const classMod = item === isActiveItem ? 'site-menu-item--active' : '';

  return <Link to="#" className={`site-menu-item ${classMod}`} data-value={item} onClick={handleClick}>{item}</Link>;
}

SiteMenuItem.propTypes = {
  item: PropTypes.string.isRequired,
  onActiveItem: PropTypes.func.isRequired,
  isActiveItem: PropTypes.string.isRequired,
};

export default SiteMenuItem;

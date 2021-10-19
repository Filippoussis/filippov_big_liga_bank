import React, {useState, useEffect, useCallback} from 'react';
import SiteMenu from './site-menu/site-menu';
import Humburger from './humburger/humburger';
import Logo from '../logo/logo';
import CloseButton from './close-button/close-button';
import UserBlock from './user-block/user-block';
import Modal from './modal/modal';

import {setBodyScroll, setNoBodyScroll} from '../../utils';
import {KEY_CODE_ESCAPE} from '../../const';

import './page-header.scss';

function PageHeader() {

  const [isOpenMenu, toggleMenu] = useState(false);
  const [isModalActive, setModalActive] = useState(false);

  const handleOpenButtonClick = () => toggleMenu(true);
  const handleCloseButtonClick = () => toggleMenu(false);

  const handleKeyDownEsc = useCallback((event) => {
    if(event.keyCode === KEY_CODE_ESCAPE) {
      setBodyScroll();
      setModalActive(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDownEsc);

    return () => {
      document.removeEventListener('keydown', handleKeyDownEsc);
    };
  }, [handleKeyDownEsc]);

  const handleClickEnter = () => {
    setNoBodyScroll();
    setModalActive(true);
  };

  const shortMenuClassMod = isOpenMenu ? 'page-header__short-menu--shown' : '';
  const fullMenuClassMod = isOpenMenu ? 'page-header__full-menu--shown' : '';

  return (
    <header className="page-header">
      <div className="page-header__wrapper">
        <div className={`page-header__short-menu ${shortMenuClassMod}`}>
          <Humburger isOpenMenu={isOpenMenu} onShowMenu={handleOpenButtonClick} />
          <Logo isFooter={false} />
          <CloseButton isOpenMenu={isOpenMenu} onCloseMenu={handleCloseButtonClick} />
        </div>
        <div className={`page-header__full-menu ${fullMenuClassMod}`}>
          <SiteMenu isOpenMenu={isOpenMenu} />
          <UserBlock isOpenMenu={isOpenMenu} onEnter={handleClickEnter} />
        </div>
      </div>
      {isModalActive && <Modal onActive={setModalActive} />}
    </header>
  );
}

export default PageHeader;

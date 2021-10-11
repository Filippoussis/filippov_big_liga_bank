import React, {useState} from 'react';

import Deposits from './deposits/deposits';
import Credits from './credits/credits';
import Insurance from './insurance/insurance';
import OnlineServices from './online-services/online-services';
import TabsNav from './tabs-nav/tabs-nav';

import './services.scss';

const DEFAULT_TAB = 'Вклады';

function Services() {

  const [activeTab, setActiveTab] = useState(DEFAULT_TAB);
  const handleSelectTab = (label) => setActiveTab(label);

  const switchTab = (tab) => {
    switch(tab) {
      case 'Вклады':
        return <Deposits />;
      case 'Кредиты':
        return <Credits />;
      case 'Страхование':
        return <Insurance />;
      case 'Онлайн-сервисы':
        return <OnlineServices />;
      default:
        return null;
    }
  };

  return (
    <div className="services">
      <TabsNav activeTab={activeTab} onSelectTab={handleSelectTab} />
      {switchTab(activeTab)}
    </div>
  );
}

export default Services;

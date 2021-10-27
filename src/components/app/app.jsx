import React from 'react';

import PageHeader from '../page-header/page-header';
import Slider from '../slider/slider';
import Services from '../services/services';
import CreditCalc from '../credit-calc/credit-calc';
import OfficialMap from '../official-map/official-map';
import PageFooter from '../page-footer/page-footer';

import './app.scss';

function App() {
  return (
    <div className="main-page">
      <PageHeader />
      <main>
        <Slider />
        <Services />
        <CreditCalc />
        <OfficialMap />
      </main>
      <PageFooter />
    </div>
  );
}

export default App;

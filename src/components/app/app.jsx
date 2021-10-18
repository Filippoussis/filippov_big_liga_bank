import React from 'react';

import PageHeader from '../page-header/page-header';
import Slider from '../slider/slider';
import Services from '../services/services';
import CreditCalc from '../credit-calc/credit-calc';
import OfficialMap from '../official-map/official-map';
import PageFooter from '../page-footer/page-footer';

function App() {
  return (
    <>
      <PageHeader />
      <Slider />
      <Services />
      <CreditCalc />
      <OfficialMap />
      <PageFooter />
    </>
  );
}

export default App;

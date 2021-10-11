import React from 'react';

import PageHeader from '../page-header/page-header';
import Slider from '../slider/slider';
import Services from '../services/services';
import OfficialMap from '../official-map/official-map';
import PageFooter from '../page-footer/page-footer';

function App() {
  return (
    <>
      <PageHeader />
      <Slider />
      <Services />
      <OfficialMap />
      <PageFooter />
    </>
  );
}

export default App;

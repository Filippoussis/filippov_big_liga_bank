import React, {useState, useEffect} from 'react';

import Slide1 from './slide1/slide1';
import Slide2 from './slide2/slide2';
import Slide3 from './slide3/slide3';

function Slider() {

  const [state, setState] = useState(1);

  useEffect(() => setTimeout(() => setState((s) => s === 3 ? s = 1 : s = s + 1), 4000), [state]);

  switch(state) {
    case 1:
      return <Slide1 />;
    case 2:
      return <Slide2 />;
    case 3:
      return <Slide3 />;
    default:
      return null;
  }
}

export default Slider;

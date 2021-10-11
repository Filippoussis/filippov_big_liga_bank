import React from 'react';
import {YMaps, Map, Placemark} from 'react-yandex-maps';

import {BANK_DEPARTMENTS_COORDS} from '../../const';

import './official-map.scss';

const CenterCoords = {
  title: 'Уфа',
  LAT: '54.735152',
  LNG: '55.958736',
};

function OfficialMap() {

  return (
    <section className="official-map">
      <div className="official-map__wrapper">
        <h2>Отделения Лига Банка</h2>
        <div className="official-map__frame">
          <YMaps>
            <Map defaultState={{center: [CenterCoords.LAT, CenterCoords.LNG], zoom: 5}} width="100%" height="100%">
              {BANK_DEPARTMENTS_COORDS.map((item) => (
                <Placemark
                  key={item.id}
                  geometry={[item.LAT, item.LNG]}
                  options={{
                    iconLayout:'default#image',
                    iconImageHref: './images/location.svg',
                    iconImageSize: [35, 40],
                  }}
                />
              ))}
            </Map>
          </YMaps>
        </div>
      </div>
    </section>
  );
}

export default OfficialMap;

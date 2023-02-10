import { Layer } from 'leaflet';

import { FeatureProps } from './models';

// Convert Epoch time to human readable with specific timezone
const timeConverter = (time: number, offset: number): string => {
  const d = new Date(time);
  const utc = d.getTime() + d.getTimezoneOffset() * 60000; // This converts to UTC 00:00
  const nd = new Date(utc + 3600000 * offset);
  return nd.toLocaleString();
};

const onEachFeature = (feature: FeatureProps, layer: Layer) => {
  const {
    properties: { title, place, time, mag, url },
    geometry: { coordinates }
  } = feature;

  const popupContent = `
      <div class='popup_content vazir_font' style='text-align: right;'>
        <h3 style="font-size: 1.17em; font-weight: bold; text-align: center;">${title}</h3>
         ${place ?? 'نامشخص'} :<b>موقعیت</b> <br>
        ${timeConverter(time, 3)} :<b>(GMC+3) زمان</b> <br>
        <b>عرض جغرافیایی</b>: ${coordinates[1]}
        <b>طول جغرافیایی</b>: ${coordinates[0]} <br>
        <b>عمق</b>: ${coordinates[2]} کیلومتر <br>
        <b>بزرگی و شدت</b>: ${mag} ریشتر <br>
        <b>جزئیات</b>: <a href=${url}>جهت دریافت جزئیات بیشتر روی متن کلیک کنید</a>
      </div>
  `.replace('AM', 'ق.ض').replace('PM', 'ب.ض');

  layer.bindPopup(popupContent);
};

export { timeConverter, onEachFeature };

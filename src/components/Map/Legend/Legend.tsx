import { useEffect } from 'react';
import { Control, DomUtil } from 'leaflet';
import { useMap } from 'react-leaflet';

import { circleMarkerColor } from '../utils';
import './index.css';
import '../../../assets/css/App.css';

export default function Legend() {
  const map = useMap();

  useEffect(() => {
    if (!map) return;

    const legend = new Control({ position: 'bottomright' });

    legend.onAdd = () => {
      const div = DomUtil.create('div', 'info legend vazir_font position_circleMarkerColor');
      const grades = [0, 1, 2, 3, 5 ,7];
      const labels = [];

      labels.push("<h4 style='font-size: bold;'>بزرگی و شدت</h4>");

      grades.forEach((from, index) => {
        const to = grades[index + 1];
        labels.push(
          `<i style="background:${circleMarkerColor(from + 1)}"></i> 
           <span> ${from}${ to ? `&ndash;${to}` : '+'}</span>`
        );
      });
      div.innerHTML = labels.join('<br>');
      return div;
    };

    legend.addTo(map);
  }, [map]);

  return null;
}

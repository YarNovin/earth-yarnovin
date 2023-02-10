const mapHeight = { height: 'calc(100vh - 56px)' };

const tileLayers = [
  {
    id: 1,
    name: 'نقشه نقاط زمین لرزه',
    attribution:
      '<a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    url: 'https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png',
    checked: false
  },
  {
    id: 2,
    name: 'نقشه OpenStreetMap',
    attribution:
      '<a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    checked: true
  },
  {
    id: 3,
    name: 'نقشه GoogleStreets',
    attribution: '&copy; Google',
    url: 'http://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',
    checked: false
  },
  {
    id: 4,
    name: 'نقشه ماهواره ای',
    attribution: '&copy; Google',
    url: 'http://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',
    checked: false
  }
];

const tectonicPlatesStyle = {
  color: 'purple',
  weight: 2
};

export { mapHeight, tileLayers, tectonicPlatesStyle };

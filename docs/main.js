import CustomControl from '../src/CustomControlTemplate.js';

const map = new maplibregl.Map({
  container: 'map',
  style: 'https://tiles.openfreemap.org/styles/liberty',
  center: [0, 0],
  zoom: 1,
  hash: true,
});
map.addControl(new CustomControl(), 'top-left');

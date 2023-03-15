import './main.scss';

import Map from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';
import FeatureLayer from '@arcgis/core/layers/FeatureLayer';

const load = async (): Promise<void> => {
  const layer = new FeatureLayer({
    portalItem: {
      id: '5e1e805849ac407a8c34945c781c1d54',
      portal: {
        url: 'https://gis.vernonia-or.gov/portal',
      },
    },
  });

  await layer.load();

  const view = new MapView({
    map: new Map({
      basemap: 'gray-vector',
      layers: [layer],
      ground: 'world-elevation',
    }),
    extent: layer.fullExtent,
    popup: {
      dockEnabled: true,
      dockOptions: {
        position: 'bottom-left',
        breakpoint: false,
      },
    },
    container: 'map',
  });
};

load();

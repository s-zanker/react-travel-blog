import React, { useRef, useEffect } from 'react';

import * as maptilersdk from '@maptiler/sdk';
import '@maptiler/sdk/dist/maptiler-sdk.css'; // MapTiler SDK CSS importieren

import './Map.css';

const MAPTILER_API_KEY = import.meta.env.VITE_MAPTILER_API_KEY;

export function Map() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const tokyo = { lng: 139.753, lat: 35.6844 };
  const zoom = 14;
  //Do i use the API right?

  useEffect(() => {
    maptilersdk.config.apiKey = MAPTILER_API_KEY;
    if (map.current) return; // stops map from intializing more than once

    map.current = new maptilersdk.Map({
      container: mapContainer.current, //DOM element in which the map will be rendered
      style: maptilersdk.MapStyle.STREETS, //defines the styles
      center: [tokyo.lng, tokyo.lat], //center + zoom -> sets the starting position of the map
      zoom: zoom,
    });
  }, [tokyo.lng, tokyo.lat, zoom]);

  return (
    <div className='map-wrap'>
      <div ref={mapContainer} className='map' />
    </div>
  );
}

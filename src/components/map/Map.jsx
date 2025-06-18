import { useRef, useEffect, useState } from 'react';

import * as maptilersdk from '@maptiler/sdk';
import '@maptiler/sdk/dist/maptiler-sdk.css'; // MapTiler SDK CSS importieren

import './Map.css';
import { Marker } from './Marker';

const MAPTILER_API_KEY = import.meta.env.VITE_MAPTILER_API_KEY;
const DEFAULT_ZOOM = 4;

export function Map({
  posts,
  zoomLevel = DEFAULT_ZOOM,
  showDetailLink,
  isContactMap = false,
}) {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [accentColor, setAccentColor] = useState('');

  //create the map
  useEffect(() => {
    if (!mapContainer.current || map.current) return; // stops map from intializing more than once and renders only if map exists

    maptilersdk.config.apiKey = MAPTILER_API_KEY;

    const defaultCenter = [9.90701762676456, 53.544732673943905]; // Hamburg 53.544732673943905, 9.90701762676456

    map.current = new maptilersdk.Map({
      container: mapContainer.current, //DOM element in which the map will be rendered
      style: maptilersdk.MapStyle.BRIGHT.LIGHT, //BASIC.LIGHT -> defines the styles
      center: defaultCenter, //center + zoom -> sets the starting position of the map
      zoom: zoomLevel,
    });

    // Set accent color
    const rootStyles = getComputedStyle(document.documentElement);
    const color = rootStyles.getPropertyValue('--color-accent').trim();
    setAccentColor(color);

    // Cleanup beim Unmount
    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, []);

  //Centering the map to the last post
  useEffect(() => {
    if (!map.current || posts.length === 0) return;

    const { lat, lng } = posts[posts.length - 1].location || {}; //prevents the app to stop, when lat & lng are undefined

    if (lat && lng) {
      map.current.flyTo({
        center: [lng, lat],
        zoom: zoomLevel,
        /*  duration: 0, */
      });
    }
  }, [posts]);

  return (
    <div className='map-wrap'>
      <div ref={mapContainer} className='map' />
      {map.current &&
        accentColor &&
        posts.length > 0 &&
        posts.map((post) => (
          <Marker
            key={post._id}
            mapInstance={map.current}
            post={post}
            accentColor={accentColor}
            showDetailLink={showDetailLink}
            isContactMap={isContactMap}
          />
        ))}
    </div>
  );
}

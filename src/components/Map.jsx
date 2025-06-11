import React, { useRef, useEffect } from 'react';

import * as maptilersdk from '@maptiler/sdk';
import '@maptiler/sdk/dist/maptiler-sdk.css'; // MapTiler SDK CSS importieren

import './Map.css';

const MAPTILER_API_KEY = import.meta.env.VITE_MAPTILER_API_KEY;

export function Map({ posts }) {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const zoom = 4;

  useEffect(() => {
    maptilersdk.config.apiKey = MAPTILER_API_KEY;
    if (map.current) return; // stops map from intializing more than once

    const defaultCenter = [13.4, 52.52]; // z.B. Berlin

    map.current = new maptilersdk.Map({
      container: mapContainer.current, //DOM element in which the map will be rendered
      style: maptilersdk.MapStyle.BRIGHT.LIGHT, //BASIC.LIGHT -> defines the styles
      center: defaultCenter, //center + zoom -> sets the starting position of the map
      zoom: zoom,
    });
  }, []);

  //Add marker when posts are loaded
  useEffect(() => {
    if (!map.current || !posts || posts.length === 0) return;

    const rootStyles = getComputedStyle(document.documentElement);
    const accentColor = rootStyles.getPropertyValue('--color-accent').trim();

    posts.forEach((post, index) => {
      const lat = post.coordinates.lat;
      const lng = post.coordinates.lng;

      if (lat == null || lng == null) return;

      const popupHtml = `
  <div class="map-popup">
    <h3>${post.title}</h3>
    <p class="map-popup__date">Visited on: ${post.visitingDate}</p>
    <div class="map-popup__author">
      <img src="${post.authorInfo.img}" alt="${post.authorInfo.name}" />
      <span>${post.authorInfo.name}</span>
    </div>
    <a class="map-popup__link" href="/post/${post._id}">View Details →</a>
  </div>
`;

      // Centering map on the first post
      // ❗ Karte auf den letzten Post zentrieren
      if (index === posts.length - 1) {
        map.current.flyTo({ center: [lng, lat], zoom: 4 });
      }

      /*  const popup = new maptilersdk.Popup({ offset: 25 }).setText(
        `${post.title} (${post.city}, ${post.country})`
      ); */

      const popup = new maptilersdk.Popup({ offset: 25 }).setHTML(popupHtml);

      new maptilersdk.Marker({ color: accentColor })
        .setLngLat([lng, lat])
        .setPopup(popup)
        .addTo(map.current);
    });
  }, [posts]);

  return (
    <div className='map-wrap'>
      <div ref={mapContainer} className='map' />
    </div>
  );
}

import { useEffect } from 'react';
import { renderToString } from 'react-dom/server';
import * as maptilersdk from '@maptiler/sdk';

import { Popup } from './Popup';

export function Marker({ mapInstance, post, accentColor }) {
  useEffect(() => {
    if (!mapInstance || !post || !post.location) {
      return;
    }

    const { lat, lng } = post.location;

    if (lat == null || lng == null) {
      console.warn(
        `Marker for post "${post.title}" skipped due to missing coordinates.`
      );
      return;
    }
    // NOTE: renderToString is safe here to create HTML for MapTiler popups
    const popupHtml = renderToString(<Popup post={post} />);
    const popup = new maptilersdk.Popup({ offset: 25 }).setHTML(popupHtml);

    const marker = new maptilersdk.Marker({ color: accentColor })
      .setLngLat([lng, lat])
      .setPopup(popup)
      .addTo(mapInstance);

    // Cleanup: remove marker when component unmounts or props change
    return () => {
      marker.remove();
    };
  }, [mapInstance, post, accentColor]); // Re-run if these change

  return null; // This component does not render any DOM elements itself
}

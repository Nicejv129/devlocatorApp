// src/components/MapWeb.tsx
import React from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker
} from 'react-simple-maps';
import { fetchGitHubUser } from '../api'; // Only this function exists, remove fetchNearbyUsers

// Add types if not already globally declared
type GeographyType = {
  rsmKey: string;
  [key: string]: any;
};

const geoUrl =
  'https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json';

const MapWeb: React.FC = () => {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <ComposableMap projectionConfig={{ scale: 200 }}>
        <Geographies geography={geoUrl}>
          {({ geographies }: { geographies: GeographyType[] }) =>
            geographies.map((geo) => (
              <Geography key={geo.rsmKey} geography={geo} />
            ))
          }
        </Geographies>
        <Marker coordinates={[-122.4194, 37.7749]}>
          <circle r={5} fill="#F00" />
        </Marker>
      </ComposableMap>
    </div>
  );
};

export default MapWeb;

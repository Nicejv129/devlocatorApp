// src/components/Map.tsx
import { Platform } from 'react-native';
import type { FC } from 'react';
import type { MapComponentProps } from '../types';

let MapComponent: FC<MapComponentProps>;

if (Platform.OS === 'web') {
  MapComponent = require('./MapWeb').default;
} else {
  MapComponent = require('./MapNative').default;
}

export default MapComponent;

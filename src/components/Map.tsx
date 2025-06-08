// src/components/Map.tsx
import { Platform } from 'react-native';
import type { FC } from 'react';

const mapFactory = Platform.select<() => FC>({
  ios: () => require('./MapNative').default,
  android: () => require('./MapNative').default,
  web: () => require('./MapWeb').default,
});

const Map = mapFactory ? mapFactory() : () => null;

export default Map;

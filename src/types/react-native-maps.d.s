declare module 'react-native-maps' {
  import * as React from 'react';
  import { ViewProps, StyleProp, ViewStyle } from 'react-native';

  export interface MarkerProps {
    coordinate: {
      latitude: number;
      longitude: number;
    };
    title?: string;
    description?: string;
    image?: any;
  }

  export class Marker extends React.Component<MarkerProps> {}

  export interface MapViewProps extends ViewProps {
    style?: StyleProp<ViewStyle>;
    initialRegion?: {
      latitude: number;
      longitude: number;
      latitudeDelta: number;
      longitudeDelta: number;
    };
    region?: {
      latitude: number;
      longitude: number;
      latitudeDelta: number;
      longitudeDelta: number;
    };
    showsUserLocation?: boolean;
    followsUserLocation?: boolean;
    showsMyLocationButton?: boolean;
    zoomEnabled?: boolean;
  }

  export default class MapView extends React.Component<MapViewProps> {}
}

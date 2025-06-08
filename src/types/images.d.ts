import { ViewProps } from 'react-native';

declare module '*.png' {
  const value: string;
  export default value;
}

export interface UserMarkerProps {
  key: string;
  username: string;
  avatarUrl: string;
  latitude: number;
  longitude: number;
  onPress?: () => void;
}

export interface MapComponentProps extends ViewProps {
  latitude: number;
  longitude: number;
  zoom?: number;
}

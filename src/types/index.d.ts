export interface MapComponentProps {
  latitude: number;
  longitude: number;
  zoom?: number;
}

export interface UserMarkerProps {
  key: string;
  username: string;
  avatarUrl: string;
  latitude: number;
  longitude: number;
  onPress?: () => void;
}

declare module '*.png' {
  const value: string;
  export default value;
}

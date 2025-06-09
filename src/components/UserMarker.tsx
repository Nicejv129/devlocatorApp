import React from 'react';
import { Marker } from 'react-native-maps';
import { Image } from 'react-native';
import { UserMarkerProps } from '../types/index';

const UserMarker = ({ latitude, longitude, avatarUrl, onPress }: UserMarkerProps) => (
  <Marker coordinate={{ latitude, longitude }} onPress={onPress}>
    <Image source={{ uri: avatarUrl }} style={{ width: 30, height: 30, borderRadius: 15 }} />
  </Marker>
);

export default UserMarker;

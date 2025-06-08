// src/components/MapNative.tsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const MapNative = () => (
  <View style={styles.container}>
    <MapView style={StyleSheet.absoluteFillObject}>
      <Marker
        coordinate={{ latitude: 37.7749, longitude: -122.4194 }}
        title="Native Marker"
      />
    </MapView>
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1 },
});

export default MapNative;

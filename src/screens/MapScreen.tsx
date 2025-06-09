import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Map from '../components/Map';
import { getFromStorage } from '../services/storage';

const MapScreen = () => {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    getFromStorage('user').then(setUser);
  }, []);

  return (
    <View style={styles.container}>
      {user && <Map latitude={user.latitude} longitude={user.longitude} />}
    </View>
  );
};

const styles = StyleSheet.create({ container: { flex: 1 } });
export default MapScreen;

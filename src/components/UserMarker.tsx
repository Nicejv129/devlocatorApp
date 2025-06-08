import React from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';
import { Marker, Callout } from 'react-native-maps';

type UserMarkerProps = {
  username: string;
  avatarUrl: string;
  latitude: number;
  longitude: number;
  onPress: () => void; // ✅ Add this line
};

const UserMarker: React.FC<UserMarkerProps> = ({ username, avatarUrl, latitude, longitude, onPress }) => {
  return (
    <Marker coordinate={{ latitude, longitude }}>
      <Image source={{ uri: avatarUrl }} style={styles.avatar} />
      <Callout onPress={onPress}>
        <View style={styles.callout}>
          <Text style={styles.username}>{username}</Text>
          <Text>Tap to view profile</Text>
        </View>
      </Callout>
    </Marker>
  );
};

const styles = StyleSheet.create({
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderColor: '#fff',
    borderWidth: 2,
  },
  callout: {
    width: 140,
    padding: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  username: {
    fontWeight: 'bold',
    marginBottom: 4,
  },
});

export default UserMarker;

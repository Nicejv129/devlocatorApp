import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import { fetchGitHubUser } from '../services/api';
import { saveToStorage } from '../services/storage';
import * as Location from 'expo-location';

const WelcomeScreen = ({ navigation }: any) => {
  const [username, setUsername] = useState('');

  const handleRegister = async () => {
    try {
      const user = await fetchGitHubUser(username);
      const location = await Location.getCurrentPositionAsync({});
      const userData = {
        ...user,
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      };
      await saveToStorage('user', userData);
      navigation.navigate('Map');
    } catch {
      Alert.alert('Invalid username or location error');
    }
  };

  return (
    <View>
      <TextInput placeholder="GitHub Username" value={username} onChangeText={setUsername} />
      <Button title="Register" onPress={handleRegister} />
    </View>
  );
};

export default WelcomeScreen;

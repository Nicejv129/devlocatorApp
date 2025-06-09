import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './src/screens/WelcomeScreen';
import MapScreen from './src/screens/MapScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import { getFromStorage } from './src/services/storage';

const Stack = createStackNavigator();

export default function App() {
  const [initialRoute, setInitialRoute] = useState<'Welcome' | 'Map'>('Welcome');

  useEffect(() => {
    getFromStorage('user').then((user: any) => {
      if (user) setInitialRoute('Map');
    });
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={initialRoute}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Map" component={MapScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

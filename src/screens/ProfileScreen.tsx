import React from 'react';
import { WebView } from 'react-native-webview';
import { getFromStorage } from '../services/storage';
import { useEffect, useState } from 'react';

const ProfileScreen = () => {
  const [uri, setUri] = useState('');

  useEffect(() => {
    getFromStorage('user').then(user => setUri(user.html_url));
  }, []);

  return uri ? <WebView source={{ uri }} /> : null;
};

export default ProfileScreen;

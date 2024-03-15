import React from 'react';
import 'react-native-gesture-handler';
import Navigation from './navigation/Navigation';
import { firebase } from './firebase_config';


const App = () => {
  return (
    <Navigation />
  );
}

export default App;

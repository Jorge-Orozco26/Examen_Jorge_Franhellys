/**
 * @format
 */

import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import homescreen from './src/screens/HomeScreen';
import principalscreen from './src/screens/principalscreen';

AppRegistry.registerComponent(appName, () => principalscreen); 

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';


const ScreensStack = createStackNavigator();

const MyHomeStack = () => {
  return (
    <ScreensStack.Navigator
      screenOptions={{
        headerShown: true,
      }}>
      <ScreensStack.Screen
        name="HomeScreen"
        component={HomeScreen}
      />
    </ScreensStack.Navigator>
  );
};


const MainScreen = () => {
  return (
    <ScreensStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <ScreensStack.Screen name="HomeScreens" component={MyHomeStack} />
 
    </ScreensStack.Navigator>
  );
};
export default MainScreen;
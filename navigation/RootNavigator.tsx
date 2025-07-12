import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from './TabNavigator';
import AuthStack from '../screens/Auth/AuthStack';
import KYCStack from '../screens/Auth/KYCStack';
import QRScannerScreen from '../screens/Transfer/QRScannerScreen';

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Auth" component={AuthStack} />
      <Stack.Screen name="KYC" component={KYCStack} />
      <Stack.Screen name="Main" component={TabNavigator} />
      <Stack.Screen name="QRScanner" component={QRScannerScreen} />
    </Stack.Navigator>
  );
}

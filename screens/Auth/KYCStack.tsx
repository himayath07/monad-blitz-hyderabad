import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import KYCStartScreen from './KYCStartScreen';
import KYCFormScreen from './KYCFormScreen';
import KYCPhotoScreen from './KYCPhotoScreen';
import KYCCompleteScreen from './KYCCompleteScreen';

const Stack = createNativeStackNavigator();

export default function KYCStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="KYCStart" component={KYCStartScreen} />
      <Stack.Screen name="KYCForm" component={KYCFormScreen} />
      <Stack.Screen name="KYCPhoto" component={KYCPhotoScreen} />
      <Stack.Screen name="KYCComplete" component={KYCCompleteScreen} />
    </Stack.Navigator>
  );
}

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DashboardScreen from '../screens/Dashboard/DashboardScreen';
import WalletOverviewScreen from '../screens/Wallet/WalletOverviewScreen';
import SendScreen from '../screens/Transfer/SendScreen';
import ReceiveScreen from '../screens/Transfer/ReceiveScreen';
import HistoryScreen from '../screens/History/HistoryScreen';
import SettingsScreen from '../screens/Settings/SettingsScreen';
import { MaterialIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          let iconName = 'home';
          switch (route.name) {
            case 'Dashboard': iconName = 'dashboard'; break;
            case 'Wallet': iconName = 'account-balance-wallet'; break;
            case 'Send': iconName = 'send'; break;
            case 'Receive': iconName = 'qr-code'; break;
            case 'History': iconName = 'history'; break;
            case 'Settings': iconName = 'settings'; break;
          }
          return <MaterialIcons name={iconName as any} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Dashboard" component={DashboardScreen} />
      <Tab.Screen name="Wallet" component={WalletOverviewScreen} />
      <Tab.Screen name="Send" component={SendScreen} />
      <Tab.Screen name="Receive" component={ReceiveScreen} />
      <Tab.Screen name="History" component={HistoryScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

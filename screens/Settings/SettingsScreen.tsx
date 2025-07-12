import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import PrimaryButton from '../../components/PrimaryButton';

export default function SettingsScreen() {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#F9FAFB' }} contentContainerStyle={{ padding: 16 }}>
      <Text style={{ fontSize: 22, fontWeight: 'bold', marginBottom: 12 }}>Settings</Text>
      <PrimaryButton title="Profile" onPress={() => {}} />
      <PrimaryButton title="Change PIN" onPress={() => {}} />
      <PrimaryButton title="Enable Biometrics" onPress={() => {}} />
      <PrimaryButton title="Notification Preferences" onPress={() => {}} />
      <PrimaryButton title="Legal & Support" onPress={() => {}} />
      <PrimaryButton title="Logout" onPress={() => {}} />
    </ScrollView>
  );
}

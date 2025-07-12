import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PrimaryButton from '../../components/PrimaryButton';

export default function KYCCompleteScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>KYC Complete</Text>
      <Text style={styles.desc}>Thank you for verifying your identity. Your account is now more secure.</Text>
      <PrimaryButton title="Continue" onPress={() => navigation.replace('Main')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#F9FAFB',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#27AE60',
    marginBottom: 12,
  },
  desc: {
    fontSize: 16,
    color: '#6B7280',
    textAlign: 'center',
    marginBottom: 32,
  },
});

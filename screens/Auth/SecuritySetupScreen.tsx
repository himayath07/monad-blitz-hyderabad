import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Switch } from 'react-native';
import PrimaryButton from '../../components/PrimaryButton';

export default function SecuritySetupScreen({ navigation }: any) {
  const [pin, setPin] = useState('');
  const [confirmPin, setConfirmPin] = useState('');
  const [biometric, setBiometric] = useState(false);

  // TODO: Add PIN validation and biometric setup

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Set Security</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter PIN"
        value={pin}
        onChangeText={setPin}
        secureTextEntry
        keyboardType="numeric"
        maxLength={6}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm PIN"
        value={confirmPin}
        onChangeText={setConfirmPin}
        secureTextEntry
        keyboardType="numeric"
        maxLength={6}
      />
      <View style={styles.switchRow}>
        <Text style={{ fontSize: 16 }}>Enable Biometrics</Text>
        <Switch value={biometric} onValueChange={setBiometric} />
      </View>
      <PrimaryButton title="Continue" onPress={() => navigation.replace('Main')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#F9FAFB',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 18,
    color: '#2D9CDB',
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 10,
    padding: 14,
    fontSize: 16,
    marginBottom: 12,
    backgroundColor: '#fff',
    textAlign: 'center',
    letterSpacing: 6,
  },
  switchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 16,
  },
});

import React from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

type Props = {
  value: string;
  onChange: (val: string) => void;
  onScanQR: () => void;
  placeholder?: string;
  isValid?: boolean;
};

export default function AddressInput({ value, onChange, onScanQR, placeholder, isValid }: Props) {
  return (
    <View style={[styles.container, { borderColor: isValid === undefined ? '#E5E7EB' : isValid ? '#27AE60' : '#EB5757' }] }>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChange}
        placeholder={placeholder || 'Enter or paste address'}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <TouchableOpacity onPress={onScanQR}>
        <MaterialIcons name="qr-code-scanner" size={28} color="#2D9CDB" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1.5,
    borderRadius: 10,
    paddingHorizontal: 12,
    marginVertical: 8,
    backgroundColor: '#fff',
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 12,
    color: '#181A20',
  },
});

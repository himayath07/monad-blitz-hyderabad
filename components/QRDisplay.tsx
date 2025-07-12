import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

type Props = {
  value: string;
  label?: string;
  size?: number;
};

export default function QRDisplay({ value, label, size = 180 }: Props) {
  return (
    <View style={styles.container}>
      <QRCode value={value} size={size} />
      {label && <Text style={styles.label}>{label}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 16,
  },
  label: {
    marginTop: 12,
    fontSize: 16,
    color: '#181A20',
    fontWeight: '500',
  },
});

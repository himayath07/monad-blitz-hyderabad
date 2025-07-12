import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import QRDisplay from '../../components/QRDisplay';
import PrimaryButton from '../../components/PrimaryButton';

export default function ReceiveScreen() {
  // TODO: Get wallet address and selected token
  const address = '0x123...abcd';
  const token = 'ETH';
  const qrValue = `${address}?token=${token}`;

  return (
    <View style={{ flex: 1, backgroundColor: '#F9FAFB', padding: 16, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 22, fontWeight: 'bold', marginBottom: 12 }}>Receive Crypto</Text>
      <QRDisplay value={qrValue} label={address} />
      <PrimaryButton title="Copy" onPress={() => {}} />
      <PrimaryButton title="Share" onPress={() => {}} />
      {/* TODO: Token selector, request amount */}
    </View>
  );
}

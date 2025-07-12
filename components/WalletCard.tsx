import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

type Props = {
  token: string;
  balance: string;
  fiatValue: string;
  icon: any;
  onPress?: () => void;
};

export default function WalletCard({ token, balance, fiatValue, icon, onPress }: Props) {
  return (
    <TouchableOpacity onPress={onPress} style={{ flexDirection: 'row', alignItems: 'center', padding: 16, backgroundColor: '#fff', borderRadius: 12, shadowColor: '#000', shadowOpacity: 0.05, shadowRadius: 8, marginBottom: 8 }}>
      <Image source={icon} style={{ width: 32, height: 32, marginRight: 16 }} />
      <View>
        <Text style={{ fontWeight: '600', fontSize: 16 }}>{token}</Text>
        <Text style={{ color: '#6B7280' }}>{balance} ≈ ${fiatValue}</Text>
      </View>
    </TouchableOpacity>
  );
}

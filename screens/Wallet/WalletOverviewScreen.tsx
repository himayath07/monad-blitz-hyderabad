import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import WalletCard from '../../components/WalletCard';
import PrimaryButton from '../../components/PrimaryButton';

export default function WalletOverviewScreen() {
  const wallets = useSelector((state: RootState) => state.wallet.wallets);

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#F9FAFB' }} contentContainerStyle={{ padding: 16 }}>
      <Text style={{ fontSize: 22, fontWeight: 'bold', marginBottom: 12 }}>Wallets</Text>
      {wallets.map(wallet => (
        <WalletCard
          key={wallet.address}
          token={wallet.nickname || wallet.address.slice(0, 6) + '...' + wallet.address.slice(-4)}
          balance={''}
          fiatValue={''}
          icon={require('../../assets/icon.png')}
          onPress={() => {}}
        />
      ))}
      <PrimaryButton title="Add Wallet" onPress={() => {}} />
      <PrimaryButton title="Import Wallet" onPress={() => {}} />
    </ScrollView>
  );
}

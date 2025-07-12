import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import WalletCard from '../../components/WalletCard';
import PrimaryButton from '../../components/PrimaryButton';

export default function DashboardScreen() {
  const wallets = useSelector((state: RootState) => state.wallet.wallets);
  const tokens = useSelector((state: RootState) => state.token.tokens);

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#F9FAFB' }} contentContainerStyle={{ padding: 16 }}>
      <Text style={{ fontSize: 22, fontWeight: 'bold', marginBottom: 12 }}>Total Balance</Text>
      {/* TODO: Calculate total fiat value */}
      <Text style={{ fontSize: 18, color: '#2D9CDB', marginBottom: 20 }}>$12,345.67</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginBottom: 20 }}>
        {tokens.map(token => (
          <WalletCard
            key={token.symbol}
            token={token.symbol}
            balance={token.balance}
            fiatValue={token.fiatValue}
            icon={{ uri: token.icon }}
            onPress={() => {}}
          />
        ))}
      </ScrollView>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 }}>
        <PrimaryButton title="Send" onPress={() => {}} style={{ flex: 1, marginRight: 6 }} />
        <PrimaryButton title="Receive" onPress={() => {}} style={{ flex: 1, marginHorizontal: 6 }} />
        <PrimaryButton title="History" onPress={() => {}} style={{ flex: 1, marginLeft: 6 }} />
      </View>
      <Text style={{ fontSize: 18, fontWeight: '600', marginBottom: 8 }}>Recent Activity</Text>
      {/* TODO: Map over recent transactions */}
      <View style={{ backgroundColor: '#fff', borderRadius: 10, padding: 16, marginBottom: 8 }}>
        <Text style={{ color: '#6B7280' }}>No recent transactions yet.</Text>
      </View>
    </ScrollView>
  );
}

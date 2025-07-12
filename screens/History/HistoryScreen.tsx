import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import PrimaryButton from '../../components/PrimaryButton';
import TransactionCard from '../../components/TransactionCard';

const mockTransactions = [
  {
    type: 'sent',
    status: 'success',
    amount: '0.5',
    fiat: '1500',
    token: 'ETH',
    counterparty: '0xAbc...1234',
    date: '2025-07-10 14:23',
    hash: '0xhash1',
  },
  {
    type: 'received',
    status: 'pending',
    amount: '250',
    fiat: '250',
    token: 'USDT',
    counterparty: '0xDef...5678',
    date: '2025-07-09 09:10',
    hash: '0xhash2',
  },
  {
    type: 'sent',
    status: 'failed',
    amount: '1.2',
    fiat: '3600',
    token: 'ETH',
    counterparty: '0xGhi...4321',
    date: '2025-07-08 18:45',
    hash: '0xhash3',
  },
];

export default function HistoryScreen() {
  const transactions = mockTransactions;

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#F9FAFB' }} contentContainerStyle={{ padding: 16 }}>
      <Text style={{ fontSize: 22, fontWeight: 'bold', marginBottom: 12 }}>Transaction History</Text>
      <View style={{ flexDirection: 'row', marginBottom: 12 }}>
        <PrimaryButton title="All" onPress={() => {}} style={{ flex: 1, marginRight: 4 }} />
        <PrimaryButton title="Sent" onPress={() => {}} style={{ flex: 1, marginHorizontal: 4 }} />
        <PrimaryButton title="Received" onPress={() => {}} style={{ flex: 1, marginHorizontal: 4 }} />
        <PrimaryButton title="Pending" onPress={() => {}} style={{ flex: 1, marginLeft: 4 }} />
      </View>
      {transactions.length === 0 && (
        <View style={{ backgroundColor: '#fff', borderRadius: 10, padding: 16, marginBottom: 8 }}>
          <Text style={{ color: '#6B7280' }}>No transactions found.</Text>
        </View>
      )}
      {transactions.map((tx, idx) => (
        <TransactionCard key={tx.hash} {...tx} onPress={() => {}} />
      ))}
    </ScrollView>
  );
}

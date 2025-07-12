import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

interface Props {
  type: 'sent' | 'received';
  status: 'pending' | 'success' | 'failed';
  amount: string;
  fiat: string;
  token: string;
  counterparty: string;
  date: string;
  hash: string;
  onPress?: () => void;
}

const statusColors = {
  pending: '#F2994A',
  success: '#27AE60',
  failed: '#EB5757',
};

export default function TransactionCard({ type, status, amount, fiat, token, counterparty, date, hash, onPress }: Props) {
  return (
    <TouchableOpacity style={[styles.card, { borderLeftColor: statusColors[status] }]} onPress={onPress}>
      <View style={styles.iconWrap}>
        <MaterialIcons name={type === 'sent' ? 'arrow-upward' : 'arrow-downward'} size={24} color={statusColors[status]} />
      </View>
      <View style={{ flex: 1 }}>
        <Text style={styles.amount}>{amount} {token} <Text style={styles.fiat}>≈ ${fiat}</Text></Text>
        <Text style={styles.counterparty}>{type === 'sent' ? 'To' : 'From'}: {counterparty}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>
      <MaterialIcons name={status === 'success' ? 'check-circle' : status === 'pending' ? 'hourglass-empty' : 'cancel'} size={24} color={statusColors[status]} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    marginBottom: 10,
    borderLeftWidth: 5,
  },
  iconWrap: {
    marginRight: 14,
  },
  amount: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 2,
  },
  fiat: {
    fontWeight: 'normal',
    color: '#6B7280',
    fontSize: 14,
  },
  counterparty: {
    color: '#181A20',
    fontSize: 14,
    marginBottom: 2,
  },
  date: {
    color: '#6B7280',
    fontSize: 12,
  },
});

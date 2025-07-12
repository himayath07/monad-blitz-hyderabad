import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import AddressInput from '../../components/AddressInput';
import PrimaryButton from '../../components/PrimaryButton';
import TokenSelector from '../../components/TokenSelector';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { useNavigation } from '@react-navigation/native';

export default function SendScreen() {
  const tokens = useSelector((state: RootState) => state.token.tokens);
  const [address, setAddress] = useState('');
  const [isValid, setIsValid] = useState<boolean | undefined>(undefined);
  const [amount, setAmount] = useState('');
  const [selected, setSelected] = useState<string | null>(tokens[0]?.symbol || null);
  const navigation = useNavigation();

  // Handler for QR scan result
  const handleScanQR = () => {
    navigation.navigate('QRScanner', {
      onScan: (data: string) => setAddress(data),
    });
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#F9FAFB' }} contentContainerStyle={{ padding: 16 }}>
      <Text style={{ fontSize: 22, fontWeight: 'bold', marginBottom: 12 }}>Send Crypto</Text>
      <AddressInput
        value={address}
        onChange={setAddress}
        onScanQR={handleScanQR}
        isValid={isValid}
      />
      <TokenSelector tokens={tokens} selected={selected} onSelect={setSelected} />
      <View style={{ marginVertical: 12 }}>
        <Text style={{ fontSize: 16, marginBottom: 6 }}>Amount</Text>
        {/* TODO: Add numeric input and Max button */}
        <PrimaryButton title="Max" onPress={() => {}} style={{ alignSelf: 'flex-end', width: 80, marginTop: 4 }} />
      </View>
      {/* TODO: Show fiat conversion and fee estimate */}
      <PrimaryButton title="Next" onPress={() => {}} />
    </ScrollView>
  );
}

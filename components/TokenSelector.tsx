import React from 'react';
import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native';
import { TokenInfo } from '../store/slices/tokenSlice';

type Props = {
  tokens: TokenInfo[];
  selected: string | null;
  onSelect: (symbol: string) => void;
};

export default function TokenSelector({ tokens, selected, onSelect }: Props) {
  return (
    <FlatList
      horizontal
      data={tokens}
      keyExtractor={(item) => item.symbol}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => onSelect(item.symbol)}
          style={{
            backgroundColor: selected === item.symbol ? '#2D9CDB' : '#fff',
            borderRadius: 8,
            padding: 10,
            marginHorizontal: 4,
            flexDirection: 'row',
            alignItems: 'center',
            borderWidth: 1,
            borderColor: '#E5E7EB',
          }}
        >
          <Image source={{ uri: item.icon }} style={{ width: 24, height: 24, marginRight: 8 }} />
          <Text style={{ color: selected === item.symbol ? '#fff' : '#181A20', fontWeight: '600' }}>{item.symbol}</Text>
        </TouchableOpacity>
      )}
      showsHorizontalScrollIndicator={false}
      style={{ marginVertical: 8 }}
    />
  );
}

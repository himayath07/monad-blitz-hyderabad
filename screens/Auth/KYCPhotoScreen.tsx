import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PrimaryButton from '../../components/PrimaryButton';

export default function KYCPhotoScreen({ navigation }: any) {
  // TODO: Integrate camera for photo upload
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Upload Document Photo</Text>
      <Text style={styles.desc}>Take a clear photo of your ID document. (Camera integration coming soon.)</Text>
      <PrimaryButton title="Upload Photo" onPress={() => navigation.navigate('KYCComplete')} />
      <PrimaryButton title="Back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#F9FAFB',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2D9CDB',
    marginBottom: 12,
  },
  desc: {
    fontSize: 16,
    color: '#6B7280',
    textAlign: 'center',
    marginBottom: 32,
  },
});

import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import PrimaryButton from '../../components/PrimaryButton';

export default function WelcomeScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/icon.png')} style={styles.logo} />
      <Text style={styles.tagline}>Send crypto instantly, securely, anywhere</Text>
      <View style={{ width: '100%', position: 'absolute', bottom: 40 }}>
        <PrimaryButton title="Get Started" onPress={() => navigation.navigate('SignUp')} />
        <PrimaryButton title="Import Wallet" onPress={() => navigation.navigate('Login')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F9FAFB',
    padding: 24,
  },
  logo: {
    width: 96,
    height: 96,
    marginBottom: 24,
  },
  tagline: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2D9CDB',
    textAlign: 'center',
    marginBottom: 48,
  },
});

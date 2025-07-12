import * as Keychain from 'react-native-keychain';
import * as LocalAuthentication from 'expo-local-authentication';

export const setPin = async (pin: string) => {
  await Keychain.setGenericPassword('user', pin, { service: 'user-pin' });
};

export const getPin = async () => {
  const creds = await Keychain.getGenericPassword({ service: 'user-pin' });
  return creds ? creds.password : null;
};

export const clearPin = async () => {
  await Keychain.resetGenericPassword({ service: 'user-pin' });
};

export const authenticateBiometric = async () => {
  const compatible = await LocalAuthentication.hasHardwareAsync();
  if (!compatible) return false;
  const enrolled = await LocalAuthentication.isEnrolledAsync();
  if (!enrolled) return false;
  const result = await LocalAuthentication.authenticateAsync();
  return result.success;
};

import { ethers } from 'ethers';
import * as Keychain from 'react-native-keychain';
import * as SecureStore from 'expo-secure-store';

export const createWallet = async () => {
  const wallet = ethers.Wallet.createRandom();
  await Keychain.setGenericPassword('wallet', wallet.privateKey, {
    service: 'crypto-wallet',
  });
  return wallet;
};

export const importWallet = async (privateKey: string) => {
  const wallet = new ethers.Wallet(privateKey);
  await Keychain.setGenericPassword('wallet', wallet.privateKey, {
    service: 'crypto-wallet',
  });
  return wallet;
};

export const getStoredWallet = async () => {
  const creds = await Keychain.getGenericPassword({ service: 'crypto-wallet' });
  if (creds) {
    return new ethers.Wallet(creds.password);
  }
  return null;
};

export const clearWallet = async () => {
  await Keychain.resetGenericPassword({ service: 'crypto-wallet' });
};

export const saveWalletMeta = async (address: string, meta: object) => {
  await SecureStore.setItemAsync(`wallet-meta-${address}`, JSON.stringify(meta));
};

export const getWalletMeta = async (address: string) => {
  const meta = await SecureStore.getItemAsync(`wallet-meta-${address}`);
  return meta ? JSON.parse(meta) : null;
};

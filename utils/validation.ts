import { ethers } from 'ethers';

export const isValidAddress = (address: string) => {
  try {
    return ethers.utils.isAddress(address);
  } catch {
    return false;
  }
};

export const isValidAmount = (amount: string) => {
  const num = Number(amount);
  return !isNaN(num) && num > 0;
};

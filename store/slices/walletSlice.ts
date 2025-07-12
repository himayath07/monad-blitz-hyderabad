import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Wallet } from 'ethers';

export interface WalletInfo {
  address: string;
  nickname?: string;
  lastUsed: number;
}

interface WalletState {
  wallets: WalletInfo[];
  selectedWallet: string | null;
}

const initialState: WalletState = {
  wallets: [],
  selectedWallet: null,
};

const walletSlice = createSlice({
  name: 'wallet',
  initialState,
  reducers: {
    addWallet(state, action: PayloadAction<WalletInfo>) {
      state.wallets.push(action.payload);
    },
    selectWallet(state, action: PayloadAction<string>) {
      state.selectedWallet = action.payload;
    },
    removeWallet(state, action: PayloadAction<string>) {
      state.wallets = state.wallets.filter(w => w.address !== action.payload);
      if (state.selectedWallet === action.payload) {
        state.selectedWallet = state.wallets.length ? state.wallets[0].address : null;
      }
    },
    updateWallet(state, action: PayloadAction<WalletInfo>) {
      const idx = state.wallets.findIndex(w => w.address === action.payload.address);
      if (idx !== -1) state.wallets[idx] = action.payload;
    },
  },
});

export const { addWallet, selectWallet, removeWallet, updateWallet } = walletSlice.actions;
export default walletSlice.reducer;

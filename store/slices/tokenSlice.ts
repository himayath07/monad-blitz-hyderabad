import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface TokenInfo {
  symbol: string;
  name: string;
  icon: string;
  balance: string;
  fiatValue: string;
}

interface TokenState {
  tokens: TokenInfo[];
  selectedToken: string | null;
}

const initialState: TokenState = {
  tokens: [],
  selectedToken: null,
};

const tokenSlice = createSlice({
  name: 'token',
  initialState,
  reducers: {
    setTokens(state, action: PayloadAction<TokenInfo[]>) {
      state.tokens = action.payload;
    },
    selectToken(state, action: PayloadAction<string>) {
      state.selectedToken = action.payload;
    },
    updateTokenBalance(state, action: PayloadAction<{ symbol: string; balance: string; fiatValue: string }>) {
      const idx = state.tokens.findIndex(t => t.symbol === action.payload.symbol);
      if (idx !== -1) {
        state.tokens[idx].balance = action.payload.balance;
        state.tokens[idx].fiatValue = action.payload.fiatValue;
      }
    },
  },
});

export const { setTokens, selectToken, updateTokenBalance } = tokenSlice.actions;
export default tokenSlice.reducer;

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  isAuthenticated: boolean;
  user: null | { email: string; name?: string };
  pinSet: boolean;
  biometricEnabled: boolean;
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  pinSet: false,
  biometricEnabled: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action: PayloadAction<{ email: string; name?: string }>) {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.user = null;
    },
    setPin(state, action: PayloadAction<boolean>) {
      state.pinSet = action.payload;
    },
    setBiometric(state, action: PayloadAction<boolean>) {
      state.biometricEnabled = action.payload;
    },
  },
});

export const { login, logout, setPin, setBiometric } = authSlice.actions;
export default authSlice.reducer;

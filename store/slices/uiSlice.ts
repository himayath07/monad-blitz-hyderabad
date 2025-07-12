import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UIState {
  isLoading: boolean;
  notification: null | { type: 'success' | 'error' | 'info'; message: string };
  theme: 'light' | 'dark';
}

const initialState: UIState = {
  isLoading: false,
  notification: null,
  theme: 'light',
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
    setNotification(state, action: PayloadAction<UIState['notification']>) {
      state.notification = action.payload;
    },
    setTheme(state, action: PayloadAction<'light' | 'dark'>) {
      state.theme = action.payload;
    },
  },
});

export const { setLoading, setNotification, setTheme } = uiSlice.actions;
export default uiSlice.reducer;

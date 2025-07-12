import React, { createContext, useContext, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { colors } from './colors';
import { typography } from './typography';

const ThemeContext = createContext({ colors, typography, theme: 'light' as 'light' | 'dark' });

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const theme = useSelector((state: RootState) => state.ui.theme);
  const value = useMemo(() => ({ colors, typography, theme }), [theme]);
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => useContext(ThemeContext);

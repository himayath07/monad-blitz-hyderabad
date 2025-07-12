import React, { useEffect } from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native';

interface Props {
  visible: boolean;
  message: string;
  type?: 'success' | 'error' | 'info';
  onHide: () => void;
}

const colors = {
  success: '#27AE60',
  error: '#EB5757',
  info: '#2D9CDB',
};

export default function Snackbar({ visible, message, type = 'info', onHide }: Props) {
  const slideAnim = React.useRef(new Animated.Value(-100)).current;

  useEffect(() => {
    if (visible) {
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 250,
        useNativeDriver: true,
      }).start();
      setTimeout(() => {
        Animated.timing(slideAnim, {
          toValue: -100,
          duration: 250,
          useNativeDriver: true,
        }).start(onHide);
      }, 2200);
    }
  }, [visible]);

  if (!visible) return null;
  return (
    <Animated.View style={[styles.snackbar, { backgroundColor: colors[type], transform: [{ translateY: slideAnim }] }] }>
      <Text style={styles.text}>{message}</Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  snackbar: {
    position: 'absolute',
    top: 40,
    left: 16,
    right: 16,
    borderRadius: 8,
    padding: 16,
    zIndex: 1000,
    elevation: 10,
  },
  text: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
    textAlign: 'center',
  },
});

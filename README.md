# Crypto Transfer App (MVP)

A modern, secure, and intuitive crypto transfer wallet built with Expo (React Native + TypeScript).

## Features
- Secure wallet creation/import (ethers.js, react-native-keychain)
- Multi-wallet, multi-token support
- Send/receive crypto with QR code
- Real-time fiat conversion (CoinGecko)
- Transaction history with filtering
- Push notifications (Expo)
- Biometric/PIN security
- Modular, scalable architecture

## Tech Stack
- React Native (Expo SDK 50+)
- Redux Toolkit (state management)
- ethers.js (crypto logic)
- Tailwind (Nativewind) for styling
- TypeScript
- Expo modules: SecureStore, Notifications, Barcode Scanner

## Setup
1. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   ```
2. Start the app:
   ```bash
   npm start
   # or
   yarn start
   ```
3. For iOS/Android, use Expo Go or run on a simulator/device.

## Folder Structure
```
crypto-transfer-app/
├── assets/
├── components/
├── screens/
├── navigation/
├── store/
├── services/
├── utils/
├── theme/
├── App.tsx
├── app.json
├── package.json
└── README.md
```

---

## License
MIT

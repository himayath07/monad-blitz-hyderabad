import axios from 'axios';

export const getTokenPrice = async (symbol: string) => {
  const res = await axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=${symbol}&vs_currencies=usd`);
  return res.data[symbol]?.usd || 0;
};

export const getMultiTokenPrices = async (symbols: string[]) => {
  const ids = symbols.join(',');
  const res = await axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=${ids}&vs_currencies=usd`);
  return res.data;
};

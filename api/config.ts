import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://pro-api.coinmarketcap.com/v1/',
  headers: {
    'X-CMC_PRO_API_KEY': `2398c6aa-a3fb-47bd-97f8-130d8b8777c8`,
    'Access-Control-Allow-Origin': '*',
  },
});

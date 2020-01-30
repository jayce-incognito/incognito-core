import Axios from 'axios';
import { getEnvs } from './index';

export const KEYS = {
  TOKEN: '$TOKEN',
  MY_REFERRAL_CODE: '$MY_REFERRAL_CODE',
  REFERRAL_CODE: '$REFERRAL_CODE',
  TOKEN_EMAIL_VERIFY_QS: 'token',
  REFERRAL_QUERY: 'referral',
  UNBOXING_QUERY: 'unboxing',
  INTRO_QUERY: 'intro',
  PRODUCT_PRICE: '$PRODUCT_PRICE',
  PAYMENT_INFORMATION: '$PAYMENT_INFORMATION',
  CART_INFORMATION: '$CART_INFORMATION',
  COIN_FIAT_RATE: '$COIN_FIAT_RATE'
};

export const Get = (url: string, config: any) => {
  const token = localStorage.getItem(KEYS.TOKEN);
  const defaultConfig = {
    headers: {
      Accept: '*/*',
      'Content-type': 'application/json'
    },
    ...config
  };
  token && (defaultConfig.headers['Authorization'] = `Bearer ${token}`);
  return Axios.get(`${getEnvs().BASE_API_URL}/${url}`, defaultConfig);
};

export const Post = (url: string, data: any, config?: any) => {
  const token = localStorage.getItem(KEYS.TOKEN);
  const defaultConfig = {
    headers: {
      Accept: '*/*',
      'Content-type': 'application/json'
    },
    ...config
  };
  token && (defaultConfig.headers['Authorization'] = `Bearer ${token}`);
  return Axios.post(
    `${getEnvs().BASE_API_URL}/${url}`,
    JSON.stringify(data),
    defaultConfig
  );
};

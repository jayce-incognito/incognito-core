import Axios from 'axios';

export * from './fetch';

export const getEnvs = () => process.env || {};

export const delay = (ms: number | string) =>
  new Promise((resolve, reject) => setTimeout(resolve, ms));

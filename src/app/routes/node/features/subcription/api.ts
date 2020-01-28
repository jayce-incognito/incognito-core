import axios from 'axios';
import { Post } from 'src/core/utils';

export const subscribe = (data: {
  Email: string;
  ReferralCode: string;
  From: string;
}) => Post(`auth/subcribe`, data);

export const auth = (data: { email: string }) => axios.post(`auth/token`, data);

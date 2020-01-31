import Microsite from './microsite';
import Power from './node';
import Use from './use';
import Dex from './dex';

export interface IRoute {
  exact?: boolean;
  component: any;
  path: string;
  private?: boolean;
}

export default [
  {
    exact: true,
    component: Microsite,
    path: '/'
  },
  {
    exact: true,
    component: Power,
    path: '/node'
  },
  {
    exact: true,
    component: Use,
    path: '/send-bitcoin-anonymously-01'
  },
  {
    exact: true,
    component: Dex,
    path: '/dex'
  }
];

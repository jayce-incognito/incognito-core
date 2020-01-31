import * as React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { getEnvs } from 'src/core/utils';

interface IProps {}

const Styled = styled.div`
  &.app-store-group {
    display: flex;
    margin: 20px 0;
    .app {
      height: 65px;
      margin-right: 15px;
      > img {
        width: 100%;
        height: 100%;
      }
      :last-child {
        margin-right: unset;
      }
    }
  }
`;

const AppStoreGroup = (props: IProps) => {
  const handleOnClick = (e: any, url: string) => {
    e.preventDefault();
    window.open(url);
  };
  return (
    <Styled className='app-store-group'>
      <Link
        to='https://play.google.com/store/apps/details?id=com.incognito.wallet'
        target='_blank'
        className='app'
        onClick={(e: any) =>
          handleOnClick(
            e,
            `https://play.google.com/store/apps/details?id=com.incognito.wallet`
          )
        }
      >
        <img src={`${getEnvs().SOURCE_DOMAIN}/images/use/618af63.svg`} alt='' />
      </Link>
      <Link
        to='https://apps.apple.com/us/app/incognito-crypto-wallet/id1475631606?ls=1'
        target='_blank'
        className='app'
        onClick={(e: any) =>
          handleOnClick(
            e,
            `https://apps.apple.com/us/app/incognito-crypto-wallet/id1475631606?ls=1`
          )
        }
      >
        <img src={`${getEnvs().SOURCE_DOMAIN}/images/use/ae66933.svg`} alt='' />
      </Link>
    </Styled>
  );
};

export default React.memo(AppStoreGroup);

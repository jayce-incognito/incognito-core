import * as React from 'react';
import styled from 'styled-components';
import { getEnvs } from 'src/core/utils';
import AppStore from 'src/app/shared/components/appStore';
import { useSelector } from 'react-redux';
import { translateSelector, II18n } from 'src/i18n';

interface IProps {}

const Styled = styled.div`
  &.hook-container {
    background: #232323;
    padding: 0 200px;
    .child-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-top: 50px;
    }
    .image-container {
      flex: 1;
      > img {
        width: 100%;
        height: 100%;
      }
    }
    .content {
      flex: 1;
      text-align: center;
      margin-left: 20px;
    }
    h1.title {
      font-size: 32px;
      line-height: 44px;
      color: #fff;
      font-family: Colfax-Book;
    }
    .desc {
      font-size: 16px;
      line-height: 25px;
      color: #fff;
    }
    .app-store-group {
      justify-content: center;
    }
  }
`;

const Hook = (props: IProps) => {
  const { use }: II18n = useSelector(translateSelector);
  const { title, desc } = use.hookContainer;
  return (
    <Styled className='hook-container'>
      <div className='child-container'>
        <div className='image-container'>
          <img
            src={`${getEnvs().SOURCE_DOMAIN}/images/use/0ab7c03.png`}
            alt=''
          />
        </div>
        <div className='content'>
          <h1 className='title'>{title}</h1>
          <p className='desc'>{desc}</p>
          <AppStore />
        </div>
      </div>
    </Styled>
  );
};

export default React.memo(Hook);

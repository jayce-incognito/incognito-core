import * as React from 'react';
import styled from 'styled-components';
import ErrorBoundary from 'src/core/components/errorBound';
import { getEnvs } from 'src/core/utils';
import { II18n, translateSelector } from 'src/i18n';
import { useSelector } from 'react-redux';
import AppStore from 'src/app/shared/components/appStore';

interface IProps {}

const Styled = styled.div`
  &.intro-container {
    position: relative;
    margin-top: 60px;
    height: calc(100vh - 60px);
    background: #000;
    min-height: 650px;
    .app-store-group{
        margin-top: 50px;
    }
    .info {
      left: 200px;
      max-width: 50%;
      width: 35%;
    }
    .info .title {
      font-size: 38px;
      line-height: 46px;
      color: #fff;
      font-family: Colfax-Book;
      margin: 20px 0;
      .highlight {
        font-family: Colfax-Book;
      }
    }
    .info .desc {
      font-size: 16px;
      color: #fff;
      line-height: 27px;
    }
    .image-container {
      position: absolute;
      bottom: 0;
      right: 0;
      top: 0;
      width: 50%;
      padding-left: 10%;
      overflow: hidden;
      > img {
        margin-top: 100px;
        height: 100%;
        width: auto;
        position: relative;
        z-index: 1;
      }
      ::after {
        content: '';
        display: block;
        height: 100%;
        width: 100%;
        background-color: #0dc7d8;
        position: absolute;
        top: 0;
        margin-left: 100px;
        border-bottom-left-radius: 80px;
      }
    }
  }
`;

const Intro = (props: IProps) => {
  const { use }: II18n = useSelector(translateSelector);
  const { title, desc } = use.introContainer;
  return (
    <ErrorBoundary>
      <Styled className='intro-container'>
        <div className='info abs-center-hor'>
          <h1
            className='title'
            dangerouslySetInnerHTML={{
              __html: title
            }}
          ></h1>
          <p
            className='desc'
            dangerouslySetInnerHTML={{
              __html: desc
            }}
          ></p>
          <AppStore />
        </div>
        <div className='image-container'>
          <img
            src={`${getEnvs().SOURCE_DOMAIN}/images/use/a502bd4.png`}
            alt=''
          />
        </div>
      </Styled>
    </ErrorBoundary>
  );
};

export default React.memo(Intro);

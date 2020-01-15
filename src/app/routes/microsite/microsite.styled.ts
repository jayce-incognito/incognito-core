import { getEnvs } from 'src/core/utils';
import styled from 'styled-components';
import { breakpoints } from 'src/core/utils/styled';

export const Styled = styled.div`
  &.microsite {
    background: transparent;
    height: 100vh;
    position: relative;
    display: flex;
    .intro {
      top: 50px;
      display: flex;
      justify-content: space-between;
      width: 450px;
    }
    .intro .title {
      color: #111;
      font-family: Colfax-Book;
      font-size: 20px;
      line-height: 49px;
      :last-child {
        color: #fff;
      }
    }
    .intro .img-container {
      width: 45px;
      height: 45px;
      > img {
        width: 100%;
        height: 100%;
      }
    }
    .hook {
      overflow-x: hidden;
      height: 100vh;
      min-height: 800px;
      width: 100%;
      max-width: 50%;
      flex: 1 0 auto;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      &.left-container {
        background-image: url(${() => getEnvs().SOURCE_DOMAIN}/images/microsite/b51e3af.jpg);
        .btn-container {
          background: #111;
        }
      }
      &.right-container {
        background-color: #111;
        .title,
        .desc {
          color: #fff;
        }
      }
    }

    .hook .title {
      font-family: Colfax-Bold;
      font-size: 42px;
      line-height: 49px;
      color: #111;
    }
    .hook .desc {
      margin: 10px 0 35px;
      font-size: 20px;
      line-height: 28px;
      color: #4a5656;
    }
    .hook .img-container {
      margin-top: 75px;
      position: relative;
      max-height: 350px;
      width: 100%;
      height: 350px;
      .abs-center {
        width: 100%;
        height: 100%;
      }
    }
    @media screen and (max-width: ${breakpoints.xl}) {
      flex-direction: column;
      .hook {
        max-width: 100%;
        padding-top: 50px;
      }
      .intro .title {
        :last-child {
          color: unset;
        }
      }
    }
    @media screen and (max-width: ${breakpoints.sm}){
      .hook {
        min-height: unset;
      }
    }
  }
`;

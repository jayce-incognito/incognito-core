import styled from 'styled-components';
import { getEnvs } from 'src/core/utils';
import { breakpoints } from 'src/core/utils/styled';

export const Fonts = styled.div`
  @font-face {
    font-family: Colfax-Bold;
    src: url(${() => `${getEnvs().SOURCE_DOMAIN}/fonts/52bc10d.woff`});
  }
  @font-face {
    font-family: Colfax;
    src: url(${() => `${getEnvs().SOURCE_DOMAIN}/fonts/901ec70.woff`});
  }
  @font-face {
    font-family: Colfax-Book;
    src: url(${() => `${getEnvs().SOURCE_DOMAIN}/fonts/b3bc18d.woff`});
  }
`;

export const Styled = styled(Fonts)`
  &.app {
    * {
      font-family: Colfax;
      box-sizing: border-box;
      -ms-overflow-style: none;
      scrollbar-width: none;
      scroll-behavior: smooth;
      &::-webkit-scrollbar {
        display: none;
      }
    }
    /* .container {
      min-width: ${breakpoints.minDesk};
      margin: auto;
      min-height: 100vh;
      overflow-x: auto;
    } */
    .btn-container {
      border-radius: 6px;
      font-size: 20px;
      font-family: Colfax-Book;
      border: none;
      padding: 0 25px;
      background: #0dc7d8;
      color: #fff;
      cursor: pointer;
      width: 250px;
      height: 54px;
      line-height: 54px;
      display: block;
      text-align: center;
    }
    /* @media screen and (max-width: ${breakpoints.sm}) {
      .container {
        max-width: ${breakpoints.maxMobi};
        min-width: ${breakpoints.minMobi};
      }
    } */
  }
`;

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
    @keyframes spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
    .container {
      padding: 0 120px;
      max-width: ${breakpoints.ex};
      margin: auto;
    }
    .child-container {
      margin: 80px auto;
    }
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
      :hover {
        opacity: 0.8;
      }
      &.loading {
        position: relative;
        background: #aaa;
        ::before {
          content: '';
          margin-top: -11px;
          position: absolute;
          left: 20px;
          top: 50%;
          transform: translateY(-50%);
          width: 20px;
          height: 20px;
          border-radius: 50%;
          border: 2px solid #fff;
          border-top-color: transparent;
          animation: spin linear infinite 2s;
        }
      }
    }
  }
`;

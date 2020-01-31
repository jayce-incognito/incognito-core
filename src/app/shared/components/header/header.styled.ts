import styled from 'styled-components';

export const Styled = styled.div`
  &.header {
    height: 60px;
    display: flex;
    align-items: center;
    padding: 0 5%;
    justify-content: space-between;
    border-bottom: solid 1px #f0f5f5;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    max-width: 100%;
    background: #fff;
    z-index: 100;
    .nav-header-item {
      font-size: 12px;
      color: #657576;
      letter-spacing: 1px;
      margin: auto 15px;
      font-family: Colfax-Book;
      text-transform: uppercase;
      &.actived {
        color: #111;
      }
    }
    .nav-main-item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      text-transform: capitalize;
      font-family: Colfax-Book;
      color: #111;
      letter-spacing: 0.8px;
      font-size: 16px;
      line-height: 20px;
    }
    .nav-main-item .img-container {
      width: 32px;
      height: 32px;
    }
    .sidebar-container {
      position: absolute;
      right: 2%;
    }
  }
`;

import styled from 'styled-components';

export const Styled = styled.div`
  &.sidebar {
    position: fixed;
    height: 100vh;
    min-height: 90vh;
    overflow-x: hidden;
    overflow-y: auto;
    padding: 1.5%;
    background: #fff;
    top: 0;
    right: 0;
    z-index: 1;
    transition: all 0.3s ease 0s;
    right: -300px;
    &.show {
      right: 0;
      width: 300px;
      transition: all 0.3s ease 0s;
    }
    .btn {
      text-align: right;
      margin-bottom: 10px;
    }
    .btn .btn-close {
      width: 24px;
      height: 24px;
    }
    .navs .nav-sidebar-item {
      display: block;
      padding: 12px 10px;
      margin-right: 30px;
      font-size: 16px;
      line-height: 20px;
      color: #4a5656;
      text-transform: capitalize;
      :hover {
        color: #7d7d7d;
      }
      &.validator {
        text-transform: unset;
      }
    }
  }
`;

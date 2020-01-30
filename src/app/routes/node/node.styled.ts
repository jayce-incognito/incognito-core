import styled from 'styled-components';

export const Styled = styled.div`
  &.node-container {
    .title-with-underline {
      font-weight: 500;
      font-family: Colfax-Book;
      text-align: center;
      ::after {
        margin: 20px auto 0;
        width: 40px;
        display: block;
        content: '';
        height: 2px;
        background-color: #25cdd6;
      }
    }
  }
`;

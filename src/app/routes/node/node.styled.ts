import styled from 'styled-components';
import { breakpoints } from 'src/core/utils/styled';

export const Styled = styled.div`
  &.node-container {
    .node-child {
      margin: 80px auto;
      max-width: ${breakpoints.minDesk};
      width: 80%;
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
  }
`;

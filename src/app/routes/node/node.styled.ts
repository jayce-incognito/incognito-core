import styled from 'styled-components';
import { breakpoints } from 'src/core/utils/styled';

export const Styled = styled.div`
  &.node-container {
    .node-child {
      margin: 80px auto;
      max-width: ${breakpoints.minDesk};
      width: 60%;
    }
  }
`;

import styled from 'styled-components';

export const StyleCommon = styled.div`
  position: relative;
  height: 54px;
  flex: 1 0 auto;
  width: 100%;
  margin-right: 20px;
  max-width: 350px;
  > input {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 8px;
    padding: 0 30px;
  }
`;

import * as React from 'react';
import styled from 'styled-components';
import { getEnvs } from 'src/core/utils';

interface IProps {}

const Styled = styled.div`
  &.main-container {
    position: relative;
    margin-top: 60px;
    overflow: hidden;
    background-image: url(${getEnvs().SOURCE_DOMAIN}/images/dex/background.png);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    min-height: 600px;
    height: calc(100vh - 60px);
  }
`;

const Main = (props: IProps) => {
  return <Styled className='main-container'></Styled>;
};

export default React.memo(Main);

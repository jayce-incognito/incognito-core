import * as React from 'react';
import styled from 'styled-components';
import ErrorBoundary from 'src/core/components/errorBound';
import Header from 'src/app/shared/components/header';
import Main from './features/main';
interface IProps {}

const Styled = styled.div`
  &.dex-container {
  }
`;

const Dex = (props: IProps) => {
  return (
    <ErrorBoundary>
      <Styled className='dex-container'>
        <Header />
        <Main />
      </Styled>
    </ErrorBoundary>
  );
};

export default React.memo(Dex);

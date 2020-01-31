import * as React from 'react';
import styled from 'styled-components';
import ErrorBoundary from 'src/core/components/errorBound';
import Header from "src/app/shared/components/header";

interface IProps {}

const Styled = styled.div``;

const Dex = (props: IProps) => {
  return (
    <ErrorBoundary>
      <Styled className='dex-container'>
        <Header />
      </Styled>
    </ErrorBoundary>
  );
};

export default React.memo(Dex);

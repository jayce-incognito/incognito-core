import * as React from 'react';
import styled from 'styled-components';
import Header from 'src/app/shared/components/header';
import ErrorBoundary from 'src/core/components/errorBound';
import Subscription from 'src/app/shared/components/subscription';

interface IProps {}

const Styled = styled.div``;

const Use = (props: IProps) => {
  return (
    <ErrorBoundary>
      <Styled className='use-container'>
        <Header />
        <Subscription />
      </Styled>
    </ErrorBoundary>
  );
};

export default React.memo(Use);

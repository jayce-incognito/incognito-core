import * as React from 'react';
import styled from 'styled-components';
import Header from 'src/app/shared/components/header';
import ErrorBoundary from 'src/core/components/errorBound';
import Subscription from 'src/app/shared/components/subscription';
import Intro from './features/intro';
import Section from './features/section';
import Hook from './features/hook';

interface IProps {}

const Styled = styled.div``;

const Use = (props: IProps) => {
  return (
    <ErrorBoundary>
      <Styled className='use-container'>
        <Header />
        <Intro />
        <Section />
        <Hook />
        <div className='container'>
          <Subscription />
        </div>
      </Styled>
    </ErrorBoundary>
  );
};

export default React.memo(Use);

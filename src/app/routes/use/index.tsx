import * as React from 'react';
import styled from 'styled-components';
import Header from 'src/app/shared/components/header';
import ErrorBoundary from 'src/core/components/errorBound';
import Subscription from 'src/app/shared/components/subscription';
import Intro from './features/intro';
import Section from './features/section';
import Hook from './features/hook';
import { II18n, translateSelector } from 'src/i18n';
import { useSelector } from 'react-redux';
import useMetaTags from 'react-metatags-hook';

interface IProps {}

const Styled = styled.div``;

const Use = (props: IProps) => {
  const { use }: II18n = useSelector(translateSelector);
  const { metaTags } = use;
  useMetaTags({
    ...metaTags
  });
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

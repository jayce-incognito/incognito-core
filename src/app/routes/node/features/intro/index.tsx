import * as React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { translateSelector, II18n } from 'src/i18n';
import ErrorBoundary from 'src/core/components/errorBound';

interface IProps {}

const Styled = styled.div`
  &.intro-container {
    .intro-heading {
      text-align: center;
      margin: 30px auto;
    }
    .intro-heading .heading {
      font-size: 32px;
      line-height: 41px;
      letter-spacing: 0.4px;
      text-transform: none;
      font-weight: 500;
      font-family: Colfax-Book;
    }
    .intro-heading .desc {
      color: #4a5656;
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
      letter-spacing: 0.1px;
      margin-top: 10px;
      margin-bottom: 10px;
    }
  }
`;

const Intro = (props: IProps) => {
  const { node }: II18n = useSelector(translateSelector);
  const { introHeading } = node.introContainer;
  return (
    <ErrorBoundary>
      <Styled className='intro-container child-container'>
        <div className='intro-heading'>
          <h1 className='heading'>{introHeading.heading}</h1>
          <p className='desc'>{introHeading.desc}</p>
        </div>
      </Styled>
    </ErrorBoundary>
  );
};

export default React.memo(Intro);

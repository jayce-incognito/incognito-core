import * as React from 'react';
import styled from 'styled-components';
import ErrorBoundary from 'src/core/components/errorBound';

interface IProps {}

const Styled = styled.div`
  &.earning {
  }
`;

const Earning = (props: IProps) => {
  return (
    <ErrorBoundary>
      <Styled className='earning-container child-container'></Styled>
    </ErrorBoundary>
  );
};

export default React.memo(Earning);

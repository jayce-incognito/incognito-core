import * as React from 'react';
import styled from 'styled-components';

interface IProps {}

const Styled = styled.div``;

const Use = (props: IProps) => {
  return <Styled className='use-container'></Styled>;
};

export default React.memo(Use);

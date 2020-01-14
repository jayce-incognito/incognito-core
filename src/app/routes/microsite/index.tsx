import * as React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

interface IProps {}

const Styled = styled.div`
  &.microsite {
    min-height: 100vh;
    background: #0c0c0c;
    max-width: 80%;
    margin: auto;
    .title {
      color: #fff;
      font-weight: bold;
      text-align: center;
    }
  }
`;

const Microsite = (props: IProps) => {
  const microsite = useSelector((state: any) => state.microsite);
  console.log('name: ', microsite)
  return (
    <Styled className='microsite'>
      <p className='title'>This is page microsite</p>
    </Styled>
  );
};

export default Microsite;

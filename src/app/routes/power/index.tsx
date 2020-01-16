import * as React from 'react';
import Header from 'src/app/shared/components/header';
import { Styled } from './power.styled';

interface IProps {}

const Power = (props: IProps) => {
  return (
    <Styled className='power'>
      <Header />
    </Styled>
  );
};

export default Power;

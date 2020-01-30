import * as React from 'react';
import styled from 'styled-components';
import { StyleCommon } from './input.styled';

interface IProps {}

const Styled = styled(StyleCommon)`
  &.input-email {
  }
`;

const InputEmail = (props: IProps & React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <Styled className='input-email'>
      <input
        type='text'
        {...props}
      />
    </Styled>
  );
};

export default React.memo(InputEmail);

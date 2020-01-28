import * as React from 'react';
import styled from 'styled-components';
import { StyleCommon } from './index.styled';

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
        pattern={`[A-Za-z0-9._%+-]{3,}@[a-zA-Z0-9-]{2,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})`}
        {...props}
      />
    </Styled>
  );
};

export default React.memo(InputEmail);

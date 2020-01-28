import * as React from 'react';
import styled from 'styled-components';

interface IProps {}

const Styled = styled.form`
  &.form {
  }
`;

const Form = (props: IProps) => {
  return <Styled className='form'></Styled>;
};

export default React.memo(Form);

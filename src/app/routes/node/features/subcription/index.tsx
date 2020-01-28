import * as React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { translateSelector } from 'src/i18n';
import { InputEmail } from 'src/core/components/input';

interface IProps {}

const Styled = styled.div`
  &.subcription-container {
    background-color: #0f3435;
    border-radius: 8px;
    padding: 50px 20px;
    .title {
      font-size: 32px;
      line-height: 40px;
      color: #fff;
    }
    .desc {
      color: #fff;
      font-size: 16px;
      line-height: 24px;
      margin: 30px 0;
      text-align: center;
    }
    .form-container {
      display: flex;
      max-width: 620px;
      margin: auto;
    }
    .input-container {
    }
  }
`;

const Subcription = (props: IProps) => {
  const { node } = useSelector(translateSelector);
  const { title, desc, form } = node.subContainer;
  return (
    <Styled className='subcription-container node-child'>
      <p className='title title-with-underline'>{title}</p>
      <p className='desc'>{desc}</p>
      <form
        className='form-container'
        action=''
        onSubmit={(e: any) => e.preventDefault()}
      >
        <InputEmail placeholder={form.inputEmail} />
        <button className='btn-container btn-submit'>{form.btnSubmit}</button>
      </form>
    </Styled>
  );
};

export default React.memo(Subcription);

import * as React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { translateSelector, II18n } from 'src/i18n';
import Helmet from 'react-helmet';

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
    .description {
      font-size: 14px;
      line-height: 18px;
      color: #000;
      font-weight: bold;
      text-align: center;
    }
  }
`;

const Microsite = (props: IProps) => {
  const { microsite }: II18n = useSelector(translateSelector);

  return (
    <Styled className='microsite'>
      <Helmet title={microsite.helmet} />
      <p className='title'>This is page microsite</p>
      <p className='description'>This is description of page</p>
    </Styled>
  );
};

export default Microsite;

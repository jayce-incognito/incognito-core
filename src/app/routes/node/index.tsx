import * as React from 'react';
import Header from 'src/app/shared/components/header';
import { Styled } from './node.styled';
import useMetaTags from 'react-metatags-hook';
import { II18n, translateSelector } from 'src/i18n';
import { useSelector } from 'react-redux';
import Intro from './features/intro';
import Earning from './features/earning';
import Benefits from './features/benefits';
import Featured from './features/featured';
import Story from './features/story';
import Subcription from "./features/subcription";

interface IProps {}

const Power = (props: IProps) => {
  const { node }: II18n = useSelector(translateSelector);
  const { metaTags } = node;
  useMetaTags({
    ...metaTags
  });
  return (
    <Styled className='node-container'>
      <Header />
      <div className='container'>
        <Intro />
        <Earning />
        <Benefits />
        <Featured />
        <Story />
        <Subcription />
      </div>
    </Styled>
  );
};

export default React.memo(Power);

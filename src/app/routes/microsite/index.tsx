import * as React from 'react';
import { useSelector } from 'react-redux';
import { translateSelector, II18n } from 'src/i18n';
import { Link } from 'react-router-dom';
import { Styled } from './microsite.styled';
import { getEnvs } from 'src/core/utils';
import useMetaTags from 'react-metatags-hook';

interface IProps {}

interface IHook {
  title: string;
  desc: string;
  btnText: string;
  to: string;
  imgSrc: string;
  className: string;
}

interface IIntro {
  left: string;
  right: string;
}

const Intro = ({ left, right }: IIntro) => {
  return (
    <div className='intro abs-center-ver'>
      <p className='title'>{left}</p>
      <div className='img-container abs-center-ver'>
        <img
          src={`${getEnvs().SOURCE_DOMAIN}/images/microsite/236ce48.svg`}
          alt=''
        />
      </div>
      <p className='title'>{right}</p>
    </div>
  );
};

const Hook = ({ title, desc, btnText, to, imgSrc, ...rest }: IHook) => {
  return (
    <div {...rest}>
      <h1 className='title'>{title}</h1>
      <p className='desc'>{desc}</p>
      <Link className='btn-container' to={to}>
        {btnText}
      </Link>
      <div className='img-container'>
        <img src={imgSrc} alt='' className='abs-center' />
      </div>
    </div>
  );
};

const Microsite = (props: IProps) => {
  const { microsite }: II18n = useSelector(translateSelector);
  const { metaTags, left, right, intro } = microsite;
  useMetaTags({
    ...metaTags
  });
  return (
    <Styled className='microsite'>
      <Intro {...{ ...intro }} />
      <Hook
        className='hook left-container'
        title={left.title}
        desc={left.desc}
        btnText={left.btnText}
        to='/node'
        imgSrc={`${getEnvs().SOURCE_DOMAIN}/images/microsite/6e32079.png`}
      />
      <Hook
        className='hook right-container'
        title={right.title}
        desc={right.desc}
        btnText={right.btnText}
        to='/send-bitcoin-anonymously'
        imgSrc={`${getEnvs().SOURCE_DOMAIN}/images/microsite/17eb399.png`}
      />
    </Styled>
  );
};

export default Microsite;

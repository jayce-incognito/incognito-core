import * as React from 'react';
import { useSelector } from 'react-redux';
import { translateSelector, II18n } from 'src/i18n';
import { Styled } from './header.styled';
import Navs from 'src/app/shared/components/navs';
import { Link } from 'react-router-dom';
import { getEnvs } from 'src/core/utils';
import Sidebar from '../sidebar';

interface IProps {}

const Header = (props: IProps) => {
  const translate: II18n = useSelector(translateSelector);
  const {
    power,
    use,
    trade,
    create,
    explore,
    incognito,
    payroll,
    tech,
    blog,
    outStory
  } = translate.header;
  const navsLeftFactories = [
    {
      to: '/node',
      content: power
    },
    {
      to: '/send-bitcoin-anonymously',
      content: use
    },
    {
      to: '/dex',
      content: trade
    },
    {
      to: '/create/privacy-coins',
      content: create
    },
    {
      to: '/',
      target: '_blank',
      content: explore
    }
  ];
  const navsRightFactories = [
    {
      to: '/payroll',
      content: payroll
    },
    {
      to: '/tech',
      content: tech
    },
    {
      to: '/blog',
      content: blog
    },
    {
      to: '/about',
      content: outStory
    }
  ];

  return (
    <Styled className='header'>
      <Navs navs={navsLeftFactories} classNameNav='nav-header-item' />
      <div className='navs-center'>
        <Link to='/' className='nav-main-item'>
          <div className='img-container'>
            <img src={`${getEnvs().SOURCE_DOMAIN}/images/logo.svg`} alt='' />
          </div>
          {incognito}
        </Link>
      </div>
      <Navs navs={navsRightFactories} classNameNav='nav-header-item' />
      <Sidebar />
    </Styled>
  );
};

export default React.memo(Header);

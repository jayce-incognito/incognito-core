import * as React from 'react';
import { getEnvs } from 'src/core/utils';
import { II18n, translateSelector } from 'src/i18n';
import { useSelector } from 'react-redux';
import Navs from 'src/app/shared/components/navs';
import { Styled } from './sidebar.styled';
import { SidebarContainerContext } from './index';

interface IProps {}

const Sidebar = (props: IProps) => {
  const { sidebar }: II18n = useSelector(translateSelector);
  const {
    openSource,
    bootstrapped,
    host,
    code,
    deck,
    whitepaper,
    telegram,
    contactUs,
    privacy,
    returnWarranty
  } = sidebar;
  const navsTopFactories = [
    {
      to: '/free-software',
      content: openSource
    },
    {
      to: '/self-funded',
      content: bootstrapped
    },
    {
      to: '/validator',
      content: host,
      className: 'validator'
    },
    {
      to: '#https://github.com/incognitochain?tab=repositories',
      target: '_blank',
      content: code,
      onClickNav: (e: any) => {
        e.preventDefault();
        window.open(`https://github.com/incognitochain?tab=repositories`);
      }
    }
  ];
  const navsMainFactories = [
    {
      to: '/deck.pdf',
      content: deck,
      target: '_blank'
    },
    {
      to: '/whitepaper.pdf',
      content: whitepaper,
      target: '_blank'
    }
  ];

  const navsBotFactories = [
    {
      to: '#https://t.me/incognitochain',
      content: telegram,
      target: '_blank',
      onClickNav: (e: any) => {
        e.preventDefault();
        window.open(`https://t.me/incognitochain`);
      }
    },
    {
      to: '#mailto: go@incognito.org',
      content: contactUs,
      onClickNav: (e: any) => {
        e.preventDefault();
        window.open(`mailto: go@incognito.org`);
      }
    },
    {
      to: '/privacy',
      content: privacy
    },
    {
      to: '/return',
      content: returnWarranty
    }
  ];
  const { handleToggleSidebar, toggle }: any = React.useContext(
    SidebarContainerContext
  );
 
  return (
    <Styled className={`sidebar ${toggle ? 'show' : ''}`}>
      <div className='btn'>
        <button className='btn-close' onClick={handleToggleSidebar}>
          <img src={`${getEnvs().SOURCE_DOMAIN}/images/8670382.svg`} alt='' />
        </button>
      </div>
      <Navs navs={navsTopFactories} classNameNav='nav-sidebar-item' />
      <hr />
      <Navs navs={navsMainFactories} classNameNav='nav-sidebar-item' />
      <hr />
      <Navs navs={navsBotFactories} classNameNav='nav-sidebar-item' />
    </Styled>
  );
};

export default Sidebar;

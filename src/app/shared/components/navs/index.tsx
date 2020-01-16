import { Link, useLocation } from 'react-router-dom';
import * as React from 'react';

interface INavItem {
  to: string;
  content: string;
  target?: string;
  onClickNav?: (e: any) => void;
  className?: string;
}

interface INav {
  className?: string;
  navs: any[];
  classNameNav?: string;
}

const Navs = ({ className = '', classNameNav = 'nav-item', navs }: INav) => {
  const { pathname } = useLocation();
  return (
    <div className={`navs ${className}`}>
      {navs.map((item: INavItem) => (
        <Link
          key={item.to}
          className={`${classNameNav} ${item.className || ''} ${
            pathname === item.to ? 'actived' : ''
          }`}
          to={item.to}
          target={item?.target || ''}
          onClick={item.onClickNav}
        >
          {item.content}
        </Link>
      ))}
    </div>
  );
};

export default Navs;

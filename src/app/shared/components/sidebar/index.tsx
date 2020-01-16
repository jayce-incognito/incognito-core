import * as React from 'react';
import styled from 'styled-components';
import { getEnvs } from 'src/core/utils';
import Sidebar from './sidebar';
import useMouseDown from 'src/core/hooks/useMouseDown';

interface IProps {}

export const SidebarContainerContext = React.createContext({});

const Styled = styled.div`
  &.sidebar-container {
    cursor: pointer;
    .overlay {
      position: fixed;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      overflow: hidden;
    }
  }
`;

const SidebarContainer = (props: IProps) => {
  const [toggle, shouldToggle] = React.useState(false);
  const handleToggleSidebar = () => shouldToggle(!toggle);
  const ref: any = React.useRef(null);
  const handleClickOutside = (e: any) => {
    if (toggle && ref.current.contains(e.target)) {
      handleToggleSidebar();
    }
    return;
  };
  const [] = useMouseDown({
    handleClickOutside
  });
  return (
    <SidebarContainerContext.Provider
      value={{
        handleToggleSidebar,
        toggle
      }}
    >
      <Styled className='sidebar-container'>
        <button className='btn-toggle-sidebar' onClick={handleToggleSidebar}>
          <img src={`${getEnvs().SOURCE_DOMAIN}/images/66d86c9.svg`} alt='' />
        </button>
        {toggle && <div className='overlay' ref={ref}></div>}
        <Sidebar />
      </Styled>
    </SidebarContainerContext.Provider>
  );
};

export default SidebarContainer;

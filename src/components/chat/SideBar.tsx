import React from 'react';
import SideBarVerticalMenu from './SideBarVerticalMenu';
import SidebarContent from './SidebarContent';
const SideBar = () => {
  return (
    <aside className='flex flex-row'>
        <SideBarVerticalMenu/>
        <SidebarContent/>
    </aside>
  )
}

export default SideBar
import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import { home } from 'react-icons-kit/icomoon/home';
import { bubbles3 } from 'react-icons-kit/icomoon/bubbles3';
import { documents } from 'react-icons-kit/ikons/documents';
import {fileText} from 'react-icons-kit/icomoon/fileText'
import { Icon } from 'react-icons-kit';
import { ic_menu } from 'react-icons-kit/md/ic_menu'
import { useSideButtonMutation, useSideButtonState, useHamburgerMenuMutation, useHamburgerMenuState } from '../../stores/NavBarState';


interface IconProps {
    active?: boolean,
    iconObj: any,
    toolTipText?: string

}

const SideBarVerticalMenu = () => {
    const { data } = useSideButtonState();
    const mutation = useSideButtonMutation();
    const navigate = useNavigate();


    const collapsedSidebar = useHamburgerMenuMutation()
    const collapsed = useHamburgerMenuState().data

    const handleCollapseClick = () => {
        collapsedSidebar.mutate(false)
    }


    return (
        <div className=' bg-neutral w-16 flex flex-col items-center pt-2  text-white'>
            <div onClick={() => handleCollapseClick()}>
            
                    <SidebarIcon iconObj={ic_menu} />
              
            </div>
            <Link to="/dashboard">
                <SidebarIcon  toolTipText={"navigate to dashboard"} iconObj={home} />
            </Link>
            <hr className='border-[0.] mt-2 border-gray mb-4' />
            <div className='space-y-4'>
            
                {data?.map((item) => (
                    <div onClick={() => mutation.mutate(item.menuName)}>
                        <SidebarIcon toolTipText={item.menuName} active={item.state} iconObj={iconNames[item.menuName]} />
                    </div>
                ))}
                
            </div>
           
        </div>
    )
}

const iconNames = {
    documents: documents,
    chats: bubbles3,
    notes: fileText
}


const SidebarIcon = ({ iconObj, active, toolTipText }: IconProps) => {
    return (

        <div className={`relative flex items-center justify-center h-10 w-10 mt-2 mb-2 ${active ? "bg-[#1d232a] rounded-xl" : "bg-neutral"} hover:bg-[#1d232a]  text-primary  hover:rounded-xl  transition-all duration-300 ease-linear cursor-pointer shadow-lg `}>
            <div data-tip={toolTipText} className="tooltip tooltip-primary px-2  tooltip-right">
                <Icon size={28} icon={iconObj}></Icon>
            </div>
        </div>
    )
}

export default SideBarVerticalMenu

import { useHamburgerMenuState, useSideButtonState } from '../../stores/NavBarState';
import { filenamesState } from '../../stores/filenames/filenameState';
import { deleteListofFilenames } from '../../stores/filenames/deleteListofFilenames';
import { useParams } from 'react-router-dom';
import SidebarFiles from './sidebar/SidebarFiles';
import ChatHistory from './sidebar/ChatHistory';
import ProjectNotes from './sidebar/projectNotes/ProjectNotes';
import React from 'react';


const SidebarContent = () => {
    const { project_id } = useParams();
    const filenames = filenamesState(project_id).data;

    const sidebarCollapsed = useHamburgerMenuState().data;
    const sideButtonState = useSideButtonState().data?.filter(item => item.state === true);

    const deleteMutation = deleteListofFilenames();

    return (
        <div className={`flex flex-col bg-gray-700 w-72 max-h-screen custom-scrollbar2 overflow-y-auto overflow-x-hidden text-white text-xs ${sidebarCollapsed ? "w-0 fixed left-[-300px]" : "flex"} transition-all duration-200 ease-linear`}>

            { 
                sideButtonState && (
                    <div>
                        <div className={`${sideButtonState[0]?.menuName == "documents" ? "block" : "hidden"}`}>
                            <SidebarFiles  ></SidebarFiles>
                        </div>
                        <div className={`${sideButtonState[0]?.menuName == "chats" ? "block" : "hidden"}`}>
                            <ChatHistory></ChatHistory>
                        </div>
                        <div className={`${sideButtonState[0]?.menuName == "notes" ? "block" : "hidden"}`}>
                            <ProjectNotes ></ProjectNotes>
                        </div>



                    </div>
                )

            }
        </div>
    )
}

export default SidebarContent
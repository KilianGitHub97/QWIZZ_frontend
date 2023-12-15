import React from "react";
import {fileEmpty} from 'react-icons-kit/icomoon/fileEmpty'
import { Icon } from 'react-icons-kit';

const NotesEntry = ({name, active}: {name:string, active:boolean}) => {
    return(
        <div 
            className={`flex flex-row w-full items-center space-x-2 hover:bg-neutral cursor-pointer p-2 group ${active ? 'bg-neutral' : ''}`}
        >
            <Icon size={18} icon={fileEmpty} className='text-primary group-hover:text-white'></Icon>
            <div className='font-bold text-sm' style={{ maxWidth: '100%', wordBreak: 'break-all' }}>
                {name}
            </div>
        </div>
    );
};

export default NotesEntry;
import React from 'react'
import { Icon } from 'react-icons-kit'
import {ic_close} from 'react-icons-kit/md/ic_close'

const DocumentBadge = () => {
    return (
        <div className='ml-4 flex space-x-2'>
          
           
            <div className="flex   border-[0.1px] hover:border-gray-400  shadow-md bg-gray rounded-md px-2 items-center space-x-2 ">
            <div className='rounded-md  hover:bg-gray-400 p-1 mt-1 mb-1  text-black text-xs cursor-pointer transition-all duration-300 '>
            <Icon size={16} icon={ic_close}></Icon>
            </div>
                <div className='font-bold text-sm'> document.pdf</div>
            </div>
        </div>
    )
}

export default DocumentBadge
import React from 'react';
import { Icon } from 'react-icons-kit';
import {ic_close} from 'react-icons-kit/md/ic_close';


const BubbleDocumentBadge = ({name, id, link}:{name:string, id:number, link:string}) => {
    return (
          <div className="flex w-fit text-primary font-bold  hover:border-gray-400  border-[0.1px] border-gray-300  cursor-pointer transition-all duration-300   shadow-md bg-gray rounded-md px-2 items-center space-x-2 ">
            <div className='rounded-md  text-primary   mt-1 mb-1   text-xs'>
              {id}.
            </div>
            <a href={link} target="_blank" className=' link link-hover  text-sm'> {name}</a>
        </div>
    )
}

export default BubbleDocumentBadge
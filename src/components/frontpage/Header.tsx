import React from 'react'
import { Icon } from 'react-icons-kit';
import {info} from 'react-icons-kit/fa/info'
import ProfileDropdownIcon from '../auth/ProfileDropdownIcon';

const header = () => {
    return (
        <div className='flex justify-between  h-14  w-full bg-base-100'>
            <div className="">
                <a 
                    href='/dashboard' 
                    className="text-primary font-bold cursor-pointer normal-case text-3xl ml-4"
                >
                    Qwizz
                </a>
            </div>
            <div className='flex mr-4 mt-2'>
                <Icon className="text-primary" size={32} icon={info} />
                <ProfileDropdownIcon></ProfileDropdownIcon>
            </div>

        </div>
    )
}

export default header
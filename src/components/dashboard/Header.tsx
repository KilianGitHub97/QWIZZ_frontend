import React from 'react'
import ProfileDropdownIcon from '../auth/ProfileDropdownIcon';
import { ic_help_outline_twotone } from 'react-icons-kit/md/ic_help_outline_twotone';
import Icon from 'react-icons-kit';
import { useNavigate } from 'react-router-dom';

const header = () => {

    const navigate = useNavigate();

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
                <Icon 
                    className="text-primary hover:scale-105 cursor-pointer mr-2 mt-0.25"
                    onClick={() => {navigate("/dashboard/introduction")}}
                    size={25}
                    icon={ic_help_outline_twotone}
                />
                <ProfileDropdownIcon></ProfileDropdownIcon>
            </div>

        </div>
    )
}

export default header
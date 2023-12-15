import React, { useState,Fragment } from 'react'
import Icon from 'react-icons-kit'
import { ic_account_circle_outline } from 'react-icons-kit/md/ic_account_circle_outline';
import { logout } from 'react-icons-kit/iconic/logout';
import { Link } from 'react-router-dom';
import { logoutMutation } from '../../stores/auth/Auth';
import { Menu, Transition,  } from '@headlessui/react';
import { useUserState } from '../../stores/auth/Auth';


const ProfileDropdownIcon = () => {
    const logoutFunction = logoutMutation();
    const {data, isSuccess} =  useUserState()
    


     return (isSuccess&&(
        <div className="flex -mt-1">
            <Menu as="div" className="relative inline-block text-left">
                <div className='tooltip tooltip-primary tooltip-bottom' data-tip="Account">
                    <Menu.Button >
                        <Icon className='text-primary hover:bg-secondary p-1 rounded-xl' size={26} icon={ic_account_circle_outline}></Icon>
                    </Menu.Button>
                </div>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items className="absolute right-0 mt-2 w-80 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className=" py-2 flex flex-col px-4 ">
                            <div className='flex flex-col items-center '>
                                <div className="avatar mt-2 placeholder">
                                    <div className="bg-neutral-focus text-neutral-content rounded-full w-16">
                                        <span className="text-3xl">K</span>
                                    </div>
                                </div>
                                <div className='text-md font-bold' >{data.email}</div>              
                            </div>
                            <Menu.Item>
                                <MenuItem name='Logout' IconObj={logout} callback={ () => logoutFunction.mutate() }></MenuItem>
                            </Menu.Item>
                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>
        </div>
     )
    )
}







type mutationType = () => void;
const MenuItem = ({ name, IconObj, href, callback }: { name: string, IconObj: any, href?: string, callback: mutationType }) => {

    return (
        <div onClick={callback} >
            <Link className='hover:bg-gray-100 w-full items-center flex cursor-pointer p-2' to={href ? href : "#"}>
                <Icon size={18} icon={IconObj}></Icon>
                <span className='ml-2'>{name}</span>
            </Link>
        </div>

    )
}

export default ProfileDropdownIcon
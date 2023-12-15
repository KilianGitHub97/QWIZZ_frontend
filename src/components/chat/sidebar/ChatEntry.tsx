import { Icon } from 'react-icons-kit';
import { ic_chat_bubble_outline } from 'react-icons-kit/md/ic_chat_bubble_outline';
import { ic_more_vert_twotone } from 'react-icons-kit/md/ic_more_vert_twotone';
import { Fragment, useEffect, useRef, useState } from 'react';
import { Menu, Transition, Popover } from '@headlessui/react';
import { ic_edit } from 'react-icons-kit/md/ic_edit';
import { trash } from 'react-icons-kit/fa/trash';
import { getMessages, useMessagesState, useLoadChatMessages} from '../../../stores/chats/messages';
import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query';
import RenameChatModal from './RenameChatModal';
import { useSelectedChatState } from '../../../stores/chats/chats';
import DeleteChatModal from './DeleteChatModal';

const ChatEntry = ({ name, id }: { name: string, id: string }) => {
    let queryClient = useQueryClient()


    const {mutate, isSuccess, isLoading} = useLoadChatMessages()
    const {data:selectedChat_id} = useSelectedChatState()
  

    const handleClick=()=>{
        mutate({chat_id:id})
       
    }



    return (
        <div 
            onClick={handleClick} 
            className={` ${selectedChat_id==id?'bg-neutral':''} flex flex-row w-full items-center justify-between space-x-2 hover:bg-neutral cursor-pointer p-2 group `}
        >
            <div className='flex items-center'>
                <Icon size={18} className='text-primary mr-2' icon={ic_chat_bubble_outline}></Icon>
                <div className='font-bold text-sm'>{name}</div>
            </div>

            <div className='hover:bg-black '>
                <MyPopover name={name}  chat_id={id}></MyPopover>
            </div>
            
        </div>

    )
}






const MyPopover = ({chat_id, name}:{chat_id:string, name:string}) => {
    const refName = useRef(null)
    const PopoverButtonRef = useRef(null);
    const refDelete = useRef(null)
    return (
        <div className="">
            <Popover className="relative">
                {({ open }) => (
                    <>
                        <Popover.Button  ref={PopoverButtonRef} className="relative text-left">
                            <Icon size={20} icon={ic_more_vert_twotone}></Icon>
                        </Popover.Button>
                        <div className='z-20'>
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                        >
                            <Popover.Panel className="absolute z-20 right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-gray-700 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                                    <RenameChatModal chat_id={chat_id} name={name}  ref={refName}></RenameChatModal>
                                    <DeleteChatModal chat_id={chat_id} name={name}  ref={refDelete}></DeleteChatModal>
                                    
                                    <div className="relative grid gap-2 p-2">
                                        <button
                                          
                                            onClick={() => {
                                                refName?.current?.showModal()
                                        
                                            }}
                                            className={`text-white hover:bg-neutral  group flex w-full items-center rounded-md px-2 py-2 text-sm`}>
                                            <Icon size={18} className='text-primary mr-2' icon={ic_edit}></Icon>
                                            Rename
                                        </button>
                                        <button
                                          
                                            onClick={() => refDelete?.current?.showModal()}
                                            className={`text-white hover:bg-neutral  group flex w-full items-center rounded-md px-2 py-2 text-sm`}>
                                            <Icon size={18} className='text-primary mr-2' icon={trash}></Icon>
                                            Delete
                                        </button>  
                                    </div>

                                </div>
                            </Popover.Panel>
                        </Transition>
                        </div>
                    </>
                )}
            </Popover>
        </div>
    )
}




export default ChatEntry
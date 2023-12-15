import React from 'react'
import ChatEntry from './ChatEntry'
import {useAllChatsState, Chat, useSelectedChatState} from '../../../stores/chats/chats'
import { useLoadChatMessages } from '../../../stores/chats/messages'
import { useParams } from 'react-router-dom'


const ChatHistory = () => {
    const  {project_id} = useParams()
    
    const {data, isSuccess} = useAllChatsState(project_id)
    const {data:chat_id, isLoading} = useSelectedChatState();
    const {mutate} = useLoadChatMessages()
     
    const handleClick=()=>{
        mutate({chat_id:null})
    }

    return (

        <div className={`flex flex-col bg-gray-700 w-72 text-white text-xs  transition-all duration-200 ease-linear`}>

            <div className='flex px-4 py-4'>
                <h3 className='text-lg text-bold mt-2'>Chats</h3>
            </div>
            <div className="flex w-full justify-start">
                <button 
                className='btn btn-accent btn-sm mx-5 disabled:opacity-25 disabled:text-white  disabled:bg-accent ' 
                disabled={chat_id==null?true:false}
                onClick={handleClick}>
                     + Start New
                </button>
            </div>

            <div className='flex px-4 py-4'>
                <h3 className='mt-2'>Recents</h3>
            </div>
            <div className="flex flex-col  ">
                {isSuccess && data.map((item:Chat)=><ChatEntry key={item.id} name={item.name} id={item.id} ></ChatEntry>)}
                
            </div>



        </div>
    )
}




export default ChatHistory
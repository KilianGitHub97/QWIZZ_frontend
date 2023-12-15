import React, { useState, useEffect } from 'react';

import UserChatBubble from './UserChatBubble';
import BotChatBubble from './BotChatBubble';
import { Message, MESSAGE_TYPE, useLoadChatMessages, useMessagesState } from '../../stores/chats/messages';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useSelectedChatState, setSelectedChatMutation } from '../../stores/chats/chats';



const ChatField = React.forwardRef<HTMLDivElement>((props, ref) => {

    // get the messages of the selected chat
    // init the component with no messages since the initialy no chat will be selected
    const { data, status } = useMessagesState()
    const { data: chat_id } = useSelectedChatState()


    useEffect(() => {
        handleScroll()
    }, [data])

    const handleScroll = () => {

        ref?.current?.scrollIntoView({ behavior: 'smooth', block: 'end' })

    }

    return (
        <div className='flex flex-col justify-between bg-base-100 h-full custom-scrollbar  overflow-auto'>
            {chat_id && data?.length == 0 && <NoDataComponent></NoDataComponent>}
            {!chat_id && (<NoChatSelectedComponent></NoChatSelectedComponent>)}
            <div>
                {status == "success" && chat_id && data?.map((item: Message) =>
                    item.msg_type == MESSAGE_TYPE.USER ?
                        <UserChatBubble
                            key={item.id}
                            message_id={item.id}
                            favourite={item.favourite}
                            chat_id= {chat_id}
                            text={item.content}
                            type={item.msg_type}
                            docs={item.selected_docs} >
                        </UserChatBubble> :
                        <BotChatBubble
                            key={item.id}
                            message_id={item.id}
                            favourite={item.favourite}
                            chat_id= {chat_id}
                            text={item.content}
                            type={item.msg_type}
                            docs={item.selected_docs}
                        ></BotChatBubble>
                )

                }



            </div>
            {data && <div ref={ref}></div>}
        </div>
    )



}
)


const NoDataComponent = () => {
    return (
        <div className='flex justify-center items-center self-center h-full'>
            <h3 className="justify-center  text-primary font-bold text-4xl"> Qwizz</h3>
            <div className='text-2xl'>The chat does not contain any messages!</div>
        </div>
    )
}


const NoChatSelectedComponent = () => {
    return (
        <div className='flex flex-col justify-center items-center self-center h-full'>
            <h3 className="justify-center text-primary font-bold text-5xl mb-4"> Qwizz</h3>
            <div className='text-2xl'>Create a new chat by sending a message or select an already existing one!</div>
        </div>
    )
}

export default ChatField
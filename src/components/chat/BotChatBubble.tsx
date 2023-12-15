import React, {useState} from 'react';
import { Icon } from 'react-icons-kit';
import { ic_android } from 'react-icons-kit/md/ic_android';
import { MESSAGE_TYPE } from '../../stores/chats/messages';
import DocumentCollapse from './DocumentCollapse'
import ChatTextBox from './ChatTextBox';

type Props = {
  message_id:number,
  chat_id:number,
  text: string,
  type: number,
  favourite:boolean,
  docs:any
}
const BotChatBubble = ({ text, type, docs,message_id, chat_id ,favourite}: Props) => {
  return (
    <div className='flex flex-row bg-base-100 py-4 items-center '>
      <div className='container mx-auto flex items-center'>
        <div className="avatar placeholder pl-8 pr-7">
          <div className="bg-neutral-focus text-white rounded-full w-12 h-12">
            <Icon size={32} icon={ic_android} />
          </div>
        </div>
        <div className='flex mt-4 flex-col w-full'>
        <div className='font-medium  mr-28'>
          {type === MESSAGE_TYPE.LOADING ? <Loading /> : <ChatTextBox chat_id={chat_id} message_id={message_id} favourite={favourite} text={text} type={type}></ChatTextBox>}
        </div>
        
        
        <DocumentCollapse type={type} documents={docs}></DocumentCollapse> 

       
        </div>
      </div>
    </div>
  )
}

const Loading = () => {
  return (
    <div>
      <span className="loading loading-bars loading-lg"></span>
    </div>
  )
}

export default BotChatBubble
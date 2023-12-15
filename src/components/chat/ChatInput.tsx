import React, { ChangeEvent, KeyboardEvent, useState, useRef, forwardRef } from 'react';
import { Icon } from 'react-icons-kit';
import { ic_send } from 'react-icons-kit/md/ic_send';
import { useCreateMessages,  } from '../../stores/chats/messages';
import { useParams } from 'react-router-dom';
import { useCreateChatMutation, useSelectedChatState } from '../../stores/chats/chats';
import { queryClient } from '../..';
import DocumentBadge from './DocumentBadge';

const ChatInput = forwardRef((props, chatref) => {
    const [message, setMessage] = useState('');
    const {project_id} = useParams()
    const ref = useRef<HTMLTextAreaElement>(null);
    const mutation = useCreateMessages();
    let {data:chat_id} = useSelectedChatState()
    const createChat = useCreateChatMutation()


    const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
       
        setMessage(event.target.value);
         //automaticly growing texarea 
         if (ref.current) {
            ref.current.style.height = 'auto'; // Reset the height to auto
            ref.current.style.height = `${ref.current.scrollHeight}px`; // Set the height to the scroll height
            
          }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
        if(event.key === 'Enter' && event.shiftKey) {
            event.preventDefault(); 
            handleNewLine()
            return
        }
        if (event.key === 'Enter' && !mutation.isLoading) {
            event.preventDefault();
            sendMessage()
        }
    };

    const sendMessage =async () => {
        if(!chat_id){
            //create a new chat and then send a message
            const thing = await createChat.mutateAsync(project_id)
            chat_id = queryClient.getQueryData(['selectedChat'])
            
        }
    
        let message = ref?.current!.value
        //Remove spaces with trim()
        message = message.trim()

        //check if message is not empty string
        if (message != "" && chat_id) {
            
            mutation.mutate({message,chat_id})
        }
        //TODO Bad Implementation- have to fix it after we connect it with the bacck-end
        setTimeout(() => {
            chatref?.current?.scrollIntoView({ behavior: 'smooth', block: 'end' })
        }, 1000);
        //clear input value
        ref.current!.value = "";
        setMessage("")
        ref.current.style.height = 'auto'; // Reset the height to auto
    }

    const handleNewLine = () => {
        if (ref.current) {
          const { selectionStart, selectionEnd } = ref.current;
          const value = ref.current.value;
    
          const newValue =
            value.substring(0, selectionStart) +
            '\n' +
            value.substring(selectionEnd);
    
          ref.current.value = newValue;
          ref.current.selectionStart = selectionStart + 1;
          ref.current.selectionEnd = selectionStart + 1;
          ref.current.focus();
          scrollToBottom();
         
        }
      };

    const scrollToBottom = () => {
        if (ref.current) {
          ref.current.scrollTop = ref.current.scrollHeight;
        }
      };

    return (

        <div className='flex  w-full   items-center   bg-gradient-to-b from-transparent via-base-100 to-base-100  '>
            <div className='flex flex-col lg:w-[80%] xl:w-[80%] container mx-auto'>
                <div className='flex w-full  items-center  h-12 bg-secondary   rounded-t-xl'>
                   {/* <span className='ml-4'>Mode:</span>
                    <select className="select select-sm  w-full max-w-xs mx-2">
                        <option>Generative AI</option>
                        <option>Sentiment Analysis</option>
                        <option>Aspect Based Sentiment Analysis</option>
                    </select>
                    */
                  
                    }
                </div>
                <div className='flex flex-col w-full  relative mb-4 shadow-xl '>
                  
                    <textarea ref={ref} value={message} onChange={handleChange} onKeyDown={handleKeyDown} placeholder="Enter message..."
                        className="placeholder-black pt-1  w-full resize-none  overflow-y custom-scrollbar bg-white  shadow-2xl  max-h-24 focus:outline-0 px-10 rounded-b-lg" />
                    <div onClick={()=>sendMessage(chat_id)} className={`btn ${mutation.isLoading ? "btn-disabled" : ""} btn-circle btn-sm bg-white border-none absolute hover:text-white right-5 bottom-3  text-primary `}>
                        <Icon size={21} icon={ic_send}></Icon>
                    </div>
                </div>
            </div>
        </div>
    )
}
)


export default ChatInput
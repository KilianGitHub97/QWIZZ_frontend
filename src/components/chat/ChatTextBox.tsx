import React,{SyntheticEvent, forwardRef, useRef, useState} from 'react'
import {ic_delete_outline_outline} from 'react-icons-kit/md/ic_delete_outline_outline'
import {ic_star_border} from 'react-icons-kit/md/ic_star_border'
import {ic_star_outline} from 'react-icons-kit/md/ic_star_outline'
import { useFavouriteMessageMutation, useLoadChatMessages } from '../../stores/chats/messages';
import { Icon } from 'react-icons-kit';
import { useDeleteMessageMutation } from '../../stores/chats/messages';
import { useQueryClient } from '@tanstack/react-query';
import { MESSAGE_TYPE } from '../../stores/chats/messages';

const ChatTextBox = ({text,message_id,chat_id, favourite, type}:{text:string, message_id:number,chat_id:number, favourite:boolean, type:MESSAGE_TYPE}) => {

    return(
        <div className='flex flex-col'>
          <div className="flex justify-between items-end ">
        <span className='font-bold text-lg'></span>
        {
          type != MESSAGE_TYPE.FAILED &&(
            <UtilityRibbon favourite={favourite} chat_id={chat_id} message_id={message_id}></UtilityRibbon>
          )
        }
            
          </div>
          <Text text={text}></Text>
        </div> 
      )
}

const UtilityRibbon = ({message_id, chat_id, favourite}:{message_id:number, chat_id:number, favourite:boolean}) =>{
    const [fav, setFavourite] = useState(favourite)
    const mutation = useFavouriteMessageMutation()
    const modalRef = useRef<HTMLDialogElement>(null)
  
    const createHighlight =async ()=>{
      try {
        let result = await mutation.mutateAsync({chat_id,message_id,state:true})
        setFavourite(result.favourite)
      } catch (error) {
       
      }
    }
  
    const removeHighlight =async()=>{
      try {
        let result = await mutation.mutateAsync({chat_id,message_id,state:false})
        setFavourite(result.favourite)
      } catch (error) {
      
      }
     
    }
    return (
      <div className='flex flex-row mt-4 items-center'>
        <DeleteMessagesModal ref={modalRef} message_id={message_id} chat_id={chat_id}></DeleteMessagesModal>
        <button  className=''>
          {fav?
          <Icon className='tooltip tooltip-primary text-yellow-500'data-tip="remove from favourites"  onClick={removeHighlight} size={28} icon={ic_star_outline}/>
          :<Icon className='tooltip tooltip-primary'data-tip="add to favourites" onClick={createHighlight} size={28} icon={ic_star_border}/>}
        </button>
        <button >
          {modalRef && <Icon className='tooltip tooltip-primary'data-tip="delete question-answer pair" onClick={()=>modalRef?.current?.showModal()} size={28} icon={ic_delete_outline_outline}/>}
        </button>
      </div>
     
    )
  }


  const Text = ({text}:{text:string})=>{
    return(
        text.split('\\n').map(i => 
            <div>{i}{"\n"}</div>
        )
    )
}


  interface Props {
    message_id: number,
    chat_id:string
  }

  const DeleteMessagesModal = forwardRef<HTMLDialogElement, Props>(({ message_id ,chat_id}:Props, ref) => {
    
    
    let queryClient = useQueryClient()
    let {mutateAsync, isError}= useDeleteMessageMutation()
    let messagesMutation = useLoadChatMessages()
   
    const handleSubmit= async(e:SyntheticEvent) =>{ 
        e.preventDefault()
        try {
            let s =await mutateAsync({message_id})
            console.log(s)
            ref?.current?.close()
            if(queryClient.getQueryData(["selectedChat"]) == chat_id){
              messagesMutation.mutate({chat_id})
            }
        } catch (error) {
            //After the error is caught, the error message is displayed
        }
       
     
    }

    
    

    return (
        <div>
            <dialog ref={ref} className="modal duration-0">
                <form onSubmit={handleSubmit} className="bg-base-100 text-black  modal-box ">
                    <button type='button' onClick={() => ref?.current?.close()} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    <h3 className="font-bold text-lg">Delete Message Pair!</h3>
                    <p className="py-4 w-full mx-auto ">
                      <p className='text-lg'>Do you want to delete the question and answer pair ?</p>
                      { isError && (<p className='text-error'>An error occured</p>)}
                        <div className='flex mt-6 w-full justify-end space-x-2'>
                            <button type="button" onClick={() => ref?.current?.close()} className='btn p-4 btn-ghost'>Cancel</button>
                            <button type="submit" className='btn p-4 btn-error hover:bg-red-600 hover:text-white'>Delete</button>
                        </div>
                    </p>
                </form>
            </dialog>
        
        </div>
    )

}
)


export default ChatTextBox
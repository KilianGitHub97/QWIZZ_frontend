import { Fragment, useState, forwardRef, SyntheticEvent } from 'react';
import { useDeleteChatMutation, useRenameChatMutation } from '../../../stores/chats/chats';
import { useParams } from 'react-router-dom';
import { useSelectedChatState } from '../../../stores/chats/chats';
import { useQueryClient } from '@tanstack/react-query';
import { setSelectedChatMutation } from '../../../stores/chats/chats';


const DeleteChatModal = forwardRef<HTMLDialogElement>(({ chat_id, name }, ref) => {
    
    const {project_id} = useParams()
    let queryClient = useQueryClient()
    const {mutateAsync, isLoading, isError,isSuccess} = useDeleteChatMutation()
    const {mutate} = setSelectedChatMutation()




    const handleSubmit= async(e:SyntheticEvent) =>{ 
        e.preventDefault()
        try {
            let s =await mutateAsync({chat_id})
            ref?.current?.close()
            if(queryClient.getQueryData(["selectedChat"]) == chat_id){
                mutate(null)
                queryClient.setQueryData(["chatMessages"], ()=>[])

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
                    <h3 className="font-bold text-lg">Delete Chat?</h3>
                    <p className="py-4 w-full mx-auto ">
                      <p className='text-lg'>Do you want to delete {name} ?</p>
                      {isError && (<p className='text-error'>An error occured</p>)}
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

export default DeleteChatModal
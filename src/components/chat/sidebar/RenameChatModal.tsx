import { Fragment, useState, forwardRef, SyntheticEvent } from 'react';
import { useRenameChatMutation } from '../../../stores/chats/chats';
import { useParams } from 'react-router-dom';

const RenameChatModal = forwardRef<HTMLDialogElement>(({ chat_id, name }, ref) => {
    const [inputName , setInputname] = useState(name)
    const {project_id} = useParams()
    const {mutateAsync,isError} = useRenameChatMutation()




    const handleSubmit= async(e:SyntheticEvent)=> { 
        e.preventDefault()
        let newName = inputName.trim();

        if(newName!=""){
            try {
                let s = await mutateAsync({project_id, newName,chat_id})
                ref?.current?.close()
            } catch (error) {
                //After the error is caught, the error message is displayed
            }
           
           
        }
    }

    
    

    return (
        <div>
            <dialog ref={ref} className="modal duration-0">
                <form onSubmit={handleSubmit} className="bg-base-100 text-black  modal-box ">
                    <button type='button' onClick={() => ref?.current?.close()} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    <h3 className="font-bold text-lg">Rename Chat!</h3>
                    <p className="py-4 w-full mx-auto ">
                        <input type="text" onChange={(e)=>setInputname(e.target.value)} placeholder="Type here" value={inputName} className="input input-bordered input-primary w-full  " />
                        {isError && (<p className='text-error'>An error occured</p>)}
                        <div className='flex mt-6 w-full justify-end space-x-2'>
                            <button type="button" onClick={() => ref?.current?.close()} className='btn p-4 btn-ghost'>Close</button>
                            <button type="submit" className='btn p-4 btn-accent'>Submit</button>
                        </div>
                    </p>
                </form>
            </dialog>
        
        </div>
    )

}
)


export default RenameChatModal
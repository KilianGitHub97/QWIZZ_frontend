import React, { useState } from 'react';
import Icon from 'react-icons-kit';
import {fileText} from 'react-icons-kit/icomoon/fileText'
import { updateProjectDescription } from '../../stores/projects/updateProjectDescription';

const updateDescriptionModal = ({id}: {id:number}) => {
    
    const modalRef = React.useRef<HTMLDialogElement>(null);

    const [projectDescription, setProjectDescription] = useState('');

    const updateProjectDescriptionMutation = updateProjectDescription();

    const closeDeleteModal = () => {
        modalRef.current?.close();
    }
    
    const handleUpdateProjectDescription = () => {

        if (projectDescription.split(' ').length < 2) {
            alert("Project Description must have at least 2 words!")
            return;
        }
        else {
           
            updateProjectDescriptionMutation.mutate({id: id, newDescription: projectDescription});
            updateProjectDescriptionMutation.reset();
            setProjectDescription('');
            closeDeleteModal();
        }
        
    }    

    return (
        <div>
            <button 
                onClick={() => modalRef.current?.showModal()} 
                className="btn btn-ghost btn-sm rounded-btn hover:bg-transparent"
            >
                <Icon icon={fileText} />
                Edit Description

            </button>
        
        <dialog ref={modalRef} id="delete_modal" className="modal duration-0">
            <form method="dialog" className="modal-box bg-base-100">
                <button
                    onClick={() => closeDeleteModal()}
                    className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-black"
                >
                    ✕
                </button>

                <h1 className="text-2xl font-bold text-black"> Project Description</h1>
                <p className="text-black font-thin">Type the new project description with at least 2 words below!</p>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Project Description</span>
                    </label>
                    <input
                            type="text"
                            placeholder="New project description with at least 2 words"
                            className="input input-bordered border border-primary"
                            value={projectDescription}
                            onChange={(e) => setProjectDescription(e.target.value)}
                    />
                </div>
                <div className="form-control mt-6">
                        <input
                            type="submit"
                            value="Edit"
                            className="btn btn-primary"
                            onClick={handleUpdateProjectDescription}
                        />
                </div>
            </form>
        </dialog>
        </div>
    );
}

export default updateDescriptionModal;

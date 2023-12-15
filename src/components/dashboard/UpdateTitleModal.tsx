import React, { useState } from 'react';
import Icon from 'react-icons-kit';
import {pen_1} from 'react-icons-kit/ikons/pen_1'
import { updateProjectTitle } from '../../stores/projects/updateProjectTitle';

const updateTitleModal = ({name, id}: {name:string, id:number}) => {
    
    const modalRef = React.useRef<HTMLDialogElement>(null);

    const [projectTitle, setProjectTitle] = useState('');

    const updateProjectTitleMutation = updateProjectTitle();

    

    const closeDeleteModal = () => {
        modalRef.current?.close();
    }
    const handleUpdateProjectTitle = () => {
        updateProjectTitleMutation.mutate({id: id, newTitle: projectTitle});
        updateProjectTitleMutation.reset();
        setProjectTitle('');
        closeDeleteModal();
    }    

    return (
        <div>
            <button 
                onClick={() => modalRef.current?.showModal()} 
                className="btn btn-ghost btn-sm rounded-btn hover:bg-transparent"
            >
                <Icon icon={pen_1} />
                Edit Title

            </button>
        
        <dialog ref={modalRef} id="delete_modal" className="modal duration-0">
            <form method="dialog" className="modal-box bg-base-100">
                <button
                    onClick={() => closeDeleteModal()}
                    className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-black"
                >
                    ✕
                </button>

                <h1 className="text-2xl font-bold text-black">Edit Project Title</h1>
                <p className="text-black font-thin">Type the new project title below to update the old project title "{name}"!</p>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Project Title</span>
                    </label>
                    <input
                            type="text"
                            placeholder="Edit Title"
                            className="input input-bordered border border-primary"
                            value={projectTitle}
                            onChange={(e) => setProjectTitle(e.target.value)}
                    />
                </div>
                <div className="form-control mt-6">
                        <input
                            type="submit"
                            value="Edit"
                            className="btn btn-primary"
                            onClick={handleUpdateProjectTitle}
                        />
                </div>
            </form>
        </dialog>
        </div>
    );
}

export default updateTitleModal;

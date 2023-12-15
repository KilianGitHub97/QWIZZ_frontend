import React, { useState } from 'react';
import { addProject } from '../../stores/projects/addProject';

const NewProjectModal = () => {

    const modalRef = React.useRef<HTMLDialogElement>(null);

    const [projectTitle, setProjectTitle] = useState('');
    const [projectDescription, setProjectDescription] = useState('');
    const [titleMissing, setTitleMissing] = useState(false);
    const [descriptionMissing, setDescriptionMissing] = useState(false);

    const addProjectMutation = addProject();

    const displayTitleMissingError = () => {
        return (
            <div className="text-red-500 text-xs mt-1 ml-1">
                Please enter a project title.
            </div>
        );
    };

    const displayDescriptionMissingError = () => {
        return (
            <div className="text-red-500 text-xs mt-1 ml-1">
                Please enter a project description with at least 2 words.
            </div>
        );
    };

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        // Validate the project title and description
        if (projectTitle.trim() === '') {
            setDescriptionMissing(false);
            setTitleMissing(true);
            return;
        }

        if (projectDescription.trim().split(' ').length < 2) {
            setTitleMissing(false);
            setDescriptionMissing(true);
            return;
        }

        // Reset the form values
        setProjectTitle('');
        setProjectDescription('');

        addProjectMutation.mutate({ name: projectTitle, description: projectDescription });

        // Close the modal
        closeModal();
    };

    function closeModal() {
        modalRef.current?.close();
        setTitleMissing(false);
        setDescriptionMissing(false);
    }

    return (

            <div>
                <button
                    className="btn btn-primary hover:shadow-xl"
                    onClick={() => modalRef?.current?.showModal()}
                >
                New Project
                </button>

                <dialog ref={modalRef} className="modal duration-0">
                
                <form method="dialog" className="modal-box bg-base-100">
                    <button
                        onClick={() => closeModal()}
                        className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-black"
                    >
                    ✕
                    </button>
                    
                    <h1 className="text-2xl font-bold text-black">Create a New Project</h1>
                    <p className="text-black font-thin">Please enter a project title and description.</p>
                    
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Project Title</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Project Title"
                            className="input input-bordered border border-primary"
                            value={projectTitle}
                            onChange={(e) => setProjectTitle(e.target.value)}
                        />
                        {titleMissing && displayTitleMissingError()}
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Project Description</span>
                        </label>
                        
                        <input
                            type="text"
                            placeholder="Project description with at least 2 words"
                            className="input input-bordered border border-primary"
                            value={projectDescription}
                            onChange={(e) => setProjectDescription(e.target.value)}
                        />
                        {descriptionMissing && displayDescriptionMissingError()}
                    </div>

                    <div className="form-control mt-6">
                        <input
                            type="submit"
                            value="Create Project"
                            className="btn btn-primary"
                            onClick={handleSubmit}
                        />
                    </div>

                </form>
                </dialog>
            </div>
    );
};

export default NewProjectModal;
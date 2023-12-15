import React, { useState } from 'react';
import { addNoteMutation } from '../../../../stores/notes/addNoteMutation';
import { useParams } from 'react-router-dom';

const NewNoteModal = () => {

    const projectIdParam = useParams();

    const project_id = Number(projectIdParam.project_id);

    const modalRef = React.useRef<HTMLDialogElement>(null);

    const [noteTitle, setNoteTitle] = useState('');
    const [titleMissing, setTitleMissing] = useState(false);

    const displayTitleMissingError = () => {
        return (
            <div className="text-red-500 text-xs mt-1 ml-1">
                Please enter a title for this note.
            </div>
        );
    };

    const addNote = addNoteMutation();
    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        // Validate the project title and description
        if (noteTitle.trim() === '') {
            setTitleMissing(true);
            return;
        }

        // Reset the form values
        setNoteTitle('');

        addNote.mutate({project_id: project_id, title: noteTitle});
        
        // Close the modal
        closeModal();
    };

    function closeModal() {
        modalRef.current?.close();
        setTitleMissing(false);
    }

    return (

            <div className='flex flex-col'>
                
                <button 
                    className="relative w-100 mx-4 mt-2 btn btn-primary btn-sm rounded-btn"
                    onClick={() => modalRef?.current?.showModal()}
                >
                    New Note
                </button>

                <dialog ref={modalRef} className="modal duration-0">
                
                <form method="dialog" className="modal-box bg-base-100">
                    <button
                        onClick={() => closeModal()}
                        className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-black"
                    >
                    ✕
                    </button>
                    
                    <h1 className="text-2xl font-bold text-black">Create a New Note</h1>
                    <p className="text-black font-thin">Please enter a title for this note.</p>
                    
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Title</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Title"
                            className="input input-bordered border border-primary text-black"
                            value={noteTitle}
                            onChange={(e) => setNoteTitle(e.target.value)}
                        />
                        {titleMissing && displayTitleMissingError()}
                    </div>

                    <div className="form-control mt-6">
                        <input
                            type="submit"
                            value="Create Note"
                            className="btn btn-primary"
                            onClick={handleSubmit}
                        />
                    </div>

                </form>
                </dialog>
            </div>
    );
};

export default NewNoteModal;
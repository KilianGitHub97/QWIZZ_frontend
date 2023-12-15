import React from 'react';
import Icon from 'react-icons-kit';
import { trash } from 'react-icons-kit/fa/trash'
import { currentOpenNoteState } from '../../../../stores/notes/currentOpenNoteState';
import { deleteNoteMutation } from '../../../../stores/notes/deleteNoteMutation';
import { notesOpenCloseModalMutation } from '../../../../stores/notes/notesOpenCloseModalMutation';

const DeleteNoteModal = () => {
    
    const modalRef = React.useRef<HTMLDialogElement>(null);

    const currentNote = currentOpenNoteState().data;

    const deleteNote = deleteNoteMutation();

    const notesOpenClose = notesOpenCloseModalMutation();


    const closeDeleteModal = () => {
        modalRef.current?.close();
    }
    const handleDeleteProject = () => {
       
        deleteNote.mutate(currentNote?.id);
        deleteNote.reset();
        notesOpenClose.mutate();
        closeDeleteModal();
    }    

    return (
        <div>
            <button 
                onClick={() => modalRef.current?.showModal()} 
                className="btn btn-error hover:bg-red-600"
            >
                <Icon icon={trash} />
                Delete
            </button>
        
        <dialog ref={modalRef} id="delete_modal" className="modal duration-0">
            <form method="dialog" className="modal-box duration-0 bg-base-100">
                <button
                    onClick={() => closeDeleteModal()}
                    className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-black"
                >
                    ✕
                </button>

                <h2 className="text-2xl font-bold text-black">Delete Note</h2>
                <p className="text-black font-thin">Are you sure you want to delete the note with name "{currentNote?.name}"?</p>

                <div className="card-actions mt-6 justify-end">
                    <button
                        className="btn btn-ghost"
                        onClick={() => closeDeleteModal()}
                    >
                        Cancel
                    </button>
                    <button
                        className="btn btn-error hover:bg-red-600"
                        onClick={() => handleDeleteProject()}
                    >
                        Delete
                    </button>
                </div>
            </form>
        </dialog>
        </div>
    );
}

export default DeleteNoteModal;

import React, { useState } from "react";
import { isNotesModalOpenState } from "../../../../stores/notes/isNotesModalOpenState";
import { notesOpenCloseModalMutation } from "../../../../stores/notes/notesOpenCloseModalMutation";
import { deactivateAllNotesMutation } from "../../../../stores/notes/deactivateAllNotesMutation";
import { currentOpenNoteState } from "../../../../stores/notes/currentOpenNoteState";
import { useParams } from "react-router-dom";
import { notesState } from "../../../../stores/notes/notesState";
import { updateContentMutation } from "../../../../stores/notes/updateContentMutation";
import DeleteNoteModal from "./DeleteNoteModal";
import { saveNoteMutation } from "../../../../stores/notes/saveNoteMutation";


const ProjectNotesModal = () => {

    const project_id_obj = useParams();
    const project_id = Number(project_id_obj.project_id);

    const currentOpenNote = currentOpenNoteState().data;

    const [currentContent, setCurrentContent] = useState();

    const isNotesModalOpen = isNotesModalOpenState().data;

    const updateCurrentNote = updateContentMutation();

    const openCloseMutation = notesOpenCloseModalMutation();

    const deactivateAllNotes = deactivateAllNotesMutation();

    const saveNote = saveNoteMutation();
    const saveNoteisLoading = saveNote.isLoading;

    const closeNotesModal = () => {
        openCloseMutation.mutate()
        deactivateAllNotes.mutate()
    }

    return (
        <>
            <div className="flex">
                
                <div className={`bg-white w-96 ${isNotesModalOpen ? 'block' : 'hidden'}`}>
                    <button 
                        onClick={() => closeNotesModal()} 
                        className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-black"
                    >
                        ✕
                    </button>

                    {/* Note Title */}
                    <h1 className='text-primary text-3xl font-bold ml-8 mt-8 drop-shadow-md'
                        style={{ maxWidth: '80%', wordBreak: 'break-all' }}
                    >
                        {currentOpenNote?.name}
                    </h1>

                    {/* Note Content */}
                    <div className="flex flex-col justify-center">
                        
                        {/* First Gray Stripe */}
                        <div className="w-5/6 bg-gray-300 h-0.5 mb-3 mt-5 rounded-full self-center mx-auto"></div>

                        {/* Input Field */}
                        <div
                            className="w-5/6 mt-2 text-left self-center mx-auto textarea textarea-primary"
                            contentEditable={true}
                            dangerouslySetInnerHTML={{ __html: currentOpenNote?.content || '<em>Type your message here</em>' }}
                            placeholder={"Write your notes here..."}
                            style={{ height: "60vh", overflowY: "auto", resize: "none" }}
                            onInput={(e) => {
                                const newContent = e.target.innerHTML;
                                updateCurrentNote.mutate({
                                  id: currentOpenNote?.id,
                                  content: newContent
                                });

                                // the updating of the currentOpenNote doesn't really work.
                                // This is why we have to use the currentContent varibale
                                // this is a workaround
                                setCurrentContent(newContent)
                            }}
                        ></div>

                        {/* Second Gray Stripe */}
                        <div className="w-5/6 bg-gray-300 h-0.5 mb-3 mt-5 rounded-full self-center mx-auto"></div>
                        
                        {/* Buttons */}
                        <div className="flex justify-center">
                            <div className="w-5/6 flex justify-between">
                                <DeleteNoteModal />
                                <button 
                                    className="btn btn-primary hover:shadow-xl"
                                    onClick={() => {saveNote.mutate(
                                        {
                                            id: currentOpenNote?.id,
                                            name: currentOpenNote?.name,
                                            content: currentContent,
                                            project_id: project_id
                                        })
                                    }}
                                >
                                    {saveNoteisLoading ? "Saving..." : "Save"}
                                </button>
                            </div>
                        </div>                       

                    </div>
                </div>      
            </div>  
        </>
    );
};

export default ProjectNotesModal;

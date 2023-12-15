import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { notesState } from '../../../../stores/notes/notesState'
import { isNotesModalOpenState } from '../../../../stores/notes/isNotesModalOpenState'
import { notesOpenCloseModalMutation } from '../../../../stores/notes/notesOpenCloseModalMutation'
import { isModalOpenState } from '../../../../stores/metadataModal/isModalOpenState'
import { openCloseModalMutation } from '../../../../stores/metadataModal/openCloseModalMutation'
import NotesEntry from './NotesEntry'
import { FilesSearchBar } from '../FilesSearchBar'
import { activateNoteMutation } from '../../../../stores/notes/activateNoteMutation'
import { deactivateAllNotesMutation } from '../../../../stores/notes/deactivateAllNotesMutation'
import { setCurrentNoteMutation } from '../../../../stores/notes/setCurrentNoteMutation'
import NewNoteModal from './NewNoteModal'


const ProjectNotes = () => {
    
    const {project_id} = useParams()

    const notes = notesState(project_id)?.data;

    const [searchString, setSearchString] = useState<string>("");
    const filteredNotes = notes?.filter((note) => {
        return note.name.toLowerCase().includes(searchString.toLowerCase());
    });

    const isNotesModalOpen = isNotesModalOpenState().data;
    const isDocumentModalOpen = isModalOpenState().data;

    const notesOpenCloseMutation = notesOpenCloseModalMutation();
    const documentOpenCloseMutation = openCloseModalMutation();

    const activateNote = activateNoteMutation();
    const deactivateAllNotes = deactivateAllNotesMutation();
    const setCurrentNote = setCurrentNoteMutation();

    const openNote = (id:number) => {

        console.log("open note")
        if (isDocumentModalOpen) {

            console.log("close document modal")
            documentOpenCloseMutation.mutate()

        }

        if (!isNotesModalOpen) {
            notesOpenCloseMutation.mutate()
        }

        deactivateAllNotes.mutate();
        activateNote.mutate(id);
        setCurrentNote.mutate(id);
        
    }

    return (

        <div className={`flex flex-col bg-gray-700 w-72 text-white text-xs  transition-all duration-200 ease-linear`}>

            <div className='flex px-4 py-4'>
                <h3 className='text-lg text-bold mt-2'>Notes</h3>
            </div>

            <FilesSearchBar setSearchString={setSearchString}/>

            <NewNoteModal />

            <div className="mt-5" />

            {filteredNotes?.map((note:any) => (
                <div onClick={() => {openNote(note.id)}}>
                    <NotesEntry 
                        name={note.name}
                        active={note.active}
                    />
                </div>
            ))}



            



        </div>
    )
}




export default ProjectNotes
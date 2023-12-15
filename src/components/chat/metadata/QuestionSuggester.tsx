import React from 'react';
import { isModalOpenState } from '../../../stores/metadataModal/isModalOpenState';
import { openCloseModalMutation } from '../../../stores/metadataModal/openCloseModalMutation';
import { metadataTypeState } from '../../../stores/metadataModal/metadataTypeState';
import GeneratedQuestionsModal from './GeneratedQuestionsModal';
import MetadataModal from './MetadataModal';


const ProjectNotesModal = () => {


    const isModalOpen = isModalOpenState().data;
    const metadataType = metadataTypeState().data;

    const openCloseMutation = openCloseModalMutation();

    return (
        <>
            <div className="flex  ">
                
                <div className={`bg-neutral w-96 h-screen overflow-y-auto ${isModalOpen ? 'block' : 'hidden'}`}>
                    <button 
                        onClick={() => openCloseMutation.mutate()} 
                        className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-white"
                    >
                        ✕
                    </button>
                    {/* Add the two components here!*/}
                    {/* It the type is metadata, render metadata*/}

                    {
                        metadataType === 'generatedQuestions' &&
                        <>
                            <GeneratedQuestionsModal />
                        </>
                        
                    }
                    
                    {
                        metadataType === 'metadata' &&
                        <>
                            <MetadataModal />
                        </>
                    }
                </div>  
            </div>
        </>
    );
};

export default ProjectNotesModal;

import React, { useState, ChangeEvent } from 'react';
import { Icon } from 'react-icons-kit';
import { file } from 'react-icons-kit/fa/file';
import {quill} from 'react-icons-kit/icomoon/quill'
import { changeClickedMutation } from '../../stores/filenames/changeClickedMutation';
import {threeVertical} from 'react-icons-kit/entypo/threeVertical'
import { openCloseModalMutation } from '../../stores/metadataModal/openCloseModalMutation';
import {ic_chrome_reader_mode_twotone} from 'react-icons-kit/md/ic_chrome_reader_mode_twotone'
import { isModalOpenState } from '../../stores/metadataModal/isModalOpenState';
import { updateMetadataMutation } from '../../stores/metadataModal/updateMetadataMutation';
import { isNotesModalOpenState } from '../../stores/notes/isNotesModalOpenState';
import { notesOpenCloseModalMutation } from '../../stores/notes/notesOpenCloseModalMutation';

const FileEntry = ({ fileID, clicked, filename }: { fileID: number, clicked: boolean, filename: string }) => {

    const changeClicked = changeClickedMutation();
    const [selected, setSelected] = useState(clicked);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        // when the checkbox is clicked, the clicked state is changed
        changeClicked.mutate(fileID);
        setSelected(!selected);
    }

    const isDocumentsModalOpen = isModalOpenState().data;
    const documentsOpenCloseMutation = openCloseModalMutation();
    const updateMetadata = updateMetadataMutation();

    const isNotesModalOpen = isNotesModalOpenState().data;
    const notesOpenCloseMutation = notesOpenCloseModalMutation();

    const openQAModal = () => {

        if (isNotesModalOpen) {
            notesOpenCloseMutation.mutate()
        }

        if (!isDocumentsModalOpen) {
            documentsOpenCloseMutation.mutate();
        }
        
        updateMetadata.mutate(
            {
                modalType:"generatedQuestions",
                document_id:fileID, 
                currentDocumentTitle:filename
            }
        );
    }

    const openBackgroundInfoModal = () => {

        if (isNotesModalOpen) {
            notesOpenCloseMutation.mutate()
        }

        if (!isDocumentsModalOpen) {
            documentsOpenCloseMutation.mutate();
        }

        updateMetadata.mutate(
            {
                modalType:"metadata",
                document_id: fileID,
                currentDocumentTitle: filename
            }
        );
    }
    

    return (
        <div className='flex flex-row  items-center space-x-2 hover:bg-neutral cursor-pointer p-2 group '>
                        
            <input
                defaultChecked={selected}
                onChange={handleChange} 
                type="checkbox" 
                className={`checkbox checkbox-xs checkbox-primary mr-3  ${selected==true ? "visible" : "invisible"} group-hover:visible`} 
            />
            <Icon
                size={18} 
                icon={file}
            ></Icon>

            <div className='flex flex-row w-full items-center justify-between hover:bg-neutral cursor-pointer group'>
                
            <div className='font-bold text-sm' style={{ maxWidth: '80%', wordBreak: 'break-all' }}>
                {filename}
            </div>
                <div className='flex '>
                <div className="dropdown dropdown-hover  dropdown-bottom dropdown-left   " >
                    <label 
                        tabIndex={0} 
                        className="btn border-transparent bg-transparent hover:bg-transparent hover:border-transparent -mt-5 -mb-5 -mr-5 -ml-5"
                    >
                            <Icon 
                                icon={threeVertical}
                                size={15} 
                                className="text-white pr-3 "
                            />
                            
                    </label>
                    <ul 
                        tabIndex={0} 
                        className="dropdown-content absolute z-[2] menu shadow bg-gray-700 rounded-box   w-64   "
                    >
                        <li className='relative  overflow-visible  w-60  ' >
                            <button 
                                className='bg-gray-700 hover:bg-neutral hover:text-white text-left text-sm font-medium rounded-md pr-20 '
                                onClick={() => {openQAModal()}}
                            >
                                <Icon icon={quill} size={16} className="mr-2 text-primary" />
                                <span className="whitespace-nowrap">Document Q&A</span>
                            </button>
                        </li>

                        <li className='relative overflow-visible  w-48  '>
                            <button 
                                className='bg-gray-700 hover:bg-neutral hover:text-white text-left text-sm font-medium rounded-md pr-20 w-60 '
                                onClick={() => {openBackgroundInfoModal()}}
                            >
                                <Icon icon={ic_chrome_reader_mode_twotone} size={16} className="mr-2 text-primary" />
                                <span className="whitespace-nowrap">Background Information</span>
                            </button>
                        </li>
                    </ul>
                    </div>
                    </div>
                </div>
        </div>
    )
}

export default FileEntry
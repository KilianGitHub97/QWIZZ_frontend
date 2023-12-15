import React, { useState } from 'react'
import { filenamesState } from '../../../stores/filenames/filenameState';
import { deleteListofFilenames } from '../../../stores/filenames/deleteListofFilenames';
import { useParams } from 'react-router-dom';
import { trash } from 'react-icons-kit/fa/trash'
import { Icon } from 'react-icons-kit';
import UploadModal from '../UploadModal';
import FileEntry from '../FileEntry';
import { FilesSearchBar } from './FilesSearchBar';
import {ic_error_outline_outline} from 'react-icons-kit/md/ic_error_outline_outline'
const SidebarFiles = () => {

    const { project_id } = useParams();
    const filenames = filenamesState(project_id).data;

    const [searchString, setSearchString] = useState<string>("");

    const deleteMutation = deleteListofFilenames();
    const isLoading = deleteMutation.isLoading;

    // filter the filenames based on the search string
    const filteredFilenames = filenames?.filter((filename) => {
        return filename.filename.toLowerCase().includes(searchString.toLowerCase());
    });



    function deleteFilenames() {
        deleteMutation.mutate();
    }
    return (
        <div className='flex flex-col '>

            <div className='flex px-4 py-4  justify-between'>
                <h3 className='text-lg text-bold mt-2'>Files</h3>
            </div>

            <FilesSearchBar setSearchString={setSearchString} />
            

            {/* <div className='flex flex-row  px-4 pt-4 mt-1 form-control'>
                <div className='text-bold mr-2 mt-1'>Select all</div>
                <input 
                    type="checkbox" 
                    disabled
                    className="toggle toggle-md toggle-primary" 
                />
  </div>*/}
            <hr className='border-[0.] mt-2 border-neutral mb-1'></hr>


            <div className='flex flex-row  justify-around'>
                <button
                    className={`btn btn-neutral btn-sm ${isLoading ? 'disabled' : ''}`}
                    onClick={deleteFilenames}
                    style={{ pointerEvents: isLoading ? 'none' : 'auto' }}
                >
                    {!isLoading && <Icon size={18} icon={trash} ></Icon>}
                    {isLoading && <Icon size={18} icon={trash} className='animate-spin'></Icon>}
                    Delete
                </button>
                <UploadModal></UploadModal>

            </div>

            {filenames && filenames.length > 5 && (
            <>
                <hr className='border-[0.] mt-2 border-neutral mb-1'></hr>
                <div className="bg-orange-100 rounded-lg p-4 m-2">
                    <div className="flex items-center">
                    <Icon size={20} icon={ic_error_outline_outline} className="mr-2 text-orange-500" />
                    <div className="text-orange-600">
                        You have uploaded more than 5 documents! For optimal system performance, you are advised to select a maximum of 5 documents at once.
                    </div>
                    </div>
                </div>
            </>
            
            )}

            <hr className='border-[0.] mt-1 border-neutral'></hr>
            <div className='flex flex-col py-2'>
                    {filteredFilenames?.map((clickedFile) =>
                        <FileEntry
                            key={clickedFile.fileID}
                            clicked={clickedFile.clicked}
                            filename={clickedFile.filename}
                            fileID={clickedFile.fileID}
                        />
                    )}
            </div>
        </div>
    )
}

export default SidebarFiles
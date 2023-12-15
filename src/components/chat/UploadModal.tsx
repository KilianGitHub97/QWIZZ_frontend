import React, { useState, ChangeEvent, SyntheticEvent, Fragment } from 'react';
import { ic_file_upload } from 'react-icons-kit/md/ic_file_upload'
import { Icon } from 'react-icons-kit';
import { filenamesState } from '../../stores/filenames/filenameState';
import { addFilenameAndPostToBackend } from '../../stores/filenames/addFilenameAndPostToBackend';


const Upload = ( {status} : {status: string} ) => {

    let message = '';

    switch (status) {
        case 'idle':
            message = 'Select a file to upload';
            break;
        case 'loading':
            message = 'Uploading file... Depending on the file size, this may take a long time due to preprocessing and vectorization.';
            break;
        case 'success':
            message = 'File uploaded successfully';
            break;
        case 'error':
            message = 'An error occurred while uploading the file. Close this window and try again.';
            break;
        default:
            break;
    }
    
    return (
        <div>
            
            {/* if the upload has started, the user is displayed a loader */}
            {
                status === "loading" &&
                <div className="mt-1">
                    <progress 
                        className="progress progress-primary w-full mt-5" >
                    </progress>
                    <div className="text-primary">
                        {message}
                    </div>
                </div>
            }

            {/* If an error occurs, the loader stops and the user is displayed further instructions */}
            {
                status === "error" &&
                <div className="mt-1 text-primary">
                    {message}
                </div>
            }
        </div>
    )
}

const UploadModal = () => {
    
    const modalRef = React.useRef<HTMLDialogElement>(null)

    const [file, setFile] = useState<File | null>(null);

    // mutation variables
    const namesMutation = addFilenameAndPostToBackend();
    const filenamesIsLoading = namesMutation.isLoading;
    const filenamesStatus = namesMutation.status;

    function handleClose(e:SyntheticEvent) { // press escape button to trigger this
        e.preventDefault()
        console.log('closing')
    }

    function closeModal() {
        modalRef.current?.close();
        namesMutation.reset();
    }

    const handleFileInputChange = (fileInput: ChangeEvent<HTMLInputElement>) => {
        const selectedFile = fileInput.target?.files?.[0];
        if (selectedFile) {
          setFile(selectedFile);
        } else {
          setFile(null); // Handle the case where selectedFile is undefined
        }
      };

    async function handleSubmit() {
        // Procedure to be followed when the submit button is pressed

        if (!file) {
            console.log('no file')
            return;
        }

        await namesMutation.mutateAsync(file);
    }
    
    return (
        <Fragment>
        <div>
            <button className='btn btn-sm btn-neutral' onClick={() => modalRef?.current?.showModal()} >

                <Icon size={18} icon={ic_file_upload} ></Icon>
                Upload
            </button>

            <dialog ref={modalRef} onSubmit={handleClose} id="my_modal_1" className="modal ">
                <form method="dialog" className="modal-box bg-base-100">
                    <button onClick={()=>modalRef.current?.close()} className="btn btn-sm text-black  btn-circle btn-ghost absolute right-2 top-2">✕</button>

                    { 
                        /* the user clicked on the UPLOAD button, the loading has not 
                        yet started and filenamesIsLoading is false. This means that 
                        !filenamesIsLoading is true and the upload component is displayed */ 
                    }
                    {!filenamesIsLoading && // if uploadStarted is false, the user must see the upload modal, 
                                       // upon clicking the upload button, the files are uploaded and processed.
                        <div>
                            <h3 className="font-bold text-lg text-black">Submit a file!</h3>
                           
                            <div className="modal-action flex flex-col w-full  ">
                                {/* if there is a button in form, it will close the modal */}
                                <span className='text-black w-full m-2'>Upload your interview</span>       
                                <input
                                    accept=" text/plain, application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                                    onChange={handleFileInputChange}
                                    type="file" 
                                    className="file-input file-input-bordered file-input-primary w-full  text-neutral"
                                    // multiple
                                />
                                 <span className='text-black my-2'>Max allowed file size is 2mb</span>  

                                
                            </div>
                          <div className="flex w-full justify-end">
                          <button  
                                    onClick={ handleSubmit }
                                    className={`btn btn-primary  ${file ? '' : 'opacity-50 cursor-not-allowed pointer-events-none'}`}
                                    //disabled={!file}
                                >
                                    Upload
                                </button>
                          </div>
                        </div>
                    }

                    { /* if the upload has started, the user is displayed the progress bar */ }
                    { filenamesIsLoading && <Upload status = {filenamesStatus} />}

                    { /* if the upload was successful, the upload window is closed automatically */ }
                    { filenamesStatus === "success" && ( <> { closeModal() } </>) }
                    
                </form>
            </dialog>
        </div>
        </Fragment>
    )
}

export default UploadModal

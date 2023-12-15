import React from 'react';
import { metadataState } from '../../../stores/metadataModal/metadataState';
import { currentDocumentTitleState } from '../../../stores/metadataModal/currentDocumentTitleState';

const MetadataModal = () => {

    const metadata = metadataState().data;
    const currentDocumentTitle = currentDocumentTitleState().data;


    return(
        <>
            <h1 className='text-primary text-3xl font-bold ml-8 mt-8 drop-shadow-md'
                style={{ maxWidth: '80%', wordBreak: 'break-all' }}
            >
                {currentDocumentTitle}
            </h1>
            <div className='mt-5 ml-8 mr-8 '>
                <div className="w-full">
                    <img src={metadata[0]} alt="Image" className="w-full max-w-sm rounded border bg-primary p-1 dark:border-neutral-700 dark:bg-neutral-800" />
                </div>
                <h3 className='text-white text-xl mt-5'>
                    What is this document about?
                </h3>
                <div className='w-full text-white'>
                    <br />
                    {metadata[1]}
                </div>
            </div>
            
        </>
    );
}

export default MetadataModal;

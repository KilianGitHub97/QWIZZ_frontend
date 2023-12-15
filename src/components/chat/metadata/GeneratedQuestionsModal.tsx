import React from "react";
import { generatedQuestionsState } from "../../../stores/metadataModal/generatedQuestionsState";
import { currentDocumentTitleState } from "../../../stores/metadataModal/currentDocumentTitleState";


const GeneratedQuestionsModal = () => {

    const generatedQuestions = generatedQuestionsState().data;
    const currentDocumentTitle = currentDocumentTitleState().data;

    return (
        <>
            <h1 className='text-primary text-3xl font-bold ml-8 mt-8 drop-shadow-md'
                style={{ maxWidth: '80%', wordBreak: 'break-all' }}
            >
                {currentDocumentTitle}
            </h1>

            <div className="flex justify-center overflow-y-auto h-4/5">

                <div className="w-5/6 mt-5">

                    {/* for all objects in metadata, render a collapse component */}

                    {generatedQuestions?.map((metadataObject) => 
                        <div className="collapse collapse-arrow bg-gray-700 mt-2">
                            <input type="radio" name="my-accordion-2" /> 
                            <div className="collapse-title text-lg font-medium text-white">
                                {metadataObject.question}
                            </div>
                            <div className="collapse-content text-white"> 
                                <p>{metadataObject.answer}</p>
                            </div>
                        </div>
                    )}

                </div>
            </div>
        </>
    );

}

export default GeneratedQuestionsModal;

import React from 'react'
import addProjectDescription from '../../assets/images/addProjectDescription.png';
import manageProjects from '../../assets/images/openChats.png';
import uploadedData from '../../assets/images/uploadedData.png';
import selectMultipleFiles from '../../assets/images/selectMultipleFiles.png';
import multipleChats from '../../assets/images/multipleChats.png';
import notes from '../../assets/images/Notes.png';
import qna from '../../assets/images/QandA.png';
import backgroundInfo from '../../assets/images/backgroundInfo.png';
import deleteQApair from '../../assets/images/deleteQApair.png';
import markMessage from '../../assets/images/markMessage.png';
import llmSettings from '../../assets/images/llmSettings.png';
import chatExport from '../../assets/images/chatExport.png';

const ShowCaseSection = () => {
    return (
        <div className=''>
            <div className=" bg-base-100 ">
                <div className='container mx-auto flex flex-col justify-center items-center w-full lg:flex-row'>
                    <div className="flex w-2/3 mt-10  ">
                        <div className="mockup-window border bg-base-300 mb-2">
                            
                            <div className="flex justify-center  bg-base-200"> <img src={addProjectDescription} className="w-full align center" /></div>
                        </div>
                    </div>

                    <div className="flex justify-center h-full  sm:w-full xs:w-full md:w-1/2">
                        <p className="py-6 pl-2 w-4/5 ">
                            <h3 className=' font-bold my-6 items-center flex'> 1. Create a New Project</h3>
                            Projects help you <span className="font-bold">organize</span> your work.
                            They provide you with a <span className="font-bold">dedicated</span> space to cluster related chats and organize your documents.
                            <span className="font-bold"> Add</span> a new project by clicking on the <span className="text-primary font-bold">New Project</span> button.
                        </p>
                    </div>
                </div>
            </div>
            <div className=" bg-gray-200 ">
                <div className='container mx-auto flex flex-col justify-center items-center w-full lg:flex-row'>
                    <div className="flex justify-center h-full sm:w-full xs:w-full md:w-1/2   place-items-center place-self-center">
                        <p className="py-6 pl-2 w-4/5 ">
                            <h3 className=' font-bold my-6 items-center flex'> 2. Manage Your Projects</h3>
                            The project overview displays all of your current projects.
                            Easily manage your projects by editing or deleting them, and gain
                            access by clicking the <span className="text-primary font-bold">Open</span> button.
                        </p>
                    </div>

                    <div className="flex h-fit  w-2/3 mt-10  place-items-center ">

                    <div className="mockup-window border bg-base-300 mb-2">
                            
                            <div className="flex justify-center  bg-base-200"> <img src={manageProjects} className="w-full align center" /></div>
                        </div>

                    </div>
                </div>
            </div>
            <div className=" bg-base-100 ">
                <div className='container mx-auto flex flex-col justify-center items-center w-full lg:flex-row'>
                    <div className="flex justify-center h-fit  w-2/3  mt-10  place-items-center">
                    <div className="mockup-window border bg-base-300 mb-2">
                            
                            <div className="flex justify-center  bg-base-200"> <img src={uploadedData} className="w-full align center" /></div>
                        </div>
                    </div>

                    <div className="flex justify-center h-full  sm:w-full xs:w-full md:w-1/2 place-items-center place-self-center">
                        <p className="py-6 pl-2 w-4/5 ">
                            <h3 className=' font-bold my-6 items-center flex '> 3. Upload your Interviews </h3>
                            Navigate to the <span className="text-primary font-bold">Documents</span> tab to access your uploaded files.
                            To add new files, simply click <span className="text-primary font-bold">Upload</span>.
                            For removal, choose the files and press <span className="text-primary font-bold">Delete</span>
                        </p>
                    </div>
                </div>
            </div>
            <div className=" bg-gray-200 ">
                <div className='container mx-auto flex flex-col justify-center items-center w-full lg:flex-row'>
                    <div className="flex justify-center h-full sm:w-full xs:w-full md:w-1/2  place-items-center place-self-center">
                        <p className="py-6 pl-2 w-4/5 ">
                            <h3 className=' font-bold my-6 items-center'> 4. Select the Knowledge Sources </h3>
                            <span className="text-primary font-bold"> Select</span> all relevant documents before asking your question.
                            The answer will relate to the selected documents.
                        </p>
                    </div>

                    <div className="flex  w-2/3 h-fit  mt-10  place-items-center">

                    <div className="mockup-window border bg-base-300 mb-2">
                            
                            <div className="flex justify-center  bg-base-200"> <img src={selectMultipleFiles} className="w-full align center" /></div>
                        </div>

                    </div>
                </div>
            </div>
            
            <div className=" bg-base-100 ">
                <div className='container mx-auto flex flex-col justify-center items-center w-full lg:flex-row'>


                    <div className="flex w-2/3 h-fit  mt-10  ">

                    <div className="mockup-window border bg-base-300 mb-2">
                            
                            <div className="flex justify-center  bg-base-200"> <img src={multipleChats} className="w-full align center" /></div>
                        </div>

                    </div>

                    <div className="flex justify-center h-full sm:w-full xs:w-full md:w-1/2   place-items-center place-self-center">
                        <p className="py-6 pl-2 w-4/5 ">
                            <h3 className=' font-bold my-6 items-center'> 5. Create a New Chat and Start Your Conversation</h3>
                            Within the <span className="text-primary  font-bold">Chats </span> tab,  you can categorize your project into separate
                            chats to keep discussions well-structured.
                            Every chat possesses its own memory,
                            guaranteeing accurate context and personalized interactions.
                            Chats are time-stamped upon creation,
                            and can be renamed using the three dots adjacent to the title.
                        </p>
                    </div>
                </div>
            </div>

            <div className=" bg-gray-200 ">
                <div className='container mx-auto flex flex-col justify-center items-center w-full lg:flex-row'>
                    <div className="flex justify-center h-full sm:w-full xs:w-full md:w-1/2  place-items-center place-self-center">
                        <p className="py-6 pl-2 w-4/5 ">
                            <h3 className=' font-bold my-6 items-center'> 6. Write Down Your Thoughts! </h3>
                            Click the <span className="text-primary font-bold"> Notes </span> icon in the icon bar on the left and open the notes section.
                            Clicking on a specific note opens up the editing modal on the right.
                            Don't forget to save your changes.
                        </p>
                    </div>

                    <div className="flex  w-2/3 h-fit  mt-10  place-items-center">

                    <div className="mockup-window border bg-base-300 mb-2">
                            
                            <div className="flex justify-center  bg-base-200"> <img src={notes} className="w-full align center" /></div>
                        </div>

                    </div>
                </div>
            </div>

            <div className=" bg-base-100 ">
                <div className='container mx-auto flex flex-col justify-center items-center w-full lg:flex-row'>


                    <div className="flex w-2/3 h-fit  mt-10  ">

                    <div className="mockup-window border bg-base-300 mb-2">
                            
                            <div className="flex justify-center  bg-base-200"> <img src={qna} className="w-full align center" /></div>
                        </div>

                    </div>

                    <div className="flex justify-center h-full sm:w-full xs:w-full md:w-1/2   place-items-center place-self-center">
                        <p className="py-6 pl-2 w-4/5 ">
                            <h3 className='font-bold my-6 items-center'>7. Familiarize Yourself with Your Interview</h3>
                            Select the <span className="text-primary font-bold">Document Q&A</span> option from the dropdown menu, accessible by clicking the three dots within the document upload modal. 
                            This feature will assist you in getting acquainted with the content of your uploaded documents. 
                            It provides you with AI-generated question-answer pairs designed to offer insights into the content of your uploaded documents.
                        </p>
                    </div>
                </div>
            </div>

            <div className=" bg-gray-200 ">
                <div className='container mx-auto flex flex-col justify-center items-center w-full lg:flex-row'>
                    <div className="flex justify-center h-full sm:w-full xs:w-full md:w-1/2  place-items-center place-self-center">
                        <p className="py-6 pl-2 w-4/5 ">
                        <h3 className='font-bold my-6 items-center'>8. Gain a Comprehensive Overview</h3>
                        Click the <span className="text-primary font-bold">Background Information</span> option in the dropdown menu, which can be accessed by clicking the three dots in the document upload modal.
                        This action will open a modal providing you with a more comprehensive overview of the document. You'll find a word cloud and an AI-generated summary of the entire document. 
                        </p>
                    </div>

                    <div className="flex  w-2/3 h-fit  mt-10  place-items-center">

                    <div className="mockup-window border bg-base-300 mb-2">
                            
                            <div className="flex justify-center  bg-base-200"> <img src={backgroundInfo} className="w-full align center" /></div>
                        </div>

                    </div>
                </div>
            </div>

            <div className=" bg-base-100 ">
                <div className='container mx-auto flex flex-col justify-center items-center w-full lg:flex-row'>


                    <div className="flex w-2/3 h-fit  mt-10  ">

                    <div className="mockup-window border bg-base-300 mb-2">
                            
                            <div className="flex justify-center  bg-base-200"> <img src={deleteQApair} className="w-full align center" /></div>
                        </div>

                    </div>

                    <div className="flex justify-center h-full sm:w-full xs:w-full md:w-1/2   place-items-center place-self-center">
                        <p className="py-6 pl-2 w-4/5 ">
                            <h3 className='font-bold my-6 items-center'>9. Modify Your Chat History</h3>
                            Click the <span className="text-primary font-bold">Trash Icon</span> located next to the chatbot's response.
                            This action will remove the question-answer pair from your chat's conversational history. 
                            This allows you to have direct control over your chat history and make adjustments to unsatisfactory responses.
                        </p>
                    </div>
                </div>
            </div>

            <div className=" bg-gray-200 ">
                <div className='container mx-auto flex flex-col justify-center items-center w-full lg:flex-row'>
                    <div className="flex justify-center h-full sm:w-full xs:w-full md:w-1/2  place-items-center place-self-center">
                        <p className="py-6 pl-2 w-4/5 ">
                            <h3 className='font-bold my-6 items-center'>10. Highlight Key Insights from Your Conversation</h3>
                            You have the option to <span className="text-primary font-bold">mark</span> pertinent responses from the chatbot with a star.
                            This is particularly beneficial because it allows you to easily identify and reference important information in your conversation.
                        </p>
                    </div>

                    <div className="flex  w-2/3 h-fit  mt-10  place-items-center">

                    <div className="mockup-window border bg-base-300 mb-2">
                            
                            <div className="flex justify-center  bg-base-200"> <img src={markMessage} className="w-full align center" /></div>
                        </div>

                    </div>
                </div>
            </div>

            <div className=" bg-base-100 ">
                <div className='container mx-auto flex flex-col justify-center items-center w-full lg:flex-row'>


                    <div className="flex w-2/3 h-fit  mt-10  ">

                    <div className="mockup-window border bg-base-300 mb-2">
                            
                            <div className="flex justify-center  bg-base-200"> <img src={llmSettings} className="w-full align center" /></div>
                        </div>

                    </div>

                    <div className="flex justify-center h-full sm:w-full xs:w-full md:w-1/2   place-items-center place-self-center">
                        <p className="py-6 pl-2 w-4/5 ">
                            <h3 className='font-bold my-6 items-center'>11. Personalize Your Responses</h3>
                            Access the <span className="text-primary font-bold">Settings</span> to tailor your responses to your preferences.
                            You have the flexibility to modify the language model, adjust the temperature, and define the answer length to meet your specific needs.
                        </p>
                    </div>
                </div>
            </div>

            <div className=" bg-gray-200 ">
                <div className='container mx-auto flex flex-col justify-center items-center w-full lg:flex-row'>
                    <div className="flex justify-center h-full sm:w-full xs:w-full md:w-1/2  place-items-center place-self-center">
                        <p className="py-6 pl-2 w-4/5 ">
                            <h3 className='font-bold my-6 items-center'>12. Export Your Conversations</h3>
                            Simply click on the <span className="text-primary font-bold">Export Icon</span> to save your chat as a PDF file.
                            This enables you to work offline and easily share your insights with others.
                        </p>
                    </div>

                    <div className="flex  w-2/3 h-fit  mt-10  place-items-center">

                    <div className="mockup-window border bg-base-300 mb-2">
                            
                            <div className="flex justify-center  bg-base-200"> <img src={chatExport} className="w-full align center" /></div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default ShowCaseSection
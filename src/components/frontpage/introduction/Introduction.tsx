import React,{useState}from 'react';
import addProjectDescription from '../../../assets/images/addProjectDescription.png';
import openChats from '../../../assets/images/openChats.png';
import uploadedData from '../../../assets/images/uploadedData.png';
import selectOneFile from '../../../assets/images/selectOneFile.png';
import selectMultipleFiles from '../../../assets/images/selectMultipleFiles.png';
import multipleChats from '../../../assets/images/multipleChats.png';
import notes from '../../../assets/images/Notes.png'
import qna from '../../../assets/images/QandA.png'
import backgroundInfo from '../../../assets/images/backgroundInfo.png'
import deleteQApair from '../../../assets/images/deleteQApair.png'
import markMessage from '../../../assets/images/markMessage.png'
import llmSettings from '../../../assets/images/llmSettings.png'
import chatExport from '../../../assets/images/chatExport.png'
import { 
    IntroductionItem1Text, 
    IntroductionItem2Text, 
    IntroductionItem3Text, 
    IntroductionItem4Text, 
    IntroductionItem5Text, 
    IntroductionItem6Text, 
    IntroductionItem7Text, 
    IntroductionItem8Text,
    IntroductionItem9Text,
    IntroductionItem10Text,
    IntroductionItem11Text,
    IntroductionItem12Text,
    IntroductionItem13Text 
} from './IntroductionExplanationTexts';
import { IntroductionExplanationSlide } from './IntroductionExplanationSlide';


// Introductory remarks:
// - This component is a carousel that displays the different features of the application.
// - The carousel is implemented using DaisyUI: https://daisyui.com/components/carousel/
// - Each individual slide is implemented using the ExplanationSlide component, which 
//   itself used a DaisyUI Divider: https://daisyui.com/components/divider/
// - The due to the highlighting of text in the slides, which must be implemented for each slide
//   individually, the main text on the slides are implemented as separate components.
//   These components are saved in the ExplanationTexts.tsx file.
const Introduction = () => {
    const [activeItem, setActiveItem] = useState<number|null>(null)


 
    return (
        <>
            <div className="flex items-center justify-center h-3/4 max-w-screen-lg mx-auto w-3/4">
                <div className="carousel w-full">
                    <div id="item1" className="carousel-item w-full">
                        <IntroductionExplanationSlide
                            sourceFile={addProjectDescription}
                            title={"Organise Your Work Around Projects"}
                            description={<IntroductionItem1Text />}
                        />
                    </div>

                    <div id="item2" className="carousel-item w-full">
                        <IntroductionExplanationSlide
                            sourceFile={openChats}
                            title={"Manage Your Projects"}
                            description={<IntroductionItem2Text />}
                        />
                    </div>

                    <div id="item3" className="carousel-item w-full">
                        <IntroductionExplanationSlide
                            sourceFile={uploadedData}
                            title={"All Your Project Files in One Place"}
                            description={<IntroductionItem3Text />}
                        />
                    </div>

                    <div id="item4" className="carousel-item w-full">

                        <IntroductionExplanationSlide
                            sourceFile={multipleChats}
                            title={"Organize Your Project in Multiple Chats"}
                            description={<IntroductionItem4Text />}
                        />

                    </div>

                    <div id="item5" className="carousel-item w-full">

                        <IntroductionExplanationSlide
                            sourceFile={selectOneFile}
                            title={"Prompt a File"}
                            description={<IntroductionItem5Text />}
                        />

                    </div>

                    <div id="item6" className="carousel-item w-full">

                        <IntroductionExplanationSlide
                            sourceFile={selectMultipleFiles}
                            title={"Prompt Multiple Files"}
                            description={<IntroductionItem6Text />}
                        />

                    </div>

                    <div id="item7" className="carousel-item w-full">

                        <IntroductionExplanationSlide
                            sourceFile={notes}
                            title={"Write Down Your Thoughts!"}
                            description={<IntroductionItem7Text />}
                        />

                    </div>

                    <div id="item8" className="carousel-item w-full">

                        <IntroductionExplanationSlide
                            sourceFile={qna}
                            title={"Familiarize Yourself with Your Interview"}
                            description={<IntroductionItem8Text />}
                        />

                    </div>

                    <div id="item9" className="carousel-item w-full">

                        <IntroductionExplanationSlide
                            sourceFile={backgroundInfo}
                            title={"Gain a Comprehensive Overview"}
                            description={<IntroductionItem9Text />}
                        />

                    </div>

                    <div id="item10" className="carousel-item w-full">

                        <IntroductionExplanationSlide
                            sourceFile={deleteQApair}
                            title={"Modify Your Chat History"}
                            description={<IntroductionItem10Text />}
                        />

                    </div>

                    <div id="item11" className="carousel-item w-full">

                        <IntroductionExplanationSlide
                            sourceFile={markMessage}
                            title={"Highlight Key Insights from Your Conversation"}
                            description={<IntroductionItem11Text />}
                        />

                    </div>

                    <div id="item12" className="carousel-item w-full">

                        <IntroductionExplanationSlide
                            sourceFile={llmSettings}
                            title={"Personalize Your Responses"}
                            description={<IntroductionItem12Text />}
                        />

                    </div>
                    
                    <div id="item13" className="carousel-item w-full">

                        <IntroductionExplanationSlide
                            sourceFile={chatExport}
                            title={"Export Your Conversations"}
                            description={<IntroductionItem13Text />}
                        />

                    </div>

                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1"  onClick={()=>setActiveItem(1)} className={`btn btn-xs ${activeItem===1?'bg-gray-400':""}`}>1</a>
                <a href="#item2"  onClick={()=>setActiveItem(2)} className={`btn btn-xs ${activeItem===2?'bg-gray-400':""}`}>2</a>
                <a href="#item3"  onClick={()=>setActiveItem(3)} className={`btn btn-xs ${activeItem===3?'bg-gray-400':""}`}>3</a>
                <a href="#item4"  onClick={()=>setActiveItem(4)} className={`btn btn-xs ${activeItem===4?'bg-gray-400':""}`}>4</a>
                <a href="#item5"  onClick={()=>setActiveItem(5)} className={`btn btn-xs ${activeItem===5?'bg-gray-400':""}`}>5</a>
                <a href="#item6"  onClick={()=>setActiveItem(6)} className={`btn btn-xs ${activeItem===6?'bg-gray-400':""}`}>6</a>
                <a href="#item7"  onClick={()=>setActiveItem(7)} className={`btn btn-xs ${activeItem===7?'bg-gray-400':""}`}>7</a>
                <a href="#item8"  onClick={()=>setActiveItem(8)} className={`btn btn-xs ${activeItem===8?'bg-gray-400':""}`}>8</a>
                <a href="#item9"  onClick={()=>setActiveItem(9)} className={`btn btn-xs ${activeItem===9?'bg-gray-400':""}`}>9</a>
                <a href="#item10"  onClick={()=>setActiveItem(10)} className={`btn btn-xs ${activeItem===10?'bg-gray-400':""}`}>10</a>
                <a href="#item11"  onClick={()=>setActiveItem(11)} className={`btn btn-xs ${activeItem===11?'bg-gray-400':""}`}>11</a>
                <a href="#item12"  onClick={()=>setActiveItem(12)} className={`btn btn-xs ${activeItem===12?'bg-gray-400':""}`}>12</a>
                <a href="#item13"  onClick={()=>setActiveItem(13)} className={`btn btn-xs ${activeItem===13?'bg-gray-400':""}`}>13</a>

                {/*<a href="#item7" className="btn btn-xs">7</a>*/}
            </div>
        </>

    )
}

export default Introduction;
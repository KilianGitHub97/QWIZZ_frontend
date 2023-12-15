import React from 'react';
import sentimentAnalysis from '../../../assets/images/sentimentAnalysis.png';
import interpretation from '../../../assets/images/interpretation.png';
import labeling from '../../../assets/images/labeling.png';
import { UsecasesItem1Text, UsecasesItem2Text, UsecasesItem3Text } from './UsecasesExplanationTexts';
import { UsecasesExplanationSlide } from './UsecasesExplanationSlide';


// Introductory remarks:
// - This component is a carousel that displays the different features of the application.
// - The carousel is implemented using DaisyUI: https://daisyui.com/components/carousel/
// - Each individual slide is implemented using the ExplanationSlide component, which 
//   itself used a DaisyUI Divider: https://daisyui.com/components/divider/
// - The due to the highlighting of text in the slides, which must be implemented for each slide
//   individually, the main text on the slides are implemented as separate components.
//   These components are saved in the ExplanationTexts.tsx file.
const Usecases = () => {

    return (
        <>
        <div className="flex items-center justify-center h-3/4 max-w-screen-lg mx-auto w-3/4">
            <div className="carousel w-full">

                <div id="item1" className="carousel-item w-full">
                    <UsecasesExplanationSlide 
                        sourceFile={sentimentAnalysis}
                        title={"Let the ChatBot do your Sentiment Analysis!"}
                        description={<UsecasesItem1Text />}
                    />
                </div>

                <div id="item2" className="carousel-item w-full">
                    
                    <UsecasesExplanationSlide 
                        sourceFile={interpretation}
                        title={"Interpretation becomes simple!"}
                        description={<UsecasesItem2Text />}
                    />
                </div>

                <div id="item3" className="carousel-item w-full">
                
                    <UsecasesExplanationSlide 
                        sourceFile={labeling}
                        title={"Labeling made easy!"}
                        description={<UsecasesItem3Text />}
                    />
                </div>
            </div>
        </div>
        <div className="flex justify-center w-full py-2 gap-2">
            <a href="#item1" className="btn btn-xs">1</a>
            <a href="#item2" className="btn btn-xs">2</a>
            <a href="#item3" className="btn btn-xs">3</a>
        </div>
        </>

    )
}

export default Usecases;
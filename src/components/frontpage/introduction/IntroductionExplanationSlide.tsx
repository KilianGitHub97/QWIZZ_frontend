import React from 'react';

export const IntroductionExplanationSlide = ({ sourceFile, title, description }: { sourceFile: any; title: string; description: React.ReactNode; }) => {

    return (
        <div className="flex flex-col w-full lg:flex-row">

            <div className="grid w-9/12 flex-grow place-items-center">
            <div className="mockup-window border bg-base-300 mb-2">
                            
                            <div className="flex justify-center  bg-base-200"> <img src={sourceFile} className="w-full align center" /></div>
                        </div>
            </div>

            <div className="divider lg:divider-horizontal "></div>

            <div className="grid w-3/12 flex-grow place-items-center">
                <div className="w-full align center">
                    <h1 className="text-3xl font-bold ">{title}</h1>
                    {description}
                </div>
            </div>

        </div>
    );

};

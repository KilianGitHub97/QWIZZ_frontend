import React from 'react';

export const UsecasesItem1Text = () => {
    return (
        <p className="py-6 hover:scale-105 transition-transform">
            Are you unsure about the <span className="text-primary">sentiment</span> of a certain interview passage?
            Let <span className="text-primary">Qwizz</span> do the work for you! <span className="text-primary">Enter</span> the passage
            along with a question related to its sentiment and let the chatbot do the work for you!

        </p>

    );
};

export const UsecasesItem2Text = () => {
    return (
        <p className="py-6 hover:scale-105 transition-transform">
            Do you have a hard time <span className="text-primary">interpreting</span> a certain interview passage?
            Let <span className="text-primary">Qwizz</span> do the work for you! Enter the passage along with a question
            related to its interpretation into the chatbot and let it do the work for you!
        </p>

    );
};

export const UsecasesItem3Text = () => {
    return (
        <p className="py-6 hover:scale-105 transition-transform">
            Not sure what to <span className="text-primary">label</span> a certain interview passage?
            Let <span className="text-primary">Qwizz</span> do the work for you! Enter the passage 
            into the chatbot and let it do the work for you!
        </p>

    );
};

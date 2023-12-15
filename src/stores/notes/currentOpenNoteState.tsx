import React from "react";
import { useQuery } from "@tanstack/react-query";

const initCurrentOpenNote = () => {
    return {
        id: 1.10001, 
        name: "empty", 
        content: "empty", 
        active: false
    }
}

export const currentOpenNoteState = () => useQuery({

    // This state is used to toggle the modal open and closed.
    // It is used for both the QuestionSuggester and the Metadata-Modal, as only either of them can be open at a time.
    // The state is initialized as false, as the modal is closed by default.
    
    queryKey: [
        'currentOpenNote',
    ],

    refetchOnWindowFocus: false,
    refetchOnMount: false,

    queryFn: () => initCurrentOpenNote(),

    onSuccess: () => {
        console.log("current note id state initialized")
    },
    onError: (error) => {
        console.error('An error occurred:', error);
    }
})
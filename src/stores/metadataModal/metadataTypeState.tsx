import { useQuery } from '@tanstack/react-query';

export const metadataTypeState = () => useQuery({

    // This state is used to toggle the modal open and closed.
    // It is used for both the QuestionSuggester and the Metadata-Modal, as only either of them can be open at a time.
    // The state is initialized as false, as the modal is closed by default.
    
    queryKey: [
        'metadataType',
    ],

    refetchOnWindowFocus: false,

    queryFn: () => 'generatedQuestions',

    onSuccess: () => {
        console.log("metadataType initialized")
    },
    onError: (error) => {
        console.error('An error occurred:', error);
    }
})
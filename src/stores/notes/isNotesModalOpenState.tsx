import { useQuery } from '@tanstack/react-query';

export const isNotesModalOpenState = () => useQuery({

    // This state is used to toggle the modal open and closed.
    // It is used for both the QuestionSuggester and the Metadata-Modal, as only either of them can be open at a time.
    // The state is initialized as false, as the modal is closed by default.
    
    queryKey: [
        'isNotesModalOpen',
    ],

    refetchOnWindowFocus: false,

    queryFn: () => false,

    onSuccess: () => {
        console.log("Notes State initialized")
    },
    onError: (error) => {
        console.error('An error occurred:', error);
    }
})
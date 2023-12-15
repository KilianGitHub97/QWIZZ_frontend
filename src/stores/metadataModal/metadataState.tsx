import { useQuery } from '@tanstack/react-query';
import { fetchMetadata } from './fetchMetadata';

export const metadataState = () => useQuery({

    // This state is used to toggle the modal open and closed.
    // It is used for both the QuestionSuggester and the Metadata-Modal, as only either of them can be open at a time.
    // The state is initialized as false, as the modal is closed by default.
    
    queryKey: [
        'metadata',
    ],

    refetchOnWindowFocus: false,
    refetchOnMount: false,

    queryFn: () => ["empty","empty"],

    onSuccess: () => {
        console.log("metadata initialized")
    },
    onError: (error) => {
        console.error('An error occurred:', error);
    }
})
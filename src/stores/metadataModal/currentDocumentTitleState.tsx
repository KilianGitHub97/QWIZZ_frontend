import { useQuery } from '@tanstack/react-query';

export const currentDocumentTitleState = () => useQuery({

    queryKey: [
        'currentDocumentTitle',
    ],

    refetchOnWindowFocus: false,
    refetchOnMount: false,

    queryFn: () => "none",

    onSuccess: () => {
        console.log("document title saved")
    },
    onError: (error) => {
        console.error('An error occurred:', error);
    }
})
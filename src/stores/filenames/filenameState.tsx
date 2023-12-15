
import { useQuery } from '@tanstack/react-query';
import { fetchDocuments } from './fetchDocuments';

export const filenamesState = (project_id:string|undefined) => useQuery({
    
    queryKey: [
        'filenames',
    ],
    refetchOnWindowFocus: false,
    //replace this part with Query to get chat messages
    queryFn: () => fetchDocuments(project_id),
    onSuccess: (data) => {

        console.log(data);
        console.log("filenames fetched");
    },
    onError: (error) => {
        console.error('An error occurred:', error);
    }
})





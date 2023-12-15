import { useQuery } from '@tanstack/react-query';
import { fetchNotes } from './fetchNotes';

export const notesState = (project_id:number) => useQuery({
    
    queryKey: [
        'notes',
    ],
    refetchOnWindowFocus: false,
    //replace this part with Query to get chat messages
    queryFn: () => fetchNotes(project_id),
    onSuccess: (data) => {

        console.log(data);
        console.log("filenames fetched");
    },
    onError: (error) => {
        console.error('An error occurred:', error);
    }
})
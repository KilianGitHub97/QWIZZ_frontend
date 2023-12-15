
import { useQuery } from '@tanstack/react-query';
import { fetchProjects } from './fetchProjects';

export const projectsState = () => useQuery({
    
    queryKey: [
        'projects'
    ],
    refetchOnWindowFocus: true,
    //replace this part with Query to get chat messages
    queryFn: () => fetchProjects(),
    onSuccess: (data) => {

       

    },
    onError: (error) => {
        console.error('An error occurred:', error);
    }
})

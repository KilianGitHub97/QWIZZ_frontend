import axios from 'axios';
import { useQueryClient, useMutation } from '@tanstack/react-query';
import { projectsState } from './projectsState';
import { partialUpdateProjectRequest } from './updateProjectDescription';

export const updateProjectTitle = () => {

    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: ({id, newTitle}: {id:number, newTitle:string}) => {

            // patch request to update the project title
            
            return partialUpdateProjectRequest({project_id:id, newTitle:newTitle});
        },
        onSuccess: (data:any) => {

            // First find the project by id in the projects array. Then update the project title
            queryClient.setQueryData(
                ['projects'], 
                (oldProjects) => {
                    // Find the project by ID in the projects array
                    const updatedProjects = oldProjects.map((project) => {
                    
                        if (project.id === data.id) {
                        // Update the project title
                        return { ...project, name: data.name };
                    }
                    
                    return project;
                    
                });
                return updatedProjects;
            });
        },
        onError: (error: any) => {
            console.log(error);
        }
    });

    return mutation;
}
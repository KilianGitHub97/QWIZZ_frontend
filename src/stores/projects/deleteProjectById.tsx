import { useQueryClient, useMutation } from '@tanstack/react-query';
import { projectsState } from './projectsState';
import axios from '../../config/axiosConfig';
import { API_ENDPOINTS } from '../../config/apiConfig';


export const deleteProjectById = () => {

    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: async({id}: {id:number}) => {

            // delete request goes here
            const response = await axios.delete(
                `${API_ENDPOINTS.deleteProject}${id}/`,
                {
                    withCredentials: true,
                },
            );
            
            return {response, id} ;
        },
        onSuccess: (data,{id}) => {
        
            // if the post was successful, delete the project with the given id from the list of projects
            queryClient.setQueryData(
                ['projects'], 
                (old: any) => old.filter((project: any) => project.id !== id),
            );
            
           
        },
        onError: (error, id) => {
            console.log(error);
        
        }
    });

    return mutation;
}
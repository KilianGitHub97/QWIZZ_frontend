import { useQueryClient, useMutation } from '@tanstack/react-query';
import { projectsState } from './projectsState';
import axios from '../../config/axiosConfig';
import { API_ENDPOINTS } from '../../config/apiConfig';


export const addProject = () => {

    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: async ({name, description}: {name:string, description:string}) => {
            //a user provides a filename and a project name and the project is created
            // then this new project is added to the list of projects

            const newProject = {
                name: name,
                description: description,
            };

            // the post goes here
            const response = await axios.post(
                `${API_ENDPOINTS.postProject}`,
                newProject,
                {
                    withCredentials: true,
                }
            );

           

            const id = response.data.id;

            return {name, description, id};
        },
        onSuccess: ({name, description, id}: {name:string, description:string, id:number}) => {
            
            const newProject = { 
                id: id,
                name: name,
                description: description,
                number_of_chats: 0,
                number_of_documents: 0,
            };

            // if the post was successful, add the filename to the list of uploaded files
            queryClient.setQueryData(['projects'], (old: any) => [...old, newProject]);

           
        },
        onError: (error) => {
            console.log(error);
        },
    });
    return mutation;
};
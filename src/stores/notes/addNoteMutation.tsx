import { useQueryClient, useMutation } from '@tanstack/react-query';
import axios from '../../config/axiosConfig';
import { API_ENDPOINTS } from '../../config/apiConfig';

export const addNoteMutation = () => {

    const queryClient = useQueryClient();

    const mutation = useMutation({
        
        mutationFn: async ({project_id, title}: {project_id:number, title:string}) => {
            
            // post the new note to the server and receive the id
            const response = await axios.post(
                API_ENDPOINTS.addNote,
                {
                    name: title,
                    content: "",
                    project: project_id
                
                },
                {
                    withCredentials: true,
                },

            )

            const id = response.data.id;
            
            return {id, title};

        },
        onSuccess: ({id, title}) => {

            // on success, the notes state is updated with the new note
            const notes = queryClient.getQueryData(['notes']);

            // create the new note
            const newNote = {
                id:id,
                name: title, 
                content: "", 
                active: false
            };

            // add the new note to the notes state
            queryClient.setQueryData(['notes'], [...notes, newNote]);
            
            console.log("note added")
        },
        onError: (error: any) => {
            console.error('An error occurred:', error);
        }
    });

    return mutation;
};

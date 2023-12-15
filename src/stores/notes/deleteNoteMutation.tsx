import { useQueryClient, useMutation } from '@tanstack/react-query';
import axios from '../../config/axiosConfig';
import { API_ENDPOINTS } from '../../config/apiConfig';

export const deleteNoteMutation = () => {

    const queryClient = useQueryClient();

    const mutation = useMutation({
        
        mutationFn: async (id: number) => {
            
            // here the post request to the server is made
            const response = axios.delete(
                API_ENDPOINTS.deleteNote + id + "/",
                {
                    withCredentials: true
                }
            )

            return id;

        },
        onSuccess: (id: number) => {
            
            // on success, the note is removed from the notes state
            const notes = queryClient.getQueryData(['notes']);

            // remove the note from the notes state
            queryClient.setQueryData(['notes'], notes?.filter((note) => note.id !== id));

            console.log("note deleted")
        },
        
        onError: (error: any) => {
            console.error('An error occurred:', error);
        }
    });

    return mutation;
};

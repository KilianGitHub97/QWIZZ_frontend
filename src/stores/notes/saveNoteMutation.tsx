import { useQueryClient, useMutation } from '@tanstack/react-query';
import axios from '../../config/axiosConfig';
import { API_ENDPOINTS } from '../../config/apiConfig';

export const saveNoteMutation = () => {

    const queryClient = useQueryClient();

    const mutation = useMutation({
        
        mutationFn: async ({id, name, content, project_id}: {id:number, name:string, content:string, project_id:number}) => {

            // save to backend
            const response = axios.patch(
                API_ENDPOINTS.updateNote + id + "/",
                {
                    name: name,
                    content: content,
                    project: project_id,
                },
                {
                    withCredentials: true,
                },
            )

            //timeout to simulate saving
            await new Promise(resolve => setTimeout(resolve, 1000));

            return id;

        },
        onSuccess: () => {
            console.log("sucessfully saved note to backend")
        },
        onError: (error: any) => {
            console.error('An error occurred:', error);
        }
    });

    return mutation;
};
import axios from "../../config/axiosConfig";
import { useQueryClient, useMutation } from '@tanstack/react-query';
import { projectsState } from './projectsState';
import { API_ENDPOINTS } from "../../config/apiConfig";

export const updateProjectDescription = () => {

    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: ({ id, newDescription }: { id: number, newDescription: string }) => {

            // patch request to update the project Description
            partialUpdateProjectRequest({project_id:id, newDescription:newDescription})
        
            return partialUpdateProjectRequest({project_id:id, newDescription:newDescription});
        },
        onSuccess: (data:any) => {
            // First find the project by id in the projects array. Then update the project Description
            queryClient.setQueryData(
                ['projects'],
                (oldProjects) => {
                    // Find the project by ID in the projects array
                    const updatedProjects = oldProjects.map((project) => {

                        if (project.id === data.id) {
                            // Update the project Description
                            return { ...project, description: data.description };
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

export const partialUpdateProjectRequest = async ({ project_id, newDescription, newTitle }: { project_id: number, newDescription?: string, newTitle?: string }) => {

    let body = {}
    if (newDescription) {
        body = {
            id: project_id,
            description: newDescription
        }
    } else {
        body = {
            id: project_id,
            name: newTitle
        }
    }



    const response = await axios.patch(`${API_ENDPOINTS.partialUpdateProject}${project_id}/`, body,
        {
            headers: {
                'Content-Type': 'application/json'
            },
            withCredentials: true
        }
    )
    return response.data

}
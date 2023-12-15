import axios from 'axios';
import { API_ENDPOINTS } from '../../config/apiConfig';

export const fetchDocuments = async (project_id:string|undefined) => {

    const response = await axios.get(
        `${API_ENDPOINTS.getDocuments}${project_id}/documents`,
        {
            withCredentials: true,
        }
    );

    const data = response.data.map((file: any) => {
        return {
            fileID: file.id,
            clicked: true,
            filename: file.name,
            project: file.project,
            user: file.user,
            file:file.file,
            doc__type: file.doc__type,
            description: file.description
        };
    });

    return data;
};

import { API_ENDPOINTS } from '../../config/apiConfig';
import axios from '../../config/axiosConfig';

export const fetchProjects = async () => {

    const response = await axios.get(
        `${API_ENDPOINTS.getProjects}`,
        {
            withCredentials: true,
        }
    );

    return response.data;

};

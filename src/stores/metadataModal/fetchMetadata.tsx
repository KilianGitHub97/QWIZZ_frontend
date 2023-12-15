import { API_ENDPOINTS } from '../../config/apiConfig';
import axios from '../../config/axiosConfig';

export const fetchMetadata = async (document_id:number) => {

    const response = await axios.get(
        `${API_ENDPOINTS.metadata + document_id + "/"}`,
        {
            withCredentials: true,
        }
    );

    // ["https://flagsapi.com/BE/flat/64.png", "Summary"]

    return response;
};
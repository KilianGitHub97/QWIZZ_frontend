import { API_ENDPOINTS } from '../../config/apiConfig';
import axios from '../../config/axiosConfig';

export const fetchGeneratedQuestions = async (document_id:number) => {
    
    // goes to e.g. http://localhost:8000/api/documents/1/qna/
    const response = await axios.get(
        API_ENDPOINTS.fetchQuestions + document_id + "/qna/",
        {
            withCredentials: true,
        },
    );

    // for every object in the response, unpack it and add it to the unpackedResponse array
    const unpackedResponse = [];

    for (let i = 0; i < response.data.length; i++) {
        const obj = response.data[i];
        
        // add the question and answer to the unpackedResponse array
        unpackedResponse.push({question: obj.question, answer: obj.answer});
    }

    return unpackedResponse;
};
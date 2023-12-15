import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query';
import axios from  '../config/axiosConfig'
import { API_ENDPOINTS } from '../config/apiConfig';


export const useProjectState = () => useQuery({
    queryKey: ['projectState'],
    refetchOnWindowFocus: false,
    queryFn:()=>[]
    
})

export const getProject=async(project_id:string|undefined)=>{
    const response = await axios.get(`${API_ENDPOINTS.getProject}${project_id}`,{withCredentials:true});
    return response.data
}
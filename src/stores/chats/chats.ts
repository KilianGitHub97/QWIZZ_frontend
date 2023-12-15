import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query';
import axios from '../../config/axiosConfig'
import { API_ENDPOINTS } from '../../config/apiConfig';



export type Chat = {
    id: string,
    name: string,
    project: number
}

export const useSelectedChatState = () => useQuery({
    queryKey: ['selectedChat'],
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    queryFn: () => null,
})
export const setSelectedChatMutation = () => {
    let queryClient = useQueryClient()
    const mutation = useMutation({
        mutationFn: (chat_id: string|null) => {
          
            return chat_id


        },
        onSuccess: (chat_id:any) => {
            queryClient.setQueryData(["selectedChat"], (old: any) => chat_id)



        },
        onError: (error: any) => {
            console.log(error)
        },
    })

    return mutation

}


export const useAllChatsState = (project_id: string | undefined) => useQuery({
    queryKey: ['allChatState'],
    refetchOnWindowFocus: false,
    queryFn: () => getAllChats(project_id),
})


export const useCreateChatMutation = () => {

    let queryClient = useQueryClient()
    const mutation = useMutation({

        mutationFn: async(project_id:string) => {
            //response from the POST request
            return createChatRequest(project_id)
        },
        onSuccess: (data:any) => {
            queryClient.setQueryData(['allChatState'], (old:any)=>[data,...old])
            queryClient.setQueryData(['selectedChat'], ()=>data.id)
            
        },
        onError: (error: any) => {

        },
    })

    return mutation

}

export const useRenameChatMutation = () =>{

    let queryClient = useQueryClient()
    const mutation = useMutation({

        mutationFn: async (mutationArgs: { project_id: string; newName: string,chat_id:string }) => {
            const { project_id, newName, chat_id } = mutationArgs;
          

            return renameChatRequest(project_id, newName, chat_id)
        },
        onSuccess: (data:any) => {
            queryClient.invalidateQueries(["allChatState"]); // Invalidate the query
            
        },
        onError: (error: any) => {

        },
    })

    return mutation

}

export const useDeleteChatMutation = () =>{

    let queryClient = useQueryClient()
    const mutation = useMutation({

        mutationFn: async (mutationArgs: { chat_id:string }) => {
            const { chat_id } = mutationArgs;
          

            return deleteChatRequest( chat_id)
        },
        onSuccess: (data:any) => {
        
            queryClient.invalidateQueries(["allChatState"]); // Invalidate the query
            
        },
        onError: (error: any) => {

        },
    })

    return mutation

}


const getAllChats = async (project_id: string | undefined) => {
    const response = await axios.get(`${API_ENDPOINTS.getChats}${project_id}/chats/`, { withCredentials: true });
    return response.data
}
const createChatRequest = async (project_id: string | undefined) => {


    const response = await axios.post(API_ENDPOINTS.createChat, {
        name:"newName",
        project:project_id
    },
        {
            headers: {
                'Content-Type': 'application/json'
            },
            withCredentials: true
        }
    )
    return response.data

}

const renameChatRequest = async (project_id: string | undefined, newName:string,chat_id:string) => {


    const response = await axios.patch(`${API_ENDPOINTS.renameChat}${chat_id}/`, {
        id:chat_id,
        name:newName,
        project:project_id
    },
        {
            headers: {
                'Content-Type': 'application/json'
            },
            withCredentials: true
        }
    )
    return response.data

}

const deleteChatRequest = async ( chat_id:string) => {

    const response = await axios.delete(`${API_ENDPOINTS.deleteChat}${chat_id}/`, 
        {
            headers: {
                'Content-Type': 'application/json'
            },
            withCredentials: true
        }
    )
    return response.data

}

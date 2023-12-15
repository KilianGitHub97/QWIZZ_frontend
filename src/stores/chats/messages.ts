import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query';
import axios from '../../config/axiosConfig'
import { API_ENDPOINTS } from '../../config/apiConfig';
import { clickedFilenames } from '../filenames/getClickedFiles';

export enum MESSAGE_TYPE {
    USER,
    LLM,
    FAILED,
    LOADING
}

export type Message = {
    id: number,
    content: string,
    msg_type: MESSAGE_TYPE,
    favourite: boolean,
    selected_docs: any
}

interface Document {
    id: number;
    name: string;
    file: string
}

type Settings = {
    LLM: string,
    temperature: number
    answerLength: string
}





//selected LLM from the settings popover initial state
export const useSelectedLLM = () => useQuery({
    queryKey: ['selectedLLM'],
    refetchOnWindowFocus: false,
    queryFn: () => "gpt-3.5-turbo-16k"
})


//chat messages cache
export const useMessagesState = () => useQuery({
    queryKey: ['chatMessages'],
    refetchOnWindowFocus: false,
    queryFn: () => []

})

export const useLLMTemperatureMutation = () => {

    let queryClient = useQueryClient()

    const mutation = useMutation({

        mutationFn: (temp: number) => {
            return temp
        },

        onSuccess: (temp: number) => {

            queryClient.setQueryData(['Temperature'], temp)
        },
        onError: (error) => {
            console.log(error);
        }
    })
    return mutation
}


//creating messages
export const useCreateMessages = () => {

    let queryClient = useQueryClient()


    const getClickedFiles = () => {

        // get the current filenames state
        const filenames = queryClient.getQueryData(['filenames']);

        // get the fileIDs of the clicked files
        const clickedFilenames = filenames.filter((file: any) => file.clicked).map((file: any) => file.fileID);

        return clickedFilenames;

    };

    const getClickedFilesArray = () => {

        // get the current filenames state
        const filenames = queryClient.getQueryData(['filenames']);

        // filter out the filenames that are clicked
        const clickedFilenames = filenames.filter((file: any) => file.clicked === true);

        return clickedFilenames;

    }

    const mutation = useMutation({
        //Send new message to the backend and update local state
        mutationFn: ({ message, chat_id }: { message: string, chat_id: string }) => {
            //get data for post request from the store
            const data = queryClient.getQueryData(["chatMessages"])
            let temp = queryClient.getQueryData(["Temperature"])
            let model = queryClient.getQueryData(["selectedLLM"])
            let length = queryClient.getQueryData(["AnswerLength"])

            const settings: Settings = {
                temperature: temp ? temp : 0.5, //default value is 0.5
                LLM: model ? model : "gpt-3.5-turbo-16k",  // default is gpt-3.5-turbo-16k
                answerLength: length ? length : "medium" //default is short
            }

            const maxId = data.reduce((max: number, obj: Message) => (obj.id > max ? obj.id : max), 0);
            const selected_files = getClickedFilesArray()

            //get files list 
            const convertedList: Document[] = selected_files.map((item: any) => {
                const { fileID, filename, file } = item;
                return { id: fileID, name: filename, file: file };
            });


            let message_user_Obj: Message = { id: maxId + 1, content: message, msg_type: MESSAGE_TYPE.USER, selected_docs: convertedList }
            let message_bot_Obj: Message = { id: maxId + 2, content: "Loading...", msg_type: MESSAGE_TYPE.LOADING, selected_docs: [] }


            //add the user message to the state 
            queryClient.setQueryData(['chatMessages'], (old: any) => [...old, message_user_Obj])
            //add loading message to the state
            queryClient.setQueryData(['chatMessages'], (old: any) => [...old, message_bot_Obj])

            //get keys of selected files
            const ids = getClickedFiles()

            //response from the POST request
            return postMessage(message, ids, chat_id, settings)


        },
        onSuccess: (newMessage: Message) => {

            queryClient.setQueryData(['chatMessages'], (old: any) => {
                //remove the LOADING message and replace it with the message received from the POST request
                old.pop()
                return [...old, newMessage]
            })

        },
        onError: (error: any) => {
            console.log(error)

            const data = queryClient.getQueryData(["chatMessages"])
            const maxId = data.reduce((max: number, obj: Message) => (obj.id > max ? obj.id : max), 0);

            queryClient.setQueryData(['chatMessages'], (old: any) => {
                //remove the LOADING message and replace it with the message received from the POST request
                old.pop()
                return [...old, { id: maxId, content: "Oops! Looks like something didn't quite work out as expected. Could you please give it another shot and perhaps try rephrasing your question? This should help me assist you better.", msg_type: MESSAGE_TYPE.FAILED }]
            })
        },
    })

    return mutation

}

//loads the messages of specific chat into the chat field component
export const useLoadChatMessages = () => {

    let queryClient = useQueryClient()

    const mutation = useMutation({
        mutationFn: ({ chat_id }: { chat_id: string | null }) => {

            queryClient.setQueryData(["selectedChat"], () => chat_id)
            //if chat is not selected do not get messages from the backend 
            if (chat_id == null) {
                return []
            }
            return getMessages(chat_id)
        },
        onSuccess: (data: any) => {

            queryClient.setQueryData(['chatMessages'], (old: any) => data)

        },
        onError: (error: any) => {

        },
    })

    return mutation
}


//changes the favourite state of a specific message
export const useFavouriteMessageMutation = () => {


    const mutation = useMutation({
        mutationFn: ({ chat_id, message_id, state }: { chat_id: number, message_id: number, state: boolean }) => {


            return changeMessageFavouriteStateRequest(chat_id, message_id, state)
        },
        onSuccess: (data: any) => {

        },
        onError: (data: any) => {

        },
    })

    return mutation
}

//deletes question and answer pair from a specific chat
export const useDeleteMessageMutation = () => {
    let queryClient = useQueryClient()

    const mutation = useMutation({

        mutationFn: ({ message_id }: { message_id: number }) => {

            return deleteQnAPairRequest(message_id)
        },
        onSuccess: (data: any) => {

        },
        onError: (data: any) => {

        },
    })

    return mutation

}




//Create a new message for a specific chat
const postMessage = async (content: string, keys: number[], chat_id: string, settings: Settings) => {

    const response = await axios.post(API_ENDPOINTS.postMessage, {

        content: content,
        ids: keys,
        chat_id: chat_id,
        settings: settings
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
//Get messages for specific chat
export const getMessages = async (chat_id: string | null) => {
    const response = await axios.get(API_ENDPOINTS.getMessages + `${chat_id}/messages/`, { withCredentials: true })
    return response.data
}
//changes the favourite state of a specific message 
export const changeMessageFavouriteStateRequest = async (chat_id: number, message_id: number, state: boolean) => {
    const response = await axios.patch(
        API_ENDPOINTS.patchMessage + `${message_id}/`, {
        chat: chat_id,
        favourite: state,
    },
        { withCredentials: true })
    return response.data
}

export const deleteQnAPairRequest = async (message_id: number) => {
    const response = await axios.delete(
        API_ENDPOINTS.deleteMessage + `${message_id}/`,
        { withCredentials: true })
    return response.data
}
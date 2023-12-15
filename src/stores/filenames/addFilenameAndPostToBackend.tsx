import { useQueryClient, useMutation } from '@tanstack/react-query';
import { API_ENDPOINTS } from '../../config/apiConfig';
import { filenamesState } from './filenameState';
import { useParams } from 'react-router-dom';
import axios from '../../config/axiosConfig';



export const addFilenameAndPostToBackend = () => {

    const queryClient = useQueryClient();

    const { project_id }  = useParams();
            
    const mutation = useMutation({
        //Send new message to the backend and update local state
        mutationFn: async (file: File) => {

            // 

            // this function is called when the upload button is clicked
            // it is responsible for sending the file to the backend
            // set the raw input from UploadModal to a FormData object
            const formData: FormData = new FormData();
            formData.append('file', file);
            formData.append('project_id', project_id);
            

            // here the file is sent to the backend and once the post was successful
            // the filename is returned and passed as a parameter to onSuccess
            // NOTE: .then() and .catch() are not used here because useMutation() 
            // handles the response and error itself. That is, by using .then() and .catch()
            // within mutationFn, the error would also be handled by mutationFn itself.
            // As a result, the error would not be passed to onError() and no matter what
            // the outcome of the post is, onSuccess() would always be called.
            const response = await axios.post(
                API_ENDPOINTS.postDocument, 
                formData,
                {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
                withCredentials: true,
                }
            );

            const response2 = await axios.post(
                API_ENDPOINTS.createDetails,
                {
                    doc_id: response.data.id
                },
                {
                    withCredentials: true,
                },
            )

            console.log(response.data.id);

            const fileID = response.data.id;

            // get the filename from the FormData object
            const fileMetaData = formData.get("file");
            const filename: string = fileMetaData.name;
            const fileURL:string = response.data.file

            return {fileID, filename,fileURL};
        },
        onSuccess: ({ fileID, filename,fileURL }: { fileID: number, filename: string ,fileURL:string}) => {
            // if the post was successful, the filename is stored in the list of uploaded files
            
            const newFilenameObject = { 
                fileID: fileID,
                clicked: true, 
                filename: filename,
                file:fileURL,
                project: project_id,
            };

            // if the post was successful, add the filename to the list of uploaded files
            queryClient.setQueryData(['filenames'], (old: any) => [...old, newFilenameObject]);



        },
        onError: (error: any) => {
            // An error happened!
            console.error('An error occurred:', error);
            console.log("fileupload NOT successful");
        },
    });

    return mutation;
};

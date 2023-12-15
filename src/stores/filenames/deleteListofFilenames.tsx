import { useQueryClient, useMutation } from '@tanstack/react-query';
import { API_ENDPOINTS } from '../../config/apiConfig';
import axios from '../../config/axiosConfig';


export const deleteListofFilenames = () => {

    const queryClient = useQueryClient();

    const getClickedFiles = () => {

        // get the current filenames state
        const filenames = queryClient.getQueryData(['filenames']);

        // get the fileIDs of the clicked files
        const clickedFilenames = filenames.filter((file: any) => file.clicked).map((file: any) => file.fileID);

        return clickedFilenames;

    };

    const mutation = useMutation({
        mutationFn: async() => {

            const ids = getClickedFiles();
            console.log(ids)

            const response = await axios.post(
                API_ENDPOINTS.deleteDocuments, 
                {
                    keys:ids,
                },
                {
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    withCredentials: true
                }
            );

            console.log(response);

            return ids;

        },
        onSuccess: (ids: Array<number>) => {

            // get the current filenames state
            const filenames = queryClient.getQueryData(['filenames']);

            // filter out the filenames that are clicked
            const newFilenames = filenames.filter((file: any) => !ids.includes(file.fileID));

            // update the filenames state
            queryClient.setQueryData(['filenames'], newFilenames);

            console.log("filenames deleted:", ids);
        },
        onError: (error) => {
            console.error('An error occurred:', error);
        }
    });

    return mutation;
};

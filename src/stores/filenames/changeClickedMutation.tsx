import { useQueryClient, useMutation } from '@tanstack/react-query';


export const changeClickedMutation = () => {

    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: async (fileID: number) => {
            // this function is called when the checkbox is clicked
            // the function updates the filenames state for the given filename
            // get the current filenames state
            const filenames = queryClient.getQueryData(['filenames']);

            // find the filename that was clicked
            const clickedFilename = filenames.find((file: any) => file.fileID === fileID);

            // toggle the clicked state
            clickedFilename.clicked = !clickedFilename.clicked;

            // update the filenames state
            queryClient.setQueryData(['filenames'], filenames);

            // return the filename
            return fileID;

        },
        onSuccess: (fileID: number) => {
           
        },
        onError: (error: any) => {
            console.error('An error occurred:', error);
        }
    });

    return mutation;
};

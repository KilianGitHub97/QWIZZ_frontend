import { useQueryClient, useMutation } from '@tanstack/react-query';


export const deactivateAllNotesMutation = () => {

    const queryClient = useQueryClient();

    const mutation = useMutation({
        
        mutationFn: async () => {
            // this function is called when the notes modal is closed
            // the function updates the .active state to false for all notes

            // get the current notes state
            const notes = queryClient.getQueryData(['notes']);

            // set all notes to inactive
            notes.forEach((note: any) => {
                note.active = false;
            });

            // update the notes state
            queryClient.setQueryData(['notes'], notes);

            // return the filename
            return;

        },
        onSuccess: () => {
            console.log("all notes deactivated")
            console.log(queryClient.getQueryData(['notes']))
        },
        onError: (error: any) => {
            console.error('An error occurred:', error);
        }
    });

    return mutation;
};
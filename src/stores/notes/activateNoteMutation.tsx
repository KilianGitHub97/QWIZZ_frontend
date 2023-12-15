import { useQueryClient, useMutation } from '@tanstack/react-query';


export const activateNoteMutation = () => {

    const queryClient = useQueryClient();

    const mutation = useMutation({
        
        mutationFn: async (id: number) => {
            // this function is called when a note is clicked
            // the function updates the .active state for the given note

            // get the current notes state
            const notes = queryClient.getQueryData(['notes']);

            // find the note that was clicked
            const activatedNote = notes.find((note: any) => note.id === id);            

            // toggle the .active state
            activatedNote.active = true;

            // update the notes state
            queryClient.setQueryData(['notes'], notes);

            // return the filename
            return id;

        },
        onSuccess: (fileID: number) => {
            console.log("Note activated")
            console.log(queryClient.getQueryData(['notes']))
        },
        onError: (error: any) => {
            console.error('An error occurred:', error);
        }
    });

    return mutation;
};

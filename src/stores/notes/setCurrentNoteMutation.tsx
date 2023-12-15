import { useQueryClient, useMutation } from '@tanstack/react-query';

export const setCurrentNoteMutation = () => {

    const queryClient = useQueryClient();

    const mutation = useMutation({
        
        mutationFn: async (id: number) => {
            // this function is called when a note is clicked
            // the function updates the currentOpenNoteId state for the given note

            // get the current notes from the notesState
            const notes = queryClient.getQueryData(['notes']);

            // find the note that was clicked
            const note = notes?.find((note) => note.id === id);

            // set the currentOpenNoteId state to the id of the note that was clicked
            queryClient.setQueryData(['currentOpenNote'], note);

            return id;

        },
        onSuccess: () => {
            console.log("currentOpenNote is set")
        },
        onError: (error: any) => {
            console.error('An error occurred:', error);
        }
    });

    return mutation;
};
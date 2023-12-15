import { useQueryClient, useMutation } from '@tanstack/react-query';


export const updateContentMutation = () => {

    const queryClient = useQueryClient();

    const mutation = useMutation({
        
        mutationFn: async ({id, content}: {id:number, content:string}) => {
            // this function is called when the notes modal is closed
            // the function updates the .active state to false for all notes

            // get the current notes state
            const notes = queryClient.getQueryData(['notes']);

            //find the note by its id
            const note = notes?.find((note) => note.id === id);

            // update the content
            note.content = content;

            // save the updated note
            queryClient.setQueryData(['notes'], notes);

            // return the filename
            return;

        },
        onSuccess: () => {
            console.log("note content updated")
        },
        onError: (error: any) => {
            console.error('An error occurred:', error);
        }
    });

    return mutation;
};
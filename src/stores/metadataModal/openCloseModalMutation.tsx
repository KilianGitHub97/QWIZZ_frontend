import { useQueryClient, useMutation } from '@tanstack/react-query';

export const openCloseModalMutation = () => {

    const queryClient = useQueryClient();

    const mutation = useMutation({

        mutationFn: () => {

            // source the data from the isModalOpen-State
            const isModalOpen = queryClient.getQueryData(['isModalOpen']);
            
            // save the opposite of the current state in the isModalOpen-State
            // i.e. true -> false, false -> true
            queryClient.setQueryData(['isModalOpen'], !isModalOpen);

        },

        onSuccess: () => {

            console.log("modal state changed")
           
        },

        onError: (error: any) => {

            console.error('An error occurred:', error);
        }
    });

    return mutation;
};

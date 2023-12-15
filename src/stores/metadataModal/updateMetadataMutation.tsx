import { useQueryClient, useMutation } from '@tanstack/react-query';
import { fetchGeneratedQuestions } from './fetchGeneratedQuestions';
import { fetchMetadata } from './fetchMetadata';

export const updateMetadataMutation = () => {

    const queryClient = useQueryClient();

    const mutation = useMutation({

        mutationFn: async ({modalType, document_id, currentDocumentTitle}: {modalType:string, document_id:number, currentDocumentTitle:string}) => {
            
            if (modalType === 'metadata') {
                const data = await fetchMetadata(document_id);
                return {data, modalType, currentDocumentTitle};
                

            } else if (modalType === 'generatedQuestions') {
                const data = await fetchGeneratedQuestions(document_id);
                return {data, modalType, currentDocumentTitle};

            } else {
                console.error('modalType not recognized');
            }
        },

        onSuccess: ({data, modalType, currentDocumentTitle}: {data:any, modalType:string, currentDocumentTitle:string}) => {
            
            // as the data is different for the two modals, we need to set the data based on the type
            if (modalType === 'metadata') {
                const new_data = [data.data.word_cloud, data.data.summary]
                queryClient.setQueryData(['metadata'], new_data);
                queryClient.setQueryData(['metadataType'], modalType);
                queryClient.setQueryData(['currentDocumentTitle'], currentDocumentTitle);
            }
            else if (modalType === 'generatedQuestions') {
                queryClient.setQueryData(['generatedQuestions'], data);
                queryClient.setQueryData(['metadataType'], modalType);
                queryClient.setQueryData(['currentDocumentTitle'], currentDocumentTitle);
            }

            console.log("modal data updated")
           
        },

        onError: (error: any) => {
            console.error('An error occurred:', error);
        }
    });

    return mutation;
};
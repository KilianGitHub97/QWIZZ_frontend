import { useQueryClient } from '@tanstack/react-query';
import { get } from 'axios';


export const clickedFilenames = () => {

    const queryClient = useQueryClient();
    
    const getClickedFiles = () => {

        // get the current filenames state
        const filenames = queryClient.getQueryData(['filenames']);

        // filter out the filenames that are clicked
        const clickedFilenames = filenames.filter((file: any) => file.clicked);

        return clickedFilenames;

    }

    return getClickedFiles;
}

import React from 'react';
import { search } from 'react-icons-kit/fa/search';
import { Icon } from 'react-icons-kit';

export const FilesSearchBar = ({setSearchString}: { setSearchString: (searchString: string) => void }) => {



    return (
        <div className='flex'>
            <div className="relative w-full mx-4 text-gray-white">
                <input 
                    className="input h-8  w-full  bg-neutral"
                    type="search" 
                    name="search" 
                    placeholder="Search" 
                    autoComplete={"off"} 
                    onChange={(e) => { setSearchString(e.target.value) }}
                />
                <Icon size={20} icon={search} className="absolute right-2 top-1.5 pointer-events-none" />
            </div>
        </div>
    );
};

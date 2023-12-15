import React from 'react';
import { Icon } from 'react-icons-kit';

import { search } from 'react-icons-kit/fa/search';

const SearchBar = ({setSearchString}: {setSearchString: (searchString: string) => void }) => {

    return (
        <div className="max-w-xl container mx-auto rounded-lg overflow-hidden md:max-w-2xl">
            <div className="md:flex">
                <div className="w-full p-3">
                    <div className="relative">
                        <Icon className="absolute fa fa-search text-gray-400 top-5 left-4" size={20} icon={search}></Icon>
                        <input 
                            type="text" 
                            className="bg-white h-14 w-full px-12 shadow-md rounded-lg  hover:cursor-text" 
                            name=""
                            onChange={(e) => {setSearchString(e.target.value)}}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchBar
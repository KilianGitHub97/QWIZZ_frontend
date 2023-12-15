import React from 'react'
import { Icon } from 'react-icons-kit'
import {heart} from 'react-icons-kit/entypo/heart'

const Section = () => {
    return (
        <div className='w-full flex flex-col bg-secondary text-center p-10' >
            <h2 className='w-full text-xl font-bold container mx-auto '>
            You will        
             <span style={{ color: '#E718EB' }}>
            <Icon size={64} icon={heart}/>
        </span>how easy it is!</h2>

        <div className="mockup-window border bg-base-300 container mx-auto mt-20">
            <div className="flex justify-center px-4 py-32 bg-base-200">Watch Video Tutorial!</div>
        </div>
        </div>
    )
}

export default Section
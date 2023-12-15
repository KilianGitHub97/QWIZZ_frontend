import React from 'react'
import Introduction from '../components/frontpage/introduction/Introduction'
import Header from '../components/dashboard/Header'
import {useNavigate} from 'react-router-dom';
import { useQueryClient } from '@tanstack/react-query';
import { Icon } from 'react-icons-kit'
import {ic_keyboard_backspace} from 'react-icons-kit/md/ic_keyboard_backspace'

const IntroductionPageLogged = () => {
    const navigate = useNavigate();
    const queryClient = useQueryClient()
    const project = queryClient.getQueryData(["projectState"])
    
    const goBack=()=>{
        project? navigate(`/project/${project.id}/`): navigate("/dashboard/")
      
    }
    
    return(
        <>
            <Header />
            <Introduction />
            <div className="flex justify-center">
                <button
                    className="bg-primary  text-white font-bold py-2 px-4 rounded-full hover:scale-105 transition-all duration-100 ease-linear max-w-screen-lg mx-auto "
                    onClick={() => {goBack()}}
                >
                    <Icon size={32} icon={ic_keyboard_backspace}/>
                  <span className='pl-3'>Back</span>
               
                </button>
            </div>
        </>
    )


}

export default IntroductionPageLogged;
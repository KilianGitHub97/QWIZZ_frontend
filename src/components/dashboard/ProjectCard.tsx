import React from 'react'
import DeleteProjectModal from './DeleteProjectModal'
import UpdateProjectTitle from './UpdateTitleModal'
import UpdateProjectDescription from './UpdateDescriptionModal'
import { useNavigate } from 'react-router-dom'

import Icon from 'react-icons-kit'
import {threeVertical} from 'react-icons-kit/entypo/threeVertical'


const ProjectCard = ({name, description, id, number_of_chats, number_of_documents, number_of_notes}: {name: string, description:string, id:number, number_of_chats:number, number_of_documents:number, number_of_notes:number}) => {
    
    const navigate = useNavigate();

    const navigateToProject = () => {
        navigate(`/project/${id}`);
    };


    return (
        <div className="card  bg-white hover:shadow-xl border">
            <div className="card-body">
                <div className="flex items-center justify-between">
                    <h2 className="card-title">{name}</h2>
                    <div className="dropdown dropdown-hover dropdown-end dropdown-top ">
                        <label tabIndex={0} className="btn border-transparent bg-transparent hover:bg-transparent hover:border-transparent pr-0 pl-5 ">
                            <Icon icon={threeVertical} />
                        </label>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box">
                            <li><DeleteProjectModal name={name} id={id} /></li>
                            <li><UpdateProjectTitle name={name} id={id} /></li>
                            <li><UpdateProjectDescription id={id} /></li>
                        </ul>
                    </div>

                </div>
                
                
                    
                <p>{description}</p>
                <div className='flex flex-wrap space-x-2'>
                        <div className="badge badge-accent">{number_of_chats} Chats</div>
                        <div className="badge badge-secondary">{number_of_documents} Files</div>
                        <div className="badge badge-info">{number_of_notes} Notes</div>
                        
                </div>
                <div className="card-actions justify-end">
                    <button 
                        className="btn btn-primary" 
                        onClick={navigateToProject}
                    >
                        Open
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard
import ProjectCard from './ProjectCard';
import SearchBar from './SearchBar';
import { projectsState } from '../../stores/projects/projectsState';
import NewProjectModal from './NewProjectModal';
import { useEffect, useState } from 'react';
import {info} from 'react-icons-kit/fa/info'
import Icon from 'react-icons-kit';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {

  // this page renders as follows:
  // 1. the projects are fetched from the server using useQuery **(const projects)**
  // 2. the projects are filtered based on the search string **(const filteredProjects)**
  // 3. the projects are paginated based on the current page **(const displayedProjects)**
  // 4. the projects are displayed

  // °°°°°°°°°°°°°°°°°°°°°°°°°°°°° 1. Fetch the project °°°°°°°°°°°°°°°°°°°°°°°°°°°°° //
  const projects = projectsState().data;

  // °°°°°°°°°°°°°°°°°°°°°°° 2. Filter based on searchString °°°°°°°°°°°°°°°°°°°°°°°° //
  // the searchString is set in the SearchBar component using child to parent communication
  const [searchString, setSearchString] = useState("")


  // filter the projects based on the search string
  // do not use this in a useEffect hook, the projects state automatically updates this list
  const filteredProjects = projects?.filter((project) => {
    return project.name.toLowerCase().includes(searchString.toLowerCase())
  })

  // °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°° 3. Paginate °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°° //
  const [currentPage, setCurrentPage] = useState(1);
  const [maxPage, setMaxPage] = useState(Math.ceil((filteredProjects?.length ?? 0) / 6));

  // get only the projects that should be displayed on the current page i.e. 6 projects max
  const displayedProjects = filteredProjects?.slice((currentPage - 1) * 6, currentPage * 6);

  const navigate = useNavigate();
  
  const setMinPage = () => {
    if (currentPage > 1) {
      // the user cannot go below page 1
      setCurrentPage(currentPage - 1);
    }
  }

  const setNextPage = () => {

    // calculate the largest page number
    // this must be done before the if statement, otherwise the user will have to 
    // click twice to get to the last page
    const largestPage = Math.ceil((filteredProjects?.length ?? 0) / 6);
    setMaxPage(largestPage);

    if (currentPage < largestPage) {
      // the user cannot go above the largest page number
      setCurrentPage(currentPage + 1);
    }
  }


  return (
    <div className='flex flex-wrap h-screen bg-base-100 max-w-screen-lg mx-auto'>
      <div className='flex w-full  mx-auto container justify-between items-center'>
        <div className='font-bold text-2xl text-primary'>Your Projects</div>
          <NewProjectModal />
      </div>
      <SearchBar setSearchString={setSearchString}></SearchBar>
      <div className=' mx-auto container grid gap-4 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
        {displayedProjects?.map((project) => (
          <ProjectCard 
            name={project.name}
            description={project.description}
            id={project.id}
            number_of_chats={project.number_of_chats}
            number_of_documents={project.number_of_documents}
            number_of_notes={project.number_of_notes}  
          />
        ))}
      </div>
      <div className="join w-full justify-center mt-4 mb-2">
        
        <button 
          className="join-item btn btn-ghost" 
          onClick={setMinPage}>
            «
        </button>
        
        <button
          className="join-item btn btn-ghost"
        >
          {currentPage}
        </button>
         
        <button 
          className="join-item btn btn-ghost"
          onClick={setNextPage}
        >
          »
        </button>

      </div>
    </div>
  );
};

export default Dashboard;

import React,{useRef,ReactNode,useEffect} from 'react'
import SideBar from '../components/chat/SideBar';
import NavBar from '../components/chat/NavBar';
import ChatField from '../components/chat/ChatField';
import ChatInput from '../components/chat/ChatInput';
import QuestionSuggester from '../components/chat/metadata/QuestionSuggester';
import ProjectNotes from '../components/chat/sidebar/projectNotes/ProjectNotes';
import NotesModal from '../components/chat/sidebar/projectNotes/NotesModal';


const chat = () => {
   
    const chatBoxRef = useRef<HTMLDivElement>(null)

    return (
        <div className='flex w-full h-screen relative'>
            <SideBar />
            <main className='flex flex-col   w-full'>
                <NavBar />
                <ChatField ref={chatBoxRef} />
                <ChatInput ref={chatBoxRef} ></ChatInput>
            </main>
            <QuestionSuggester />
            <NotesModal />


        </div>

    )
}

export default chat
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();

    return (
        <div className="navbar bg-base-100 flex justify-evenly">

            <Dropdown />

            <div className="">
                <a
                    className="text-primary font-bold cursor-pointer normal-case text-3xl ml-4"
                    onClick={() => { navigate('/'); }}
                >Qwizz</a>
            </div>
            <div className="navbar-center xs:hidden sm:hidden md:block lg:block hidden">
                <ul className='flex space-x-4'>
                    <li
                        className='btn btn-ghost btn-xs sm:btn-sm md:btn-sm'
                        onClick={() => { navigate('/introduction'); }}
                    ><a href='#'>How it works</a></li>
                   {/* <li
                        className='btn btn-ghost btn-xs sm:btn-sm md:btn-sm'
                        onClick={() => { navigate('/usecases'); }}
                    ><a href='#'>Use cases</a></li> */}
{/*
                    <li
                        className='btn btn-ghost btn-xs sm:btn-sm md:btn-sm'
                        onClick={() => { navigate('/'); }}

    ><a href='#'>Features</a></li>*/}
                </ul>

            </div>
            <div className="navbar-end mr-2 ">
                <div className=' space-x-4 hidden xs:hidden sm:hidden md:block lg:block '>

                    <div
                        className="btn btn-xs  md:btn-md  btn-outline hover:shadow-md"
                        onClick={() => { navigate('/login'); }}
                    >Login</div>
                    <div
                        className="btn btn-xs  md:btn-md  btn-accent hover:shadow-md"
                        onClick={() => { navigate('/register'); }}
                    >Start free trial</div>
                </div>
            </div>
        </div>
    )
}

const Dropdown = () => {

    const navigate = useNavigate();

    return (
        <div className="dropdown xs:block sm:block md:hidden lg:hidden ">
            <label tabIndex={0} className="btn btn-ghost rounded-xl">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <li onClick={() => { navigate("/introduction") }}><a>How it works</a></li>
                <li onClick={() => { navigate("/usecases") }}><a>Use cases</a></li>
                {/* <li onClick={() => { navigate("/features") }}><a>Features</a></li> */}
                <li onClick={() => { navigate("/login") }}><a>Login</a></li>
                <li onClick={() => { navigate("/register") }}><a>Registration</a></li>
            </ul>
        </div>
    )
}





export default Navbar


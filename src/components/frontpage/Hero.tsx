import React from 'react'
import { useNavigate } from 'react-router-dom'
import backgroundPencil from '../../assets/images/backgroundPencil.png';

const Hero = () => {
    const navigate = useNavigate();
    
    return (
        <div className="hero h-fit mt-20 p-20 bg-base-100" >
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="" className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Welcome to Qwizz</h1>
                    <p className="py-6 text-2xl">This intelligent bot is here to assist you in exploring and gaining insights from your data.
                    With Qwizz, you can ask questions, make data requests,
                    and receive meaningful responses in a conversational manner. Get ready to harness the potential of your data like never before. Qwizz is eager to assist you on your data exploration journey. Let's dive in and unlock the insights that lie within your data!</p>
                    <button 
                        className="btn  btn-primary text-white"
                        onClick={ () => { navigate("/register") } }
                    >Get Started</button>
                </div>
            </div>
        </div>
    )
}

export default Hero
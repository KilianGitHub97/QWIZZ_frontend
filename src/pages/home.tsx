import React from 'react'
import Navbar from '../components/frontpage/Navbar'
import Hero from '../components/frontpage/Hero'
import Section from '../components/frontpage/Section'
import ShowCaseSection from '../components/frontpage/ShowCaseSection'
import { useUserState } from '../stores/auth/Auth'
import Footer from '../components/base/Footer'
import Register from '../components/frontpage/Register';
const Home = () => {
  const {data} = useUserState()
  console.log(data)
  return (
    <div className='flex flex-col bg-base-100 h-screen '>
    <div className='container mx-auto'>
      <Navbar></Navbar>
      <Hero></Hero>
     
    </div>
    <Section></Section>
    <ShowCaseSection></ShowCaseSection>
    <div className="container mx-auto w-full mt-20">
      <h3 className='text-center text-xl font-bold '>Please register to begin chating to your data!</h3>
     <Register></Register>
    </div>
    <Footer></Footer>
    
    
    </div>
  )
}

export default Home

import React, { useState } from 'react'
import useFormData from '../hooks/useFormData';
import { registerMutation } from '../stores/auth/Auth';
import Navbar from '../components/frontpage/Navbar'
import Register from '../components/frontpage/Register';

const register = () => {
 
    return (
       <div>
        <Navbar></Navbar>
        <Register></Register>
       </div>
    )
}


export default register
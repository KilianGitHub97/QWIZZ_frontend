
import React,{useState} from 'react';
import { API_ENDPOINTS } from '../../config/apiConfig';
import { useNavigate } from 'react-router-dom';
import { loginMutation } from '../../stores/auth/Auth';

const login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const mutation = loginMutation();  


const handleSubmit=async(email:string,password:string)=>{
 
    mutation.mutate({email, password})
}
    return (

        <div className="relative flex flex-col justify-center h-screen overflow-hidden bg-base-100">
            <div className="w-full p-6 m-auto bg-white rounded-md  lg:max-w-lg shadow-xl">
                <h1 className="text-3xl font-semibold text-center text-primary">Qwizz</h1>
                <form className="space-y-4">
                    <div>
                        <label className="label">
                            <span className="text-base label-text">Email</span>
                        </label>
                        <input onChange={(e)=>setEmail(e.target.value)} type="text" placeholder="Email Address" className="w-full input input-bordered input-primary" />
                    </div>
                    <div>
                        <label className="label">
                            <span className="text-base label-text">Password</span>
                        </label>
                        <input onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Enter Password"
                            className="w-full input input-bordered input-primary" />
                    </div>
            
                    {mutation.isError && <p className='text-error'>{mutation.error.response.data.data}</p>}
                    <div>
                        <button type='button' onClick={()=>handleSubmit(email,password)} className="btn btn-primary w-full">Login</button>
                        <div className='flex justify-center mt-2'>
                            Not a user?
                            <a href="register/" className="pl-1 text-gray-600 hover:underline hover:text-blue-600">Create an account</a>
                        </div>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default login;
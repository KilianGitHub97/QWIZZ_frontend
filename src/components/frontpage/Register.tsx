
import React, { useState } from 'react'
import useFormData from '../../hooks/useFormData';
import { registerMutation } from '../../stores/auth/Auth';

const register = () => {
    const [formData, errors, handleChange, setError, resetFormData] = useFormData({
        username: '',
        email: '',
        password: '',
        re_password: '',
    });
    const mutation = registerMutation()


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();


        const is_valid_password = validatePassword(formData.password, formData.re_password)
        if (is_valid_password) {
            console.log("send request")
            let email = formData.email;
            let password = formData.password;
            let re_password = formData.re_password;
            let username = formData.username
            mutation.mutate({ email, password, re_password, username })
        }


        // Reset the form data
        //resetFormData();
    };

    const validatePassword = (password: string, re_password: String) => {
        // Define the validation criteria
        const minLength = 8;
        const uppercaseRegex = /[A-Z]/;
        const lowercaseRegex = /[a-z]/;
        const digitRegex = /[0-9]/;

        // Perform the validation checks
        if (password.length < minLength) {
            setError('password', 'Password must be at least 8 characters long.');
            return;
        }
        if (!uppercaseRegex.test(password)) {
            setError('password', "Password must contain at least one uppercase letter.");
            return;
        }

        if (!lowercaseRegex.test(password)) {
            setError('password', "Password must contain at least one lowercase letter.");
            return;
        }

        if (!digitRegex.test(password)) {

            setError('password', "Password must contain at least one digit.");
            return;
        }
        if (password != re_password) {
            setError('password', "Passwords do not match");
            return;
        }
        return true
    }



    return (
        <div className="flex flex-col justify-center h-screen overflow-hidden bg-base-100">
        <div className="w-full p-6 m-auto bg-white rounded-md lg:max-w-lg shadow-xl">
            <h1 className="text-3xl font-semibold text-center text-primary">Qwizz</h1>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="email" className="label ">Your email</label>
                                <input value={formData.email} onChange={handleChange} type="email" name="email" id="email" className="w-full input input-bordered input-primary  " placeholder="name@company.com" required />
                            </div>

                            <div>
                                <label htmlFor="username" className="label  ">Username</label>
                                <input value={formData.username} onChange={handleChange} type="text" name="username" id="username" className="w-full input input-bordered input-primary " placeholder="name@company.com" required />
                            </div>
                            <div>
                                <label htmlFor="password" className="label ">Password</label>
                                <input value={formData.password} onChange={handleChange} type="password" name="password" id="password" placeholder="••••••••" className="w-full input input-bordered input-primary   " required />
                            </div>
                            {errors.password && <p className='text-error'>{errors.password}</p>}
                            <div>
                                <label htmlFor="confirm-password" className="label  ">Confirm password</label>
                                <input value={formData.re_password} onChange={handleChange} type="password" name="re_password" id="confirm-password" placeholder="••••••••" className="w-full input input-bordered input-primary" required />
                            </div>
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required />
                                </div>
                                <div className="ml-3 text-sm">
                                    <label htmlFor="terms" className="font-light ">I accept the <a className="font-medium text-gray-600 hover:underline hover:text-blue-600" href="/terms">Terms and Conditions</a></label>
                                </div>
                            </div>
                            {mutation.isError && <p className='text-error'>{mutation.error.response.data.data}</p>}
                            {mutation.isLoading?(<button type="submit" disabled className="btn btn-primary w-full" >{"Loading"}</button>)
                            :(<button type="submit" className="btn btn-primary w-full" >{"Create an account"}</button>)}
                              
                            <p className="text-sm font-light ">
                                Already have an account? <a href="/login" className="pl-1 font-medium text-gray-600 hover:underline hover:text-blue-600">Login here</a>
                            </p>
                        </form>
                    </div>
                </div>
           
    )
}

export default register;

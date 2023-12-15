import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query';
import axios from '../../config/axiosConfig';
import { API_ENDPOINTS } from '../../config/apiConfig';
import { useNavigate } from 'react-router-dom';
import { getCookie } from './GetCookie';



export const useUserState = () => useQuery({
    queryKey: ['userState'],
    refetchOnWindowFocus: false,
    queryFn: () => getLoggedInStatus(),
    
})



export const loginMutation = () => {
    let queryClient = useQueryClient()
    const navigate = useNavigate();


    const mutation = useMutation({

        mutationFn: ({ email, password }: { email: string, password: string }) => {

            return authPost(email, password)


        },
        onSuccess: (data: any) => {
            //one csrftoken per session is needed
            //since we updated the session when the user logged in, we also need to update the csrf token value
            console.log(getCookie("csrftoken"))
            axios.defaults.headers.post['X-CSRFToken']=getCookie("csrftoken")
            axios.defaults.headers.delete['X-CSRFToken']=getCookie("csrftoken")
            axios.defaults.headers.put['X-CSRFToken']=getCookie("csrftoken")
            axios.defaults.headers.patch['X-CSRFToken']=getCookie("csrftoken")
            
            queryClient.setQueryData(['userState'], (old: any) => data)
            sessionStorage.setItem("user", JSON.stringify(data));

            navigate("/dashboard");


        },
        onError: (error: any) => {
            console.log(error)
            //TODO set the user state to loggedIn false

        },
    })

    return mutation



}

export const logoutMutation = () => {
    let queryClient = useQueryClient()
    const navigate = useNavigate();
    const mutation = useMutation({

        mutationFn: () => {

            return logoutPost()


        },
        onSuccess: (data: any) => {
        
            const obj = {loggedIn:false}
            queryClient.setQueryData(['userState'], (old: any) => obj)
            // Clear user data from session storage
            sessionStorage.removeItem("user");
            navigate('/logout', { state: { data:" You have been sucessfuly logged out of the system" } });


        },
        onError: (error: any) => {
            console.log(error)


        },
    })

    return mutation
}

export const registerMutation =()=>{
    let queryClient = useQueryClient()
    const navigate = useNavigate();
    const mutation = useMutation({

        mutationFn: ({ email, password,re_password,username }: { email: string, password: string, re_password:string,username:string }) => {

            return registerPost(email, password,re_password,username)


        },
        onSuccess: (data: any) => {
            navigate("/login")
          


        },
        onError: (error: any) => {
            //TODO handle server error and return it
            console.log(error)


        },
    })

    return mutation

}


export const authPost = async (email: string, password: string) => {

    const response = await axios.post(API_ENDPOINTS.login, {
        email: email,
        password: password
    },
        {
            headers: {
                'Content-Type': 'application/json'
            },
            withCredentials: true


        }
    )

    return response.data

}

const logoutPost = async () => {

    const response = await axios.post(API_ENDPOINTS.logout, {},
        {
            headers: {
                'Content-Type': 'application/json',

            },
            withCredentials: true,

        }
    )
    return response.data

}

const registerPost = async (email: string, password: string, re_password: string, username: string) => {
    const response = await axios.post(API_ENDPOINTS.register, {
        email: email,
        password: password,
        re_password: re_password,
        username: username
    },
        {
            headers: {
                'Content-Type': 'application/json',

            },
            withCredentials: true,

        }
    )
    return response.data

}




const getLoggedInStatus=async()=>{
    const response = await axios.get(API_ENDPOINTS.getUserStatus,{withCredentials: true})
    return response.data
}
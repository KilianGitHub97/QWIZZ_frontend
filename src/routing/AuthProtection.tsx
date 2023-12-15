import React from 'react';
import {Navigate, useLocation} from "react-router-dom"
import { useQueryClient } from '@tanstack/react-query';

const AuthProtection = ({children}:{children:any}) => {
  let queryClient = useQueryClient()
  let location = useLocation();

  // Retrieve user data from session storage
  const storedUser:any = sessionStorage.getItem("user")
  const userState = JSON.parse(storedUser);  

  if(!userState?.loggedIn) {
    return <Navigate to="/login" state={{ from: location}} replace />
}
return children
}

export default AuthProtection
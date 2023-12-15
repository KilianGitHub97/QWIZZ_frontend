import { FC, useEffect } from 'react';
// import './App.css'
import { Link, Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Chat from "./pages/chat";
import Error404 from './pages/error404';
import Login from './pages/login';
import Register from './pages/register';
import Dashboard from './pages/dashboard';
import IntroductionPageLogged from './pages/introductionLogged';
import axios from './config/axiosConfig';
import IntroductionPage from './pages/introduction';
import UsecasesPage from './pages/usecases';
import Terms from './pages/terms';
import { API_ENDPOINTS } from './config/apiConfig';
import Logout from './pages/logout';
import AuthProtection from './routing/AuthProtection';



const App: FC = () => {

  useEffect(() => {
    //get initial csrf token
    axios.get(API_ENDPOINTS.getCSRFToken, { withCredentials: true })
      .then(res => { })
      .catch(err => console.log(err))
  }, [])

  return (
    <div id="App">
      {/* Defining routes path and rendering components as element */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/introduction" element={<IntroductionPage />} />
        <Route path="/usecases" element={<UsecasesPage />} />

        <Route path="/project/:project_id" element=
        {
          <AuthProtection>
            <Chat />
          </AuthProtection>

        } />

        <Route path="/dashboard/introduction" element=
        {
          <AuthProtection>
            <IntroductionPageLogged />
          </AuthProtection>
        
        } />


        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/dashboard" element={
           <AuthProtection>
              <Dashboard />
           </AuthProtection>
        
        } />
        <Route path="/logout" element={<Logout />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  )
}

export default App

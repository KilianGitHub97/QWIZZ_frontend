const API_BASE_URL_DEV = 'http://localhost:8000/api'; // Replace this with your development API URL
const API_BASE_URL_PROD = 'https://qwizz-backend.ivelin.info/api'; // Replace this with your production API URL

const getBaseUrl = () => {
    console.log(process.env.NODE_ENV)
    if (process.env.NODE_ENV === 'production') {
      return API_BASE_URL_PROD;
    } else {
      return API_BASE_URL_DEV;
    }

};


export const API_BASE_URL = getBaseUrl();


export const API_ENDPOINTS = {
    postMessage:`${API_BASE_URL}/messages/`,
    getMessages:`${API_BASE_URL}/chats/`,
    getSession:`${API_BASE_URL}/set_session_cookie/`,
    postDocument:`${API_BASE_URL}/documents/`,
    deleteDocuments:`${API_BASE_URL}/delete-multiple-files/`,
    getDocuments:`${API_BASE_URL}/projects/`,
    login:`${API_BASE_URL}/users/login/`,
    logout:`${API_BASE_URL}/users/logout/`,
    register:`${API_BASE_URL}/users/register/`,
    getCSRFToken:`${API_BASE_URL}/users/get-csrf-token/`,
    getUserStatus:`${API_BASE_URL}/users/auth-status/`,
    getChats:`${API_BASE_URL}/projects/`,
    getProject:`${API_BASE_URL}/projects/`,
    createChat:`${API_BASE_URL}/chats/`,
    renameChat:`${API_BASE_URL}/chats/`,
    deleteChat:`${API_BASE_URL}/chats/`,
    getProjects:`${API_BASE_URL}/projects/`,
    postProject:`${API_BASE_URL}/projects/`,
    deleteProject:`${API_BASE_URL}/projects/`,
    partialUpdateProject:`${API_BASE_URL}/projects/`,
    metadata:`${API_BASE_URL}/documents/`,
    getPDF:`${API_BASE_URL}/get-chat-pdf/`,
    patchMessage: `${API_BASE_URL}/messages/`,
    deleteMessage: `${API_BASE_URL}/messages/`,
    fetchQuestions: `${API_BASE_URL}/documents/`,
    fetchNotes: `${API_BASE_URL}/projects/`,
    addNote: `${API_BASE_URL}/notes/`,
    updateNote: `${API_BASE_URL}/notes/`,
    deleteNote: `${API_BASE_URL}/notes/`,
    createDetails:`${API_BASE_URL}/create-doc-details/`
    // Add more endpoints here
  };
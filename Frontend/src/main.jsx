import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import AuthState from './context/AuthState.jsx';
import "./index.css";
import {BrowserRouter} from 'react-router-dom'
// import {Provider} from '@/components/ui/provider'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
createRoot(document.getElementById('root')).render(

    <BrowserRouter>
    <AuthState>
         <App/>
        <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss ={false}
        draggable
        pauseOnHover = {false}
        theme="light"
      />
    </AuthState>
   
    </BrowserRouter>

)

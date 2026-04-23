import React, { useContext } from 'react';
import { logout } from '../api/authApi';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../utils/routesNaming';

const ProfileIcon = () => {
const {setLoginStatus,setCurrUser} = useContext(AuthContext)
const navigate = useNavigate();
const logoutUser =async () => {
    try {

const res = await logout();

        setLoginStatus(false)
        setCurrUser(false)
        navigate(ROUTES.HOME)

    } catch (error) {
        console.log(`${error.response.data.message} ${error.status}` )
    }
    finally{

    }
    
    
    logout() 

}


    return (
        <div>
            <button onClick={logoutUser} className='bg-gray-300 px-4 py-2 rounded-xs'>
                Logout
            </button>
        </div>
    );
}

export default ProfileIcon;

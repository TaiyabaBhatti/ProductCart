import React, { useContext } from 'react';
import { logout } from '../api/authApi';
import { AuthContext } from '../context/AuthContext';
logout
const ProfileIcon = () => {
const {setLoginStatus,setCurrUser} = useContext(AuthContext)
const logoutUser =async () => {
    try {
const res = await logout();
        setLoginStatus(false)
        setCurrUser(false)
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

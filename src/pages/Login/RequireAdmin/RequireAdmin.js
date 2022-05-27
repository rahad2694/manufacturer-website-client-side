import { signOut } from 'firebase/auth';
import React, { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import UseAdmin from '../../../hooks/UseAdmin';
import Spinners from '../../shared/Spinners';

const RequireAdmin = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();
    const [role, isLoading, error] = UseAdmin();

    console.log('OUT-', role);
    useEffect(() => {
        if (!role || !user) {
            console.log(role);
            localStorage.removeItem('accessToken');
            signOut(auth);
            navigate('/');
        }
        // if (isLoading || loading) {
        //     return <Spinners></Spinners>
        // }
        // if (error) {
        //     toast.error(error.message, { id: 'error' });
        //     return;
        // }
    }, [user, navigate,role]);

    if (isLoading || loading) {
        return <Spinners></Spinners>
    }
    if (error) {
        toast.error(error.message, { id: 'error' });
        return;
    }
    // if (!isAdmin || !user) {
    //     console.log(isAdmin);
    //     localStorage.removeItem('accessToken');
    //     signOut(auth);
    //     navigate('/');
    // }


    return children;
};

export default RequireAdmin;
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
    const [isAdmin, isLoading, error] = UseAdmin();


    // useEffect(() => {
    //     if (!isAdmin || !user) {
    //         localStorage.removeItem('accessToken');
    //         signOut(auth);
    //         navigate('/');
    //     }
    //     if (isLoading || loading) {
    //         return <Spinners></Spinners>
    //     }
    //     if (error) {
    //         toast.error(error.message, { id: 'error' });
    //         return;
    //     }
    // }, [user, navigate]);
    if (!isAdmin || !user) {
        localStorage.removeItem('accessToken');
        signOut(auth);
        navigate('/');
    }
    if (isLoading || loading) {
        return <Spinners></Spinners>
    }
    if (error) {
        toast.error(error.message, { id: 'error' });
        return;
    }


    return children;
};

export default RequireAdmin;
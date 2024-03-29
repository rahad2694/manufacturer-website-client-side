import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import auth from "../firebase.init";

const UseGetUser = () => {
    const [user, loading, userError] = useAuthState(auth);
    const [intervals, setIntervals] = useState(1000);
    const { isLoading: dbLoading, error: dbError, data: userInfo } = useQuery(['toolsDataLoad', intervals], () =>
        fetch(`https://manufacturer-website-server-side-i374.onrender.com/user/${user?.email}`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
        }).then(res =>
            res.json()
        ),
        {
            // Refetch the data every second
            refetchInterval: intervals,
        }
    );
    let isLoading = dbLoading || loading;
    let error = dbError || userError;
    return [userInfo, isLoading, error];
}

export default UseGetUser;
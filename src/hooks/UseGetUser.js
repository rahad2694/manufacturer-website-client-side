import axios from "axios";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import auth from "../firebase.init";


const UseGetUser = () => {
    const [user, loading, userError] = useAuthState(auth);
    const [intervals, setIntervals] = useState(1000);
    const { isLoading: dbLoading, error: dbError, data: userInfo } = useQuery(['toolsDataLoad'], () =>
        fetch(`http://localhost:5000/user/${user?.email}`).then(res =>
            res.json()
        ),
        // await axios.get(`http://localhost:5000/user/${user?.email}`),
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
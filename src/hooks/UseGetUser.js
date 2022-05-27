import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import auth from "../firebase.init";


const UseGetUser = () => {
    const [user] = useAuthState(auth);
    const [intervals, setIntervals] = useState(1000);
    const { isLoading, error, data: userInfo } = useQuery(['toolsData'], () =>
        fetch(`http://localhost:5000/user/${user?.email}`).then(res =>
            res.json()
        ),
        {
            // Refetch the data every second
            refetchInterval: intervals,
        }
    );

    return [userInfo, isLoading, error];
}

export default UseGetUser;
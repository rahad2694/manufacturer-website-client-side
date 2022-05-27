import { useState } from "react"
import UseGetUser from "./UseGetUser";


const UseAdmin = ()=>{
    const [isAdmin, setIsAdmin] = useState(false);
    const [userInfo, isLoading, error] = UseGetUser();
    if(userInfo.role ==='admin'){
        setIsAdmin(true);
    }
    return [isAdmin,isLoading, error];
}

export default UseAdmin;
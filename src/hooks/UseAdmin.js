import { useState } from "react"
import toast from "react-hot-toast";
import Spinners from "../pages/shared/Spinners";
import UseGetUser from "./UseGetUser";


const UseAdmin = () => {
    // const [isAdmin, setIsAdmin] = useState(false);
    const [userInfo, isLoading, error] = UseGetUser();
    // if(isLoading){
    //     return <Spinners></Spinners>
    // }
    // if(error){
    //     toast.error(error.message,{id:'error'});
    //     return;
    // }
    let role='';
    if (userInfo.role === 'admin') {
        // setIsAdmin(true);
        role='admin';
        return [role, isLoading, error];

    }
    return [role, isLoading, error];
}

export default UseAdmin;
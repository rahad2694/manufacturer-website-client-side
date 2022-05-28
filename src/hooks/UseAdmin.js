import UseGetUser from "./UseGetUser";


const UseAdmin = () => {
    const [userInfo, isLoading, error] = UseGetUser();

    let role='';
    if (userInfo.role === 'admin') {
        role='admin';
        return [role, isLoading, error];
    }
    return [role, isLoading, error];
}

export default UseAdmin;
import { Children } from "react";
import { useAuth } from "../../AuthContext/AuthContext";
import { Navigate,useLocation } from "react-router";

const AuthRoute=({children})=>{
    const location=useLocation();
    const [isAuthenticated,isLoading,isError]=useAuth();
    if(isLoading){
        <h1>loading</h1>
    }
    if(isError || isAuthenticated===false){
        return <Navigate to="/login" state={{from:location}} replace/>
    }
    return children;
}
export default AuthRoute;

import { createContext, useContext, useEffect, useState } from "react";
import { checkUserAuthStatusAPI } from "../apis/users/usersAPI";
import { useQuery } from "@tanstack/react-query";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  const { isError, isLoading, data, isSuccess } = useQuery({
    queryKey: ['checkAuth'],
    queryFn: checkUserAuthStatusAPI,
    
  });
  useEffect(()=>{
    if(isSuccess){
        setIsAuthenticated(data);
    }
  },[data,isSuccess]);

  const login = () => {
    setIsAuthenticated(true);
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, isError, isLoading, isSuccess, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

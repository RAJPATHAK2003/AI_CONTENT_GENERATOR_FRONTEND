import axios from "axios";

export const registerAPI = async (userData) => {
    try {
        const response = await axios.post(
            "http://localhost:8090/api/v1/users/register",
            {
                email: userData?.email,
                password: userData?.password,
                username: userData?.username
            },
            {
                withCredentials: true,
            }
        );
        console.log(response);
        return response?.data;
    } catch (error) {
        console.error('Error during user registration:', error);
        // Handle or rethrow the error as needed
        throw error;
    }
};

export const loginAPI = async (userData) => {
    try {
        const response = await axios.post(
            "http://localhost:8090/api/v1/users/login",
            {
                email: userData?.email,
                password: userData?.password,
               
            },
            {
                withCredentials: true,
            }
        );
        console.log(response);
        return response?.data;
    } catch (error) {
        console.error('Error during user registration:', error);
        // Handle or rethrow the error as needed
        throw error;
    }
};

export const checkUserAuthStatusAPI = async () => {
    try {
        const response = await axios.get(
            "http://localhost:8090/api/v1/users/auth/check",
            
            {
                withCredentials: true,
            }
        );
        console.log(response);
        return response?.data;
    } catch (error) {
        console.error('Error during user registration:', error);
        // Handle or rethrow the error as needed
        throw error;
    }
};

export const logoutAPI = async () => {
    try {
        const response = await axios.post(
            "http://localhost:8090/api/v1/users/logout",
            {},
            
            {
                withCredentials: true,
            }
        );
        console.log(response);
        return response?.data;
    } catch (error) {
        console.error('Error during user registration:', error);
        // Handle or rethrow the error as needed
        throw error;
    }
};

export const getUserProfileAPI = async () => {
    try {
        const response = await axios.get(
            "http://localhost:8090/api/v1/users/profile",
            {
                withCredentials: true,
            }
        );
        console.log(response);
        return response?.data;
    } catch (error) {
        console.error('Error during user registration:', error);
        // Handle or rethrow the error as needed
        throw error;
    }
};
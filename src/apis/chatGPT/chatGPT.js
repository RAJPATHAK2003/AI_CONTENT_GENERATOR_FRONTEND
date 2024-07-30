import axios from "axios";


export const generatedContentAPI = async (userPromt) => {
    try {
        const response = await axios.post(
            "http://localhost:8090/api/v1/openai/generate-content",
            {
                prompt:userPromt,
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
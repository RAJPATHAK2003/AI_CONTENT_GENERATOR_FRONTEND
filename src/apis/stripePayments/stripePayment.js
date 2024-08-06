import axios from "axios";


export const handleFreeSubscriptionAPI = async (userPromt) => {
    try {
        const response = await axios.post(
            "https://ai-content-generator-frontend-taupe.vercel.app/api/v1/stripe/free-plan",
            {
                
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
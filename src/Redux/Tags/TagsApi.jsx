import axiosInstance from "../../Hooks/UseAxiosSecureHook";

export const getTags = async () => {
    const response = await axiosInstance.get("/tags");

    return response.data;
};
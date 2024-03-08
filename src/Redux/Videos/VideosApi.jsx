import axiosInstance from '../../Hooks/UseAxiosSecureHook'
export const getVideos = async () => {
    const response = await axiosInstance.get("/videos");

    return response.data;
};
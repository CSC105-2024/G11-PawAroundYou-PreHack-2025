import { axiosInstance } from "../axios";

export const deleteRequest = async (requestId) => {
    try {
        const res = await axiosInstance.delete(`/request/delete?requestId=${requestId}`);
        return {
            success: true,
            data: res.data,
        };
    } catch (e) {
        console.log(e);
        return {
            success: false,
            data: null,
        }
    }
}
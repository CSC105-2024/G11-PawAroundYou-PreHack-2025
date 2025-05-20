import { axiosInstance } from "../axios";

export const editRequest = async (requestId, formData) => {
    try {
        const res = await axiosInstance.patchForm(`/request/edit?requestId=${requestId}`, formData);
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
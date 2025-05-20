import { axiosInstance } from "../axios";

export const createRequest = async (data) => {
    try {
        const res = await axiosInstance.post("/request/create", data);
        console.log(res)
        return {
            success: true,
            data: res.data,
        }
    } catch (err) {
        console.log(err);
        return {
            success: false,
            data: null
        }
    }
};
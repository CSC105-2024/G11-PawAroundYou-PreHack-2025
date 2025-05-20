import { axiosInstance } from "../axios";

export const createAccount = async (data) => {
    try {
        const res = await axiosInstance.post("/user/create", data);
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
import { axiosInstance } from "./../axios";

export const getAllRequestFromUser = async () => {
  try {
    const res = await axiosInstance.get("/user/requests");
    // console.log(res);
    return {
      success: true,
      data: res.data,
    };
  } catch (e) {
    console.log(e);
    return {
      success: false,
      data: null,
    };
  }
};

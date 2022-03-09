import axiosInstance from "../../../utils/axios";



export const login = async (username, password) => {
    const data = { username, password };
    const response = await axiosInstance.post('/api-index/dang-nhap', data);
    return response;
}
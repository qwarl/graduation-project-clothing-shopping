import axiosInstance from "../../../utils/axios";



export const getProduct = async () => {
    
    const response = await axiosInstance.post('/api-product', data);
    return response;
}
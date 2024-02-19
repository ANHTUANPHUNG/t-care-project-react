import axios from "axios";
import { toast } from "react-toastify";

const UserServiceAPI = {
    getAllCustomer: async () => {
        return axios
            .get(process.env.REACT_APP_API_CUSTOMERS)
            .then((resp) => {
                return resp.data;
            })
            .catch((err) => {
                console.log(err);
            });
    },
    signInUser: async (postData, navigate, url) => {
        return axios
            .post(process.env.REACT_APP_API_AUTH_CART_ACCOUNT, postData)
            .then((resp) => {
                const login = {
                    username: postData.email,
                    password: postData.password,
                };
                axios.post(process.env.REACT_APP_API_AUTH_LOGIN, login);
                toast.success("Tài khoản được tạo thành công");
                navigate(url + "/" + resp.data);
            })
            .catch((err) => {
                toast.error(err.response.data);
            });
    },
    signInUserReturnLogin: async (postData, navigate, url) => {
        return axios
            .post(process.env.REACT_APP_API_AUTH_USER_ACCOUNT, postData)
            .then((resp) => {
                toast.success("Tài khoản được tạo thành công");
                navigate(url);
            })
            .catch((err) => {
                toast.error(err.response.data);
            });
    },
    updateLocation: async (id, postData, navigate, url) => {
        return axios
            .put(`${process.env.REACT_APP_API_CARTS_LOCATION}/${id}`, postData)
            .then((resp) => {
                toast.success("Thêm địa chỉ thành công");
                navigate(url + "/" + id);
            })
            .catch((err) => {
                console.error("Lỗi khi gửi POST request:", err);
                navigate(`/user/address` + "/" + id);
                toast.error("Lỗi khi gửi thông tin vị trí");
            });
    },
};
export default UserServiceAPI;

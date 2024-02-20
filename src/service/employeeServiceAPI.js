import axios from "axios";
import { toast } from "react-toastify";
const EmployeeServiceAPI = {
    getRatesTopThree: async () => {
        return axios
            .get(process.env.REACT_APP_API_RATES_TOP3)
            .then((resp) => {
                return resp.data;
            })
            .catch((err) => {
            });
    },
    signInEmployee: async (postData, navigate, url) => {
        return axios
            .post(process.env.REACT_APP_API_AUTH_SIGN_IN_EMPLOYEE, postData)
            .then((resp) => {
                toast.success("Tài khoản được tạo thành công");
                navigate(url + "/" + resp.data);
            })
            .catch((err) => {
                toast.error(err.response.data);
            });
    },
    updateLocation: async (id, postData, navigate, url) => {
        return axios
            .put(`${process.env.REACT_APP_API_EMPLOYEES_LOCATION}/${id}`, postData)
            .then((resp) => {
                toast.success("Đăng kí địa chỉ thành công");
                navigate(url + "/" + id);
            })
            .catch((err) => {
                navigate(`/assistant/process/${id}`);
                // toast.error("Bạn đã đăng kí địa chỉ rồi!");
            });
    },
};
export default EmployeeServiceAPI;

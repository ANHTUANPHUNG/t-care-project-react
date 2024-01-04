import axios from "axios";
const PREFIX = "http://localhost:8080";

const EmployeeServiceAPI = {
    getAllCustomer: async () => {
        return axios
            .get(PREFIX + "/customers")
            .then((resp) => {
                return resp.data;
            })
            .catch((err) => {
                console.log(err);
            });
    },
};
export default EmployeeServiceAPI;

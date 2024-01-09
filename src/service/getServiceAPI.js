import axios from "axios";
const PREFIX = "http://localhost:8080/api";

const GetServiceAPI = {
    getServiceGeneral: async () => {
        return axios
            .get(PREFIX + "/serviceGenerals")
            .then((resp) => {
                return resp.data;
            })
            .catch((err) => {
                console.log(err);
            });
    },
    keyGGMap: "AIzaSyBPFhgGX5wghzuKBgfwoETGm3E0CO2Xhrc",
};
export default GetServiceAPI;

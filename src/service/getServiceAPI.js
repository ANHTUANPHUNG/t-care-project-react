import axios from "axios";

const GetServiceAPI = {
    getServiceGeneral: async () => {
        return axios
            .get(process.env.REACT_APP_API_SERVICE_GENERALS)
            .then((resp) => {
                return resp.data;
            })
            .catch((err) => {
                console.log(err);
            });
    },

    keyGGMap: "AIzaSyCt8QVGyxMTDKMSwxXN7qlcXvYXf5bwGaY",
};
export default GetServiceAPI;

import axios from "axios";

import Cookies from "js-cookie";

let isInstalledOnStaticObject = false;
export const installInterceptor = (axios) => {
    axios.interceptors.request.use(
        async (config) => {
            config.headers = {
                Accept: "*/*",
                Authorization: Cookies.get("token"),
            };
            config.baseURL = "https://reqres.in/";
            return config;
        },
        (error) => Promise.reject(error)
    );

    axios.interceptors.response.use(
        function (response) {
            return response;
        },
        function (error) {
            return Promise.reject(error);
        }
    );
};

if (!isInstalledOnStaticObject) {
    isInstalledOnStaticObject = true;
    installInterceptor(axios);
}

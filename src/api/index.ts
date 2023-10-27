import axios from 'axios';

const crudDemoService = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL || "http://localhost:8080",
    timeout: 5000
});

// 请求拦截器
crudDemoService.interceptors.request.use(config => {
    const token = localStorage.getItem("token");
    if (token) {
        config.headers.Authorization =  token;
    }
    return config;
}, error => {
    return Promise.reject(error);
});

// 响应拦截器
crudDemoService.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.message === "Network Error" || error.response?.status >= 500) {
            // router.push({ pathname: "/error", query: { errorcode: 500 } });
        }

        if (error.response?.status === 403 && error.response.data === "login token is not valid") {
            // router.push({ pathname: "/hint", query: { msg: "You need sign in first." } });
        }
        return Promise.reject(error);
    }
);

export default crudDemoService;

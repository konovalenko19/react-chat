import axios from 'axios';

import baseUrl from './baseUrl';

let axiosInit = null;

function getInitializedAxios() {
    // Возвращаем api, если он уже инициализирован
    if (axiosInit) return axiosInit;

    axiosInit = axios.create({
        baseURL: baseUrl(),
        timeout: 60000,
        responseType: "json",
    });

    return axiosInit;
}

getInitializedAxios();

export default axiosInit;

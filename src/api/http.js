import axios from './axios';

const ACCEPT_LANGUAGE = 'ru-RU,ru';

export const get = ({ url, headers = {}, params = {} }) => axios({
    method: 'GET',
    url,
    headers: {
        'Accept-Language': ACCEPT_LANGUAGE,
        ...headers,
    },
    params: {
        ...params,
    },
});

export const post = ({ url, headers = {}, params = {} }) => axios({
    method: 'POST',
    url,
    headers: {
        'Accept-Language': ACCEPT_LANGUAGE,
        Accept: 'application/json',
        ...headers,
    },
    ...params,
});

export const handleError = (error) => error.message;

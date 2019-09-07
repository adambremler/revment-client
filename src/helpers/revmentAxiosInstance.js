import axios from 'axios';
import { logout } from '../actions/userActions';

const instance = axios.create({
    baseURL: process.env.REACT_APP_API_URL
});

export const initAxios = ({ dispatch }) => {
    instance.interceptors.response.use(
        response => {
            return response;
        },
        error => {
            if (error.response.data.msg === 'Token expired') {
                dispatch(logout());
            }

            return Promise.reject(error);
        }
    );
};

export default instance;

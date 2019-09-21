import axios from 'axios';
import { logOut } from '../actions/userActions';

const instance = axios.create({
    baseURL: process.env.REACT_APP_API_URL
});

export const initAxios = ({ dispatch }) => {
    instance.interceptors.response.use(
        response => {
            return response;
        },
        error => {
            if (
                error.response &&
                error.response.data.error === 'Token expired'
            ) {
                dispatch(logOut());
            }

            return Promise.reject(error);
        }
    );
};

export default instance;

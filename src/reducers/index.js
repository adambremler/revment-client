import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import user from './userReducer';
import signUp from './signUpReducer';
import logIn from './logInReducer';
import url from './urlReducer';
import search from './searchReducer';

const rootReducer = history =>
    combineReducers({
        router: connectRouter(history),
        user,
        signUp,
        logIn,
        url,
        search
    });

export default rootReducer;

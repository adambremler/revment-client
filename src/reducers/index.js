import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import user from '../reducers/userReducer';
import signUp from '../reducers/signUpReducer';
import logIn from '../reducers/logInReducer';

const rootReducer = history =>
    combineReducers({
        router: connectRouter(history),
        user,
        signUp,
        logIn
    });

export default rootReducer;

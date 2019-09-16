import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import signUp from '../reducers/signUpReducer';
import user from '../reducers/userReducer';

const rootReducer = history =>
    combineReducers({
        router: connectRouter(history),
        signUp,
        user
    });

export default rootReducer;

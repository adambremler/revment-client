import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import user from './userReducer';
import signUp from './signUpReducer';
import logIn from './logInReducer';
import url from './urlReducer';
import search from './searchReducer';
import urlVote from './urlVoteReducer';

const rootReducer = history =>
    combineReducers({
        router: connectRouter(history),
        user,
        signUp,
        logIn,
        url,
        search,
        urlVote
    });

export default rootReducer;

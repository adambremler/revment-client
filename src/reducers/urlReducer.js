import {
    GET_URL_BY_URL_REQUEST,
    GET_URL_BY_URL_SUCCESS,
    GET_URL_BY_URL_FAILURE,
    GET_URL_BY_ID_REQUEST,
    GET_URL_BY_ID_SUCCESS,
    GET_URL_BY_ID_FAILURE,
    URL_VOTE_REQUEST,
    URL_VOTE_SUCCESS,
    LOG_IN_SUCCESS,
    LOG_OUT
} from '../constants/actionTypes';

const initialState = {
    url: null,
    fetchByURL: {
        isLoading: false,
        error: null
    },
    fetchByID: {
        isLoading: false,
        error: null
    }
};

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_URL_BY_URL_REQUEST:
            return {
                ...state,
                url: null,
                fetchByURL: {
                    ...state.fetchByURL,
                    error: null,
                    isLoading: true
                }
            };
        case GET_URL_BY_URL_SUCCESS:
            return {
                ...state,
                url: action.payload.url,
                fetchByURL: {
                    ...state.fetchByURL,
                    isLoading: false
                }
            };
        case GET_URL_BY_URL_FAILURE:
            return {
                ...state,
                fetchByURL: {
                    ...state.fetchByURL,
                    error: action.payload.error,
                    isLoading: false
                }
            };
        case GET_URL_BY_ID_REQUEST:
            return {
                ...state,
                url: null,
                fetchByID: {
                    ...state.fetchByID,
                    error: null,
                    isLoading: true
                }
            };
        case GET_URL_BY_ID_SUCCESS:
            return {
                ...state,
                url: action.payload.url,
                fetchByID: {
                    ...state.fetchByID,
                    isLoading: false
                }
            };
        case GET_URL_BY_ID_FAILURE:
            return {
                ...state,
                fetchByID: {
                    ...state.fetchByID,
                    error: action.payload.error,
                    isLoading: false
                }
            };
        case URL_VOTE_REQUEST:
            return {
                ...state,
                ...(action.payload.user
                    ? {
                          url: {
                              ...state.url,
                              points: state.url.voteValue
                                  ? action.payload.value === state.url.voteValue
                                      ? state.url.points - action.payload.value
                                      : state.url.points +
                                        action.payload.value * 2
                                  : state.url.points + action.payload.value,
                              voteValue:
                                  action.payload.value === state.url.voteValue
                                      ? 0
                                      : action.payload.value
                          }
                      }
                    : {})
            };
        case URL_VOTE_SUCCESS:
            return {
                ...state,
                url: action.payload.url
            };
        case LOG_OUT:
        case LOG_IN_SUCCESS:
            return initialState;
        default:
            return state;
    }
}
